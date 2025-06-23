<template><div><h2 id="🎨-范式二-llm-令牌-推荐系统-llm-tokens-rs" tabindex="-1"><a class="header-anchor" href="#🎨-范式二-llm-令牌-推荐系统-llm-tokens-rs"><span>🎨 范式二：LLM 令牌 + 推荐系统 (LLM Tokens + RS)</span></a></h2>
<p>如果说范式一的核心是&quot;理解&quot;，那么范式二的核心则是**&quot;创造&quot;<strong>。在这种模式下，大型语言模型（LLM）扮演了一个</strong>&quot;创意内容官&quot;<strong>或</strong>&quot;数据增强大师&quot;<strong>的角色。它不再满足于仅仅输出数学向量（Embeddings），而是直接</strong>生成可读的文本内容（Tokens）**，这些文本内容随后被用作推荐系统的增强特征或输入。</p>
<h3 id="核心思想-无中生有-信息增强" tabindex="-1"><a class="header-anchor" href="#核心思想-无中生有-信息增强"><span>核心思想：无中生有，信息增强</span></a></h3>
<p>该范式的核心在于，利用 LLM 强大的生成和推理能力，为信息不足的用户或物品&quot;脑补&quot;出有价值的文本描述，或者将原始信息提炼、改写成更利于模型利用的形式。这好比一位经验丰富的编辑，能将零散的素材加工成一篇内容翔实、重点突出的文章。这个过程的本质是<strong>利用 LLM 作为一种可控的、高质量的数据增强（Data Augmentation）和特征工程（Feature Engineering）工具</strong>。</p>
<ul>
<li><strong>对于用户（User）</strong>：当用户的行为历史很稀疏时，LLM可以根据这仅有的几次行为，生成一段描述其可能兴趣的自然语言文本，如&quot;该用户似乎偏爱复古风格的独立电影&quot;。这段文本比几个孤立的点击行为包含了更明确的语义信号。</li>
<li><strong>对于物品（Item）</strong>：LLM可以为物品生成更具吸引力的标题、更简洁的摘要，或是提取核心的属性标签。这些生成的文本（令牌）可以直接用于增强下游推荐模型的输入。</li>
</ul>
<h3 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程"><span>工作流程</span></a></h3>
<p>其工作流程通常涉及一个&quot;生成-整合&quot;的两阶段过程：</p>
<ol>
<li><strong>文本生成阶段（离线）</strong>：
<ul>
<li>针对特定的信息增强任务，设计相应的提示（Prompt）。</li>
<li>将用户或物品的原始数据输入 LLM，指令其生成新的文本内容（Tokens）。例如，输入用户看过的三部电影，要求 LLM 生成该用户的兴趣画像。</li>
<li>收集这些由 LLM 生成的文本。</li>
</ul>
</li>
<li><strong>整合应用阶段（在线/离线）</strong>：
<ul>
<li>将新生成的文本令牌，作为增强特征，与原有的用户/物品特征一同送入推荐模型进行训练。</li>
<li>这些文本特征可以通过另一个编码器（甚至可以是同一个LLM）转化为嵌入向量，再与ID特征等进行融合。</li>
</ul>
</li>
</ol>
<h3 id="经典案例剖析" tabindex="-1"><a class="header-anchor" href="#经典案例剖析"><span>经典案例剖析</span></a></h3>
<ul>
<li>
<h4 id="mint-recsys-2023-学习理解用户的自然语言需求" tabindex="-1"><a class="header-anchor" href="#mint-recsys-2023-学习理解用户的自然语言需求"><span><code v-pre>MINT</code> (RecSys 2023) - 学习理解用户的自然语言需求</span></a></h4>
<p>该研究旨在解决&quot;叙事驱动&quot;的推荐场景，即用户通过一段自然语言来描述自己的需求（例如，&quot;我想找一部关于太空探索的、有深度哲学思考的电影&quot;）。传统方法难以处理这种长文本查询。</p>
<ul>
<li>
<p><strong>核心创新</strong>：<code v-pre>MINT</code> 的做法非常巧妙，它利用 InstructGPT 进行<strong>逆向思维</strong>。它不是直接去理解用户的查询，而是先进行一个&quot;预演&quot;：将用户历史上交互过的物品列表（比如用户看过的几部电影）作为输入，反向生成一个**&quot;合成的叙事化查询&quot;**。这个查询模拟了用户可能会如何用自然语言来描述他对这些物品的共同需求。通过在海量（合成查询，交互物品）数据对上进行训练，下游的检索模型就学会了如何将用户的真实自然语言需求，与物品库进行精准匹配。</p>
</li>
<li>
<p><strong>一句话总结</strong>：<code v-pre>MINT</code> 通过让 LLM 扮演用户来&quot;编写&quot;需求，教会了推荐系统如何听懂用户的&quot;心里话&quot;，极大地提升了对复杂自然语言查询的理解能力。</p>
</li>
</ul>
</li>
<li>
<h4 id="kar-arxiv-2023-为开放世界推荐注入知识" tabindex="-1"><a class="header-anchor" href="#kar-arxiv-2023-为开放世界推荐注入知识"><span><code v-pre>KAR</code> (Arxiv 2023) - 为开放世界推荐注入知识</span></a></h4>
<p>该工作聚焦于&quot;开放世界&quot;推荐，即推荐那些模型从未见过的新物品。这个场景下，协同过滤完全失效，必须依赖内容理解。</p>
<ul>
<li>
<p><strong>核心创新</strong>：它的核心思想是利用 LLM 作为一个<strong>按需生成的外部知识库</strong>。当系统中出现一个新物品时，<code v-pre>KAR</code> 会通过精心设计的提示工程（Prompting），引导 LLM 从多个维度生成关于这个物品的&quot;知识&quot;，例如它的属性、功能、适用场景、潜在用户群体等。这些由 LLM 生成的、富有信息量的文本知识，随后被编码并用作该新物品的初始表示，从而让模型能够在没有任何交互历史的情况下，仅凭这些&quot;脑补&quot;出的知识就能做出合理的推荐。</p>
</li>
<li>
<p><strong>一句话总结</strong>：<code v-pre>KAR</code> 让 LLM 担当了新物品的&quot;百科撰写员&quot;，通过生成丰富的文本描述，完美解决了开放世界推荐中最棘手的冷启动问题。</p>
</li>
</ul>
</li>
<li>
<h4 id="genre-arxiv-2023-新闻推荐的多面手" tabindex="-1"><a class="header-anchor" href="#genre-arxiv-2023-新闻推荐的多面手"><span><code v-pre>GENRE</code> (Arxiv 2023) - 新闻推荐的多面手</span></a></h4>
<p>这是范式二在新闻推荐领域的一个典型应用，它淋漓尽致地展现了&quot;令牌生成&quot;的多功能性。</p>
<ul>
<li><strong>核心创新</strong>：<code v-pre>GENRE</code> 将 LLM 的生成能力用在了三个关键环节，分别对应三种不同的&quot;令牌&quot;：
<ol>
<li><strong>优化新闻标题（用于物品侧）</strong>：根据新闻摘要，生成更吸引人、更能反映核心内容的标题。这是一种<strong>特征改写</strong>。</li>
<li><strong>提取用户画像（用于用户侧）</strong>：从用户的阅读历史中，提取出核心的关键词作为用户画像。这是一种<strong>特征提取与浓缩</strong>。</li>
<li><strong>生成合成新闻（用于行为侧）</strong>：为用户生成其可能感兴趣的、但现实中不存在的&quot;假新闻&quot;来扩充其行为历史。这是一种典型的<strong>数据增强</strong>。</li>
</ol>
</li>
</ul>
<p>这三种生成的文本（令牌）都作为增强特征，有效地提升了新闻推荐的效果。</p>
<ul>
<li><strong>一句话总结</strong>：<code v-pre>GENRE</code> 将 LLM 变成了一个集&quot;标题党大师&quot;、&quot;用户心理分析师&quot;和&quot;数据注水师&quot;于一身的多面手，全方位地为新闻推荐系统赋能。</li>
</ul>
</li>
</ul>
<h3 id="优势与局限" tabindex="-1"><a class="header-anchor" href="#优势与局限"><span>优势与局限</span></a></h3>
<ul>
<li>
<p><strong>显著优势</strong>：</p>
<ul>
<li><strong>可解释性强</strong>：生成的文本（如用户画像关键词）是人类可读的，这为推荐的中间过程提供了很好的可解释性。</li>
<li><strong>灵活性高</strong>：可以根据不同的任务需求，设计不同的提示来生成各式各样的文本特征，应用场景非常灵活。</li>
<li><strong>有效缓解数据稀疏</strong>：通过生成合成数据或描述性文本，能够极大地丰富特征维度，尤其适用于冷启动场景。</li>
</ul>
</li>
<li>
<p><strong>主要局限</strong>：</p>
<ul>
<li><strong>两阶段流程</strong>：和范式一类似，生成与应用两阶段分离，可能存在信息损失，生成的文本不一定对下游任务最优。</li>
<li><strong>生成质量的挑战</strong>：LLM 的生成质量受到提示设计、模型本身能力等多种因素影响，可能产生低质量甚至错误的文本，反而引入噪声。</li>
<li><strong>计算成本</strong>：对于海量用户和物品进行文本生成，计算开销巨大，通常只能离线完成。</li>
</ul>
</li>
</ul>
<h2 id="📖-延伸阅读" tabindex="-1"><a class="header-anchor" href="#📖-延伸阅读"><span>📖 延伸阅读</span></a></h2>
<ul>
<li><a href="https://arxiv.org/abs/2306.02250" target="_blank" rel="noopener noreferrer">Large Language Model Augmented Narrative Driven Recommendations (MINT)</a></li>
<li><a href="https://arxiv.org/abs/2306.10933" target="_blank" rel="noopener noreferrer">Towards Open-World Recommendation with Knowledge Augmentation from Large Language Models (KAR)</a></li>
<li><a href="https://arxiv.org/abs/2305.06566" target="_blank" rel="noopener noreferrer">A First Look at LLM-Powered Generative News Recommendation (GENRE)</a></li>
</ul>
<blockquote>
<p><strong>思考题</strong></p>
<ol>
<li>范式一（LLM嵌入）和范式二（LLM令牌）的核心区别是什么？在什么情况下，你会选择使用范式二而不是范式一？</li>
<li>请设想一个场景：为一个&quot;菜谱推荐&quot;APP设计一个基于范式二的优化方案。你会让LLM生成哪些&quot;令牌&quot;（文本特征）来帮助用户更好地发现菜谱？</li>
</ol>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">🎉 章节小结</p>
<p>范式二&quot;LLM 令牌 + 推荐系统&quot;将 LLM 的角色从&quot;理解者&quot;升级为**&quot;创造者&quot;<strong>。它不满足于生成不可见的嵌入向量，而是直接</strong>产出人类可读的文本令牌**——无论是对用户兴趣的精炼总结，还是对物品卖点的创意描述，抑或是用于数据增强的合成样本。这些新创造的文本特征如同一位富有洞察力的&quot;军师&quot;提供的&quot;锦囊妙计&quot;，为推荐系统在信息稀疏或需要更强可解释性的战场上，提供了独特且强大的决策依据。</p>
</div>
<blockquote>
<p><strong>LLM 令牌 + 推荐系统</strong>，好比你的私人大厨（推荐系统）请来了一位通晓天下食材、想象力爆棚的美食家（LLM）。你只说了句&quot;想吃点开胃的&quot;，美食家不仅能心领神会，还能立刻写出一份包含&quot;柠檬草与薄荷的夏日交响&quot;、&quot;微辣山楂的味蕾探戈&quot;等诱人描述的创意菜单（生成文本特征），让大厨的烹饪（推荐）瞬间灵感四溢、直击你的灵魂。</p>
</blockquote>
</div></template>


