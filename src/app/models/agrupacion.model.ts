export class Agrupacion {
  constructor(
    public nombre: string,
    public modalidad: 'comparsa' | 'coro' | 'chirigota' | 'cuarteto',
    public letra: string,
    public musica: string,
    public direccion: string,
    public nombreAnterior?: string,
    public yearAnterior?: number,
    public enlaceYoutubeAnterior?: string
  ) {}
}
