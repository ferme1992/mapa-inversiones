export interface IProject {
  IdProyecto: number;
  codigosnip: number;
  AnioInicioProyecto: number;
  AnioFinProyecto: number;
  NombreProyecto: string;
  DuracionEstimadaProyecto: number;
  EtapaActual: string;
  CostoEstimadoProyecto: number;
  tipoproyecto: string;
  Sector: string;
  avancefinanciero: number;
  nombreproducto: string;
  meta: number;
  ejecutado: number;
  UnidaddelProducto: string;
  nombrefase: string;
  entidadejecutora: string;
  fuentefinanciacion: string;
  organismofinanciador: string;
  valorprogramado: number;
  valorejecutado: number;
  AnioEjecucionPptal: number;
  nombreregion: string;
  nombreprovincia: string;
  nombremunicipio: string;
  fechacarguearchivo: string | Date;
  fuentedatos?: string;
}
