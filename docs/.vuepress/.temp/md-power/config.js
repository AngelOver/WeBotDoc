import { defineClientConfig } from 'vuepress/client'
import Tabs from 'D:/softwore/user/git/work_code/WeBotDoc/node_modules/.pnpm/vuepress-plugin-md-power@1._cebeb340184f1fd97e1b0e6bd6eae32f/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'D:/softwore/user/git/work_code/WeBotDoc/node_modules/.pnpm/vuepress-plugin-md-power@1._cebeb340184f1fd97e1b0e6bd6eae32f/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'D:/softwore/user/git/work_code/WeBotDoc/node_modules/.pnpm/vuepress-plugin-md-power@1._cebeb340184f1fd97e1b0e6bd6eae32f/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from 'D:/softwore/user/git/work_code/WeBotDoc/node_modules/.pnpm/vuepress-plugin-md-power@1._cebeb340184f1fd97e1b0e6bd6eae32f/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import VPTimeline from 'D:/softwore/user/git/work_code/WeBotDoc/node_modules/.pnpm/vuepress-plugin-md-power@1._cebeb340184f1fd97e1b0e6bd6eae32f/node_modules/vuepress-plugin-md-power/lib/client/components/VPTimeline.vue'
import VPTimelineItem from 'D:/softwore/user/git/work_code/WeBotDoc/node_modules/.pnpm/vuepress-plugin-md-power@1._cebeb340184f1fd97e1b0e6bd6eae32f/node_modules/vuepress-plugin-md-power/lib/client/components/VPTimelineItem.vue'

import 'D:/softwore/user/git/work_code/WeBotDoc/node_modules/.pnpm/vuepress-plugin-md-power@1._cebeb340184f1fd97e1b0e6bd6eae32f/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
    app.component('VPTimeline', VPTimeline)
    app.component('VPTimelineItem', VPTimelineItem)
  },
  setup() {
    
  }
})
