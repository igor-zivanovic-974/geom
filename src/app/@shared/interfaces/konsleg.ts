export interface Konsleg {
  klijent_id: number;
  posao_id: number;
  // posao_pid?: number;
  prilog: string;
  objekat: string;
  napomena: string;
  oblik_temelja: string; // P; K; T
  df: number;
  dimb: number;
  diml: number;
  sproj: number; // opterecenje
  bs: KonslegShape[]; // tabela
  ruis: boolean; // rasterecenje
  polje1: boolean;
  polje2: boolean;
  polje3: boolean;
  polje4: boolean;
  polje5: boolean;
}

export interface KonslegShape {
  d: number;
  gama: number;
  mv: number;
}
