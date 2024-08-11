export interface ReportRegionInterface {
    current_page:   number;
    first_page_url: string;
    last_page_url:  string;
    next_page_url:  null;
    prev_page_url:  null;
    per_page:       string;
    last_page:      number;
    from:           number;
    path:           string;
    to:             number;
    total:          number;
    data:           Datum[];
}

export interface Datum {
    date:           Date;
    confirmed:      number;
    deaths:         number;
    recovered:      number;
    confirmed_diff: number;
    deaths_diff:    number;
    recovered_diff: number;
    last_update:    Date;
    active:         number;
    active_diff:    number;
    fatality_rate:  number;
    region:         Region;
}

export interface Region {
    iso:      string;
    name:     string;
    province: string;
    lat:      string;
    long:     string;
    cities:   City[];
}

export interface City {
    name:           string;
    date:           Date;
    fips:           number;
    lat:            string;
    long:           string;
    confirmed:      number;
    deaths:         number;
    confirmed_diff: number;
    deaths_diff:    number;
    last_update:    Date;
}
