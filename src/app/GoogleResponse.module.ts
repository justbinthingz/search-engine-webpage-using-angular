export interface GoogleResponse {
  kind: string;
  url: Url;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items?: (ItemsEntity)[] | null;
}
export interface Url {
  type: string;
  template: string;
}
export interface Queries {
  request?: (RequestEntityOrNextPageEntity)[] | null;
  nextPage?: (RequestEntityOrNextPageEntity)[] | null;
}
export interface RequestEntityOrNextPageEntity {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}
export interface Context {
  title: string;
}
export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}
export interface ItemsEntity {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId?: string | null;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}
export interface Pagemap {
  cse_thumbnail?: (CseThumbnailEntity)[] | null;
  // metatags?: (MetatagsEntity)[] | null;
  cse_image?: (CseImageEntity)[] | null;
  webpage?: (WebpageEntity)[] | null;
  hcard?: (HcardEntity)[] | null;
}
export interface CseThumbnailEntity {
  src: string;
  width: string;
  height: string;
}
// export interface MetatagsEntity {
//   msapplication-tilecolor?: string | null;
//   og:image: string;
//   twitter:card?: string | null;
//   twitter:title?: string | null;
//   og:type?: string | null;
//   theme-color?: string | null;
//   og:site_name?: string | null;
//   og:image:url?: string | null;
//   handheldfriendly?: string | null;
//   twitter:url?: string | null;
//   og:title?: string | null;
//   msapplication-tileimage?: string | null;
//   twitter:creator?: string | null;
//   og:description?: string | null;
//   twitter:image?: string | null;
//   og:image:secure_url?: string | null;
//   twitter:site?: string | null;
//   apple-mobile-web-app-status-bar-style?: string | null;
//   viewport?: string | null;
//   twitter:description?: string | null;
//   apple-mobile-web-app-capable?: string | null;
//   mobileoptimized?: string | null;
//   og:url?: string | null;
//   og:image:width?: string | null;
//   og:image:height?: string | null;
//   twitter:image:height?: string | null;
//   twitter:image:width?: string | null;
//   og:locale?: string | null;
//   og:image:alt?: string | null;
//   twitter:image:alt?: string | null;
//   twitter:site:id?: string | null;
//   twitter:creator:id?: string | null;
//   apple-itunes-app?: string | null;
//   tp:preferredformats?: string | null;
//   parsely-metadata?: string | null;
//   article:publisher?: string | null;
//   al:ios:app_store_id?: string | null;
//   pagenodeid?: string | null;
//   tp:preferredruntimes?: string | null;
//   tp:initialize?: string | null;
//   assettype?: string | null;
//   al:ios:app_name?: string | null;
//   author?: string | null;
//   article:author?: string | null;
//   referrer?: string | null;
//   application-name?: string | null;
//   apple-mobile-web-app-title?: string | null;
//   msapplication-tap-highlight?: string | null;
//   mobile-web-app-capable?: string | null;
// }
export interface CseImageEntity {
  src: string;
}
export interface WebpageEntity {
  image: string;
  isfamilyfriendly: string;
  keywords: string;
  inlanguage: string;
  lastreviewed: string;
  sourceorganization: string;
  description: string;
  datecreated: string;
  url: string;
  contentrating: string;
  datemodified: string;
  maincontentofpage: string;
  name: string;
}
export interface HcardEntity {
  note?: string | null;
  bday: string;
  fn: string;
  nickname: string;
  label?: string | null;
  category: string;
  url_text?: string | null;
  logo?: string | null;
  url?: string | null;
}
