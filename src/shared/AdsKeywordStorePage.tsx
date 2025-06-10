import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useAtom } from "jotai";
import * as _ from "lodash";

import { keywordSourceAtom, totalKeywordAtom } from "./KeywordAtom";
import { KeywordMapper } from "./domain/KeywordMapper";

// export const keywordState = atom<string>({
//   key: 'keywordState',
//   default: ''
// });
//
// export const keywordSourceState = selector<{ source: string, tail: string }>({
//   key: '',
//   get: ({ get }) => {
//     const keyword = get(keywordState);
//     const result = keyword.split(':');
//
//     return {
//       source: result.length > 1 ? result[0] : '',
//       tail: result.length > 1 ? result[1] : ''
//     };
//   }
// });

export const AdsKeywordStorePage = () => {
  // const cookies = new Cookies();
  const location = useLocation();
  // const setKeyword = useSetRecoilState(keywordState);
  const [keyword, setKeyword] = useAtom(totalKeywordAtom);
  const [, setKeywordSource] = useAtom(keywordSourceAtom);

  // useEffect(() => {
  //   // console.log('test');
  //   // const keyword = cookies?.get('ads_keyword') ?? '';
  //   if (keyword !== '') {
  //     setKeyword(keyword);
  //     return;
  //   }
  //
  //   const query = queryString.parse(location.search);
  //   if (query.keyword !== '') {
  //
  //     let term = query.utm_term;
  //     if (term === '{keyword}') {
  //       term = query.DMKW;
  //     }
  //     if (typeof term === 'string' || term == null) {
  //       const source = query.utm_source as string;
  //       const medium = query.utm_medium as string;
  //       const adsKeyword = matchKeyword(term ?? '', source, medium);
  //       setKeyword(adsKeyword);
  //       cookies?.set('ads_keyword', adsKeyword);
  //       return;
  //     }
  //
  //     const source = query.utm_source as string[];
  //     const medium = query.utm_medium as string[];
  //     const adsKeyword = matchKeyword(term[1] ?? '', source[0], medium[0]);
  //     setKeyword(adsKeyword);
  //     cookies?.set('ads_keyword', adsKeyword);
  //   }
  // }, [cookies, location.search, setKeyword]);

  useEffect(() => {
    const query = queryString.parse(location.search);
    // TODO : 요기다 그냥 저장하자
    // TODO : source/medium/campaign/content/term
    console.log("keyword", keyword);
    console.log("query", query.utm_campaign);

    const { utm_source, utm_medium, utm_campaign, utm_content, utm_term } =
      query;
    const newKeywords = `${utm_source || "null"}/${utm_medium || "null"}/${
      utm_campaign || "null"
    }/${utm_content || "null"}/${utm_term || "null"}`;
    console.log("newKeywords : ", newKeywords);
    if (query.keyword !== "") {
      if (!_.isEmpty(query)) {
        setKeywordSource(query);
      }
      const adsKeyword = KeywordMapper.mapKeyword(query);

      if (newKeywords === "null/null/null/null/null") return;

      if (keyword.first === "") {
        // setKeyword({ first: adsKeyword }); // 기존
        setKeyword({ first: newKeywords });
        return;
      }
      // setKeyword({ final: adsKeyword }); // 기존
      setKeyword({ final: newKeywords });
    }
  }, [location.search]);

  return null;
};

export default AdsKeywordStorePage;
