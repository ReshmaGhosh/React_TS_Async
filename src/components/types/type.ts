export type NativeName = {
  [key: string]: {
    official: string;
    common: string;
  };
};

type Currency = { name: string; symbol: string };

type Currencies = {
  [key: string]: Currency;
};

// language: dynamic key
export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: NativeName;
  };
  languages: {
    [key: string]: string;
  };
  currencies: Currencies;
};
