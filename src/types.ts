export interface ParsedQuery {
  years: Array<number>;
  fetchAll: boolean;
  lastYear: boolean;
  format: QueryParams["format"];
}

interface QueryParams {
  y?: string | Array<string>;
  format?: "nested";
}
