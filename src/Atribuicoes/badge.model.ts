class Badge{
    nome: String
    imagem: String
    exibirBadge: boolean
  
      public getImagem(): String{
        return this.imagem;
      }
      
      public getNome(): String{
        return this.nome;
      }
      
      public getExibirBadge(): boolean{
        return this.exibirBadge
      }
      
      
      private setImagem(imagem: String): void{
        this.imagem = imagem;
      }
      
      private setNome(nome: String): void{
        this.nome = nome;
      }
      private setExibirBadge(exibirBadge: boolean): void{
        this.exibirBadge = exibirBadge;
      }
  }
  