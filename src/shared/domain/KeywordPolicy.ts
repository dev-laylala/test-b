export function matchKeyword(keyword: string = '', source: string = '', medium: string = ''): string {
  switch (source) {
    case 'DAUM_SA':
      return 'D:' + keyword;
    case 'NAVER_SA':
      return 'N:' + keyword;
    case 'GOOGLE_SA':
      return 'G:' + keyword;
    case 'GOOGLE':
      return 'G:BANNER';
    case 'MOMENT':
      return 'D:MOMENT';
    case 'KAKAO':
      return medium === 'rt_banner' ? 'D:KAKAO' : 'D:KAKAO_K';
    case 'DAUM_SL':
      return 'D:SPECIAL';
    case 'naver_blog':
      return 'N:BLOG_' + medium;
    case 'NAVER_BLOG':
      return 'N:BLOG_' + medium;
    case 'BLOG':
      return 'BLOG_' + medium;
    case 'Naver_brand':
      return 'N:' + keyword;
    case 'FACEBOOK_BN':
      return 'F:BANNER';
    default:
      return `${source}:${keyword}`[0] === ':' ? keyword : `${source}:${keyword}`;
  }
}
