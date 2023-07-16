export interface animePreview {
  message: string;
  content: {
    id: number;
    tag_type: string;
    source: string;
    url: string;
    description: string;
  } | false; // Torna o campo content opcional e aceita valor nulo
}