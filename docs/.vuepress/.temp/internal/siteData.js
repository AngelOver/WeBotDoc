export const siteData = JSON.parse("{\"base\":\"/search-rec-ads-cosmos-explorer/\",\"lang\":\"zh-CN\",\"title\":\"搜广推宇宙漫游指南\",\"description\":\"探索搜索、推荐、广告算法的迷人宇宙，LLM 领航带你从基础到前沿！\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/search-rec-ads-cosmos-explorer/img/favicon.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
