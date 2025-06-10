import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';

export const keywordAtom = atomWithStorage('keyword', {
  first: '',
  final: '',
});

export const firstKeywordAtom = atom(
  (get) => get(keywordAtom).first,
  (get, set, update: string) => {
    set(keywordAtom, { ...get(keywordAtom), first: update });
  }
);

export const finalKeywordAtom = atom(
  (get) => get(keywordAtom).final,
  (get, set, update: string) => {
    set(keywordAtom, { ...get(keywordAtom), final: update });
  }
);

export interface ITotalKeyword {
  first: string;
  final: string;
}

export const totalKeywordAtom = atom(
  (get) => {
    const first = get(firstKeywordAtom);
    const final = get(finalKeywordAtom);
    return {
      first, final
    };
  },
  (get, set, newValue: Partial<ITotalKeyword>) => {
    if (newValue.first) {
      set(firstKeywordAtom, newValue.first);
    }
    if (newValue.final) {
      set(finalKeywordAtom, newValue.final);
    }
  },
);

export const keywordSourceAtom = atomWithStorage('keyword_source', {});

export const keywordEditedAtom = atom(
  (get) => {
    const keyword = get<any>(keywordSourceAtom);
    if (keyword.utm_term) {
      keyword.utm_term = keyword.utm_term + '_T';
      return keyword;
    }
    if (keyword.utm_content) {
      keyword.utm_content = keyword.utm_content + '_T';
      return keyword;
    }
    return keyword;
  },
  (get, set, newValue: string) => {
    if (newValue) {
      set(keywordSourceAtom, newValue);
    }
  },
);
