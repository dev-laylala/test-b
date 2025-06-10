interface IKeywordQuery {
  utm_term?: string | string[];
  DMKW?: string | string[];
  utm_source?: string | string[];
  utm_medium?: string | string[];
  utm_campaign?: string | string[];
  utm_content?: string | string[];
}

interface IKeywordsForMap {
  term: string | string[];
  source: string | string[];
  medium: string | string[];
  campaign: string | string[];
  content: string | string[];
}

export class KeywordMapper {
  static mapKeyword(query: IKeywordQuery): string {
    const term = query.utm_term === '{keyword}' ? query.DMKW : query.utm_term;
    return mapKeyword({
      term,
      source: query.utm_source,
      medium: query.utm_medium,
      campaign: query.utm_campaign,
      content: query.utm_content,
    });
  }
}

function extractStringFromKeyword(keyword?: string | string[], index = 0): string {
  if (keyword == null || typeof keyword === 'string') {
    return keyword ?? '';
  }
  return keyword[index];
}

function mapKeyword(keywords: Partial<IKeywordsForMap>): string {
  const term = extractStringFromKeyword(keywords.term, 1);
  const source = extractStringFromKeyword(keywords.source);
  const medium = extractStringFromKeyword(keywords.medium);
  const campaign = extractStringFromKeyword(keywords.campaign);
  const content = extractStringFromKeyword(keywords.content);
  const keyword = term !== '' ? term : `${mapCampaign(campaign)}${content}`
  if (source == null || source === '') {
    return keyword;
  }
  switch (source) {
    case 'DAUM_SA':
      return 'D:' + keyword;
    case 'NAVER_SA':
      return 'N:' + keyword;
    case 'GOOGLE_SA':
      return 'G:' + keyword;
    case 'GOOGLE':
    case 'google':
      return 'GB:' + keyword;
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
      return 'FBN:' + keyword;
    case 'facebook':
    case 'FACEBOOK':
      return 'FB:' + content;
    default:
      return `${source}:${keyword}`;
  }
}

function mapCampaign(campaign: string): string {
  switch (campaign) {
    case 'traffic':
      return 'TR_';
    default:
      return '';
  }
}
