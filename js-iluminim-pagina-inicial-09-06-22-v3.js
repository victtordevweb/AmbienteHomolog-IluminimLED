var PaginaInicial = {

   bannerChamadaDesktop(){ //VOLTAR APOS BLACK

      if(!ILUMINIM_UTILS.screen.isDesktop()){
         return;
      }

      let target = $('.secao-banners .banner.cheio img[alt="Banner chamada"]');

      if(target.length > 0){

         let bannerChamada = 'https://blog.iluminim.com.br/wp-content/uploads/2022/05/BANNER-CHAMADA-LED-OFERTAS-FRETE-GRATIS-11-05-2022.gif';
         target.attr('src', bannerChamada);

      }
      
   },

   tarjaAbaixoMenu(){

	if(!ILUMINIM_UTILS.screen.isDesktop()){
		return;
	 }

	$('.secao-banners > .conteiner').prepend(`
		<div class="tarja-banner"><a href=""><img src="https://blog.iluminim.com.br/wp-content/uploads/2022/04/tarja-frete-gratis-26-04-2022.gif"></a></div>
	`);

   },


   bannerChamadaMobile(){

      if(!ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      //let bannerChamada = 'https://blog.iluminim.com.br/wp-content/uploads/2021/03/Banner-Principal-500x488-do-consumidor-1.gif';
      //$('.secao-banners .banner.cheio img[alt="Banner Chamada @MOBILE"]').attr('src', bannerChamada);

   },

   cronometroBannerHome(){

      $(`
         .banner.cheio .slides img[alt="Categoria -> /spots - Banner Oferta Relâmpago Spots LED"],
         .banner.cheio .slides img[alt="Categoria -> /spots - Banner Oferta Relâmpago Spots LED - @mobile"]
      `).after(`
         <div class="cronometro-banner">
            <ul class="countdown-target"></ul>
         </div>
      `);

      $('.cronometro-banner .countdown-target').yuukCountDown({
            starttime: '2016/11/11 00:00:00',
            endtime: '2030/12/30 00:00:00'
      });

      $(`
         .banner.cheio .slides img[alt="Categoria -> /spots - Banner Oferta Relâmpago Spots LED"],
         .banner.cheio .slides img[alt="Categoria -> /spots - Banner Oferta Relâmpago Spots LED - @mobile"]
      `).after(ILUMINIM_UTILS.gerarBarraProgresso());

   },

   bannerTarja(){

      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }
      
      $('.secao-banners .row-fluid.banner.cheio').after(`
         <div class="tarja-personalizada">
                     
            <ul class="lista-tarja">
               <li class="item-tarja frete-gratis">
                  
                  <a href="/pagina/condicoes-de-frete-gratis.html" class="item-tarja-conteudo">
                        <div class="item-tarja-icone">
                           ${ILUMINIM_UTILS.icones.caminhao_4}                           
                        </div>
                        <span><strong>Frete Grátis</strong>Expresso para todo Brasil! Confira as regras</span>
                  </a>
                  <div class="item-tarja-dropdown">
                        <div class="conteudo-dropdown-tarja">
                           Para pedidos acima de R$299,00* confira o regulamento!
                        </div>
                  </div>
      
               </li>
      
               <li class="item-tarja entrega-expressa">
                  
                  <a href="/pagina/politica-de-entrega.html" class="item-tarja-conteudo">
                        <div class="item-tarja-icone">
                           ${ILUMINIM_UTILS.icones.relogio_3}                           
                        </div>
                        <span><strong>Entrega a Jato</strong>Garantimos a entrega rápida do seu produto</span>
                  </a>
                  <div class="item-tarja-dropdown">
                        <div class="conteudo-dropdown-tarja">
                           Após a confirmação do pagamento o envio do pedido é feito em até 24 horas, caso contrário os custos de frete são por nossa conta!
                        </div>
                  </div>
      
               </li>
      
               <li class="item-tarja parcela">
                  
                  <a href="/pagina/politica-de-compra.html" class="item-tarja-conteudo">
                        <div class="item-tarja-icone">
                           ${ILUMINIM_UTILS.icones.cartao}
                        </div>
                        <span><strong>12x sem juros</strong>Parcele sem juros no cartão de crédito</span>
                  </a>
                  <div class="item-tarja-dropdown">
                        <div class="conteudo-dropdown-tarja">
                           As compras podem ser parceladas em até 12x sem juros e para pagamento via boleto é concedido um desconto de 5%.
                        </div>
                  </div>
      
               </li>
      
               <li class="item-tarja melhor-preco">
                  
                  <a href="/pagina/menor-preco-led.html" class="item-tarja-conteudo">
                        <div class="item-tarja-icone">
                           ${ILUMINIM_UTILS.icones.mao_porcentagem}
                        </div>
                        <span><strong>O menor preço</strong>Garantimos os melhores preços do mercado</span>
                  </a>
                  <div class="item-tarja-dropdown">
                        <div class="conteudo-dropdown-tarja">
                           Encontrou preço mais baixo em algum outro site ou recebeu proposta comercial melhor de outro fornecedor? Entre em contato conosco que faremos o possível para cobrir.
                        </div>
                  </div>
      
               </li>

               <li class="item-tarja anos-mercado">
                  
                  <a href="/pagina/quem-somos.html" class="item-tarja-conteudo">
                        <div class="item-tarja-icone">
                           ${ILUMINIM_UTILS.icones.medalha_2}
                        </div>
                        <span><strong>A maior do Brasil</strong>Já são mais de 1 milhão de clientes satisfeitos e 10 anos</span>
                  </a>
                  <div class="item-tarja-dropdown">
                        <div class="conteudo-dropdown-tarja">
                           Garantia e qualidade de quem atua há 10 anos no ramo e possuí mais de 1.000.000 clientes satisfeitos!
                        </div>
                  </div>
      
               </li>
               
               <li class="item-tarja retirada">
                  
                  <a href="#!" data-toggle="modal" data-target="#ModalRetiradaEmMaos" class="item-tarja-conteudo">
                        <div class="item-tarja-icone">
                           ${ILUMINIM_UTILS.icones.loja}
                        </div>
                        <span><strong>Encontre a Iluminim</strong>Lojas Físicas e Pontos de Retirada por todo Brasil</span>
                  </a>
                  <div class="item-tarja-dropdown">
                        <div class="conteudo-dropdown-tarja">
                           Clique e confira nossos pontos de retirada em todo o Brasil!
                        </div>
                  </div>
      
               </li>
            </ul>
      
         </div> 
      `);

   },

   aplicarDescontoPrimeiraCompra(){

      let HTMLCupomAdicionado = `
         <div class="conteudo--texto">CUPOM APLICADO</div>
         <div class="conteudo--texto-pequeno">com sucesso no carrinho! :)</div>
      `;

      let cupomAdicionado = ILUMINIM_UTILS.pegarCookie('cupom-adicionado');

      if(cupomAdicionado){

         $('.tarja-personalizada .desconto-primeira-compra--conteudo').addClass('cupom-adicionado').html(HTMLCupomAdicionado);
         return;
      }

      $(document).on('click', 'div#aplicar_desconto_primeira_compra', function(){
      
         let target = $(this).parents('.desconto-primeira-compra--conteudo');
         let htmlOriginal = target.html();
         
         target.addClass('adicionando-cupom').html(`
            <div class="conteudo--texto">APLICANDO CUPOM...</div>
         `);

         $.post('/carrinho/cupom/validar', { cupom: '20OFF' } , function(e){

            let alerta = $($.parseHTML(e)).find('.alert.alert-geral');
            alerta.find('button').remove();
        
            if(alerta.hasClass('alert-danger')){
                    
               target.removeClass('adicionando-cupom').html(htmlOriginal);
               alert(alerta.text().trim());
        
            }else {
      
               //console.log('foi sucesso!');
               //console.log(alerta.text().trim());
               ILUMINIM_UTILS.setarCookie('cupom-adicionado', true, 23);
               target.removeClass('adicionando-cupom').addClass('cupom-adicionado').html(HTMLCupomAdicionado);
        
            }
        
        });

      });

   },

   blocoTriplo(){ // VOLTAR APOS BLACK

      const BlocoTriplo = {

         ativarCarousel(){

               if(ILUMINIM_UTILS.screen.isDesktop()){

                  $('.bloco-triplo-personalizado > div .carousel-target').each(function(){

                     $(this).owlCarousel({
                           loop:true,
                           autoplay:true,
                           autoplayTimeout:15000,
                           margin:0,
                           autoHeight: false,
                           nav:true,
                           dots: false,
                           navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
                           responsive:{
                              0: {
                                 items:1
                              }
                           }
                     });

                  });

               }

         },

         ativarCronometro(){

               $('.bloco-triplo-personalizado .bloco-personalizado.bloco-2 .countdown-target').yuukCountDown({
                  starttime: '2016/11/12 00:00:00',
                  endtime: '2030/12/30 00:00:00',
               });

         },
      
         gerarObjeto(){
      
               let objeto = {
                  
                  bloco_1: [
                     {
                        nome: 'Fitas LED',
                        imagem: 'https://blog.iluminim.com.br/wp-content/uploads/2022/05/Banner-vertical-fita-led-03-05-2022.gif',
                        link: '/fitas-de-led?sort=mais_vendidos',
                     },
                     {
                        nome: 'Lâmpadas LED',
                        imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Bloco1-Lampadas-LED-29-03-2022.png',
                        link: '/lampada-led?sort=mais_vendidos',
                     },
                     {
                        nome: 'Spots LED',
                        imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Bloco1-Spots-LED-29-03-2022.png',
                        link: '/spots?sort=mais_vendidos',
                     },
                     {
                        nome: 'Arandelas LED',
                        imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Bloco1-Arandelas-LED-29-03-2022.png',
                        link: '/spots?sort=mais_vendidos',
                     },
                  ],

                  bloco_3: [
                     /*{
                        nome: 'Frete Grátis',
                        imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banners_Vertical_Frete_Gratis-11-05-2022.png',
                        link: '/frete-gratis?sort=mais_vendidos',
                     },*/
					 {
                        nome: 'Frete Grátis',
                        imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banners_Verticais_Frete_Gratis-28-03-2022.png',
                        link: '/frete-gratis?sort=mais_vendidos',
                     },
					 
                     /*{
                        nome: 'Frete Grátis RSPM-200WBF-KIT5',
                        imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banners_Verticais_Frete_Gratis_RSPM-200WBF-KIT5-25-03-2022.png',
                        link: '',
                     },
                     {
                        nome: 'Frete Grátis RSPM-200WBF-KIT10',
                        imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banners_Verticais_Frete_Gratis_RSPM-200WBF-KIT10-25-03-2022.png',
                        link: '',
                     },
                     {
                        nome: 'Frete Grátis RSPM-300WBF-KIT10',
                        imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banners_Verticais_Frete_Gratis_RSPM-300WBF-KIT10-25-03-2022.png',
                        link: '',
                     },
                     {
                        nome: 'Frete Grátis PS-Q18WBF-KIT20',
                        imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banners_Verticais_Frete_Gratis_PS-Q18WBF-KIT20-25-03-2022.png',
                        link: '',
                     },
                     {
                        nome: 'Frete Grátis PS-Q25WBF-KIT20',
                        imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banners_Verticais_Frete_Gratis_PS-Q25WBF-KIT20-25-03-2022.png',
                        link: '',
                     },
                     {
                        nome: 'Frete Grátis LUM-120BF-KIT20',
                        imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banners_Verticais_Frete_Gratis_LUM-120BF-KIT20-25-03-2022.png',
                        link: '',
                     },
                     {
                        nome: 'Frete Grátis 23597-KIT50',
                        imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banners_Verticais_Frete_Gratis_23597-KIT50-25-03-2022.png',
                        link: '',
                     },*/
                  ]

               }

               return objeto;
      
         },
      
         gerarHTML(){
      
               let objeto = this.gerarObjeto();

               let htmlList = {};

               for(bloco in objeto){

                  htmlList[bloco] = objeto[bloco].map(item=> {
                           
                     return `
                           <div>
                              <a href="${item.link}" onclick="ga('send', 'event', 'Wire Mini Home', 'click', '${item.nome}')">
                                 <img alt="${item.nome}" title="${item.nome}" src="${item.imagem}" width="407" height="530">
                              </a>
                           </div>
                     `;

                  }).join('');

               }

               return `
                  <div class="bloco-triplo-personalizado">

                     ${ ILUMINIM_UTILS.screen.isDesktop() ? `
                           <div class="bloco-personalizado bloco-1">

                              <div class="lista-bloco-1 lista-banners-bloco-personalizado carousel-target">

                                 ${htmlList.bloco_1}

                              </div>

                           </div>
                     ` : `` }

                     <div class="bloco-personalizado bloco-produtos-peronalizados bloco-2">
                           <div class="topo-bloco-produtos-peronalizados">
                              <div class="bloco-produtos-titulo">Ofertas Exclusivas!</div>
                              <ul class="countdown-target"></ul>
                           </div>
                           <div class="lista-produtos-bloco-personalizado">
                              <div class="iluminim-loading">${ ILUMINIM_UTILS.icones.loading }</div>
                           </div>
                     </div>

                     ${ ILUMINIM_UTILS.screen.isDesktop() ? `
                           <div class="bloco-personalizado bloco-3">
                              <div class="lista-bloco-2 lista-banners-bloco-personalizado carousel-target">

                                 ${htmlList.bloco_3}

                              </div>
                           </div>
                     ` : `` }

                  </div>
               `;
      
         },
      
         renderizar(){

               let target = $('.tarja-personalizada');

               if(ILUMINIM_UTILS.screen.isMobile()){

                  target = $('.secao-banners');

               }
      
               let html = this.gerarHTML();
      
               target.after(html);

               this.ativarCronometro();

               this.ativarCarousel();
      
         }
      
      }
      
      BlocoTriplo.renderizar();
      
   },

   carrouselBannersPersonalizados(){

      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      const BannersPersonalizados = {

         ativarCarousel(){

               $('.banners-personalizados .carousel-target').owlCarousel({
                  loop:true,
                  autoplay:true,
                  autoplayTimeout:10000,
                  margin:0,
                  autoHeight: false,
                  nav:true,
                  dots: false,
                  navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
                  responsive:{
                     0: {
                           items:1
                     }
                  }
               });

         },
      
         gerarObjeto(){
      
               let objeto = [
                  {
                     nome: 'Refletores LED com até 83% de desconto com até 12x sem juros',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/29-03-2022-banner-horizontal-refletores-led.png',
                     link: '/refletores-de-led?sort=mais_vendidos',
                  },
                  {
                     nome: 'Luminárias LED a partir de R$ 8,09',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/29-03-2022-banner-horizontal-luminarias-led.png',
                     link: '/luminarias-led?sort=mais_vendidos',
                  },
                  {
                     nome: 'Arandela LED',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/29-03-2022-banner-horizontal-arandelas-led.png',
                     link: '/arandela-led?sort=mais_vendidos',
                  },
                  {
                     nome: 'Spots LED',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/29-03-2022-banner-horizontal-spots-led.png',
                     link: '/spot-led?sort=mais_vendidos',
                  },
               ]

               return objeto;
      
         },
      
         gerarHTML(){
      
               let objeto = this.gerarObjeto();
      
               let htmlList = objeto.map(item=> {
      
                  return `
                     <div>
                           <a href="${item.link}" onclick="ga('send', 'event', 'Wire Mini Home', 'click', '${item.nome}')">
                              <img alt="${item.nome}" title="${item.nome}" src="${item.imagem}" width="1280" height="325">
                           </a>
                     </div>
                  `;
      
               }).join('');
      
               return `
                  <div class="banners-personalizados">
                     <div class="lista-banners-personalizados carousel-target">
                           ${htmlList}
                     </div>
                  </div>
               `;
      
         },
      
         renderizar(){
      
               let html = this.gerarHTML();
      
               $('.bloco-triplo-personalizado').after(html);

               this.ativarCarousel();
      
         }
      
      }
      
      BannersPersonalizados.renderizar();

   },


   cronometroLEDOfertas(){

      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      $('#listagemProdutos').append(`
         <div class="cronometro-led-ofertas">
               <a href="/ofertadasemana?sort=mais_vendidos" class="cronometro-led-ofertas-conteudo">
               
                  <div class="cronometro-led-ofertas-conteudo-textos">
                     <div class="cronometro-led-ofertas-conteudo-texto-1">LED OFERTAS IMBATÍVEIS</div>
                     <div class="cronometro-led-ofertas-conteudo-texto-2">Ofertas <b>super exclusivas</b> para você, <b>compre antes que acabe!</b></div>
                  </div>

                  <div class="cronometro-led-ofertas-conteudo-cronometro">
                     <div class="cronometro-led-ofertas-conteudo-cronometro-icone">
                        ${ILUMINIM_UTILS.icones.relogio_2}
                     </div>
                     <ul class="countdown-target"></ul>
                  </div>

               </a>
         </div>
      `);


      $('.cronometro-led-ofertas .countdown-target').yuukCountDown({
         starttime: '2016/11/12 00:00:00',
         endtime: '2030/12/30 00:00:00',
      });

   },

   cronometroLEDOfertasChristmas(){

      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      $('#listagemProdutos').append(`
         <div class="cronometro-led-ofertas">
               <div class="cronometro-led-ofertas-conteudo">

                  <div class="cronometro-led-ofertas-conteudo-textos">
                     <div class="cronometro-led-ofertas-conteudo-texto-1">SÓ HOJE: LED Ofertas</div>
                     <div class="cronometro-led-ofertas-conteudo-texto-2">Ofertas <b>super exclusivas</b> para você, <b>compre antes que acabe!</b></div>
                  </div>

                  <div class="cronometro-led-ofertas-conteudo-cronometro">
                     <div class="cronometro-led-ofertas-conteudo-cronometro-icone">
                        ${ILUMINIM_UTILS.icones.relogio_2}
                     </div>
                     <ul class="countdown-target"></ul>
                  </div>

               </div>
         </div>
      `);

      $('.cronometro-led-ofertas .countdown-target').yuukCountDown({
         starttime: '2016/11/12 00:00:00',
         endtime: '2030/12/30 00:00:00',
      });

   },
   
   miniBanners(){

      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      const MiniBanners = {
      
         gerarObjeto(){
      
               let banners = [
                  {
                     nome: '1',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/mini-banner-refletores-led-01-06-2022-v2.png',
                     link: '/refletores-de-led?sort=mais_vendidos',
                  },
                  	{
                     nome: 'Lançamentos LED com até 64% de desconto!',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/mini-banner-lancamentos-led-01-06-2022-v2.png',
                     link: '/lancamentos-led?sort=ultimos_produtos',
                  	},
                  {
                     nome: '3',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/mini-banner-ofertas-da-semana-01-06-2022.png',
                     link: '/ofertadasemana?sort=mais_vendidos',
                  }
               ]

               return banners;
      
         },
      
         gerarHTML(){
      
               let objeto = this.gerarObjeto();
      
               let htmlList = objeto.map(banner=> {
                  return `
                     <li>
                           <a href="${banner.link}" onclick="ga('send', 'event', 'Wire Mini Home', 'click', 'Mini Banner ${banner.nome}')">
                              <img class="lazyload" alt="${banner.nome}" title="${banner.nome}" src="${banner.imagem}">
                           </a>
                     </li>
                  `; 
               }).join('');


               return `
                  <div class="mini-banners">
                     <ul class="lista-mini-banners">
                           ${htmlList}
                     </ul>
                  </div>
               `;
      
         },
      
         renderizar(){

            let html = this.gerarHTML();

            $('.banners-personalizados').after(html);
      
         }
      
      }
      
      MiniBanners.renderizar();

   },

   miniBannersChristmas(){

      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      const MiniBanners = {
      
         gerarObjeto(){
      
            let banners = [
               {
                  nome: 'Refletores LED',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/REFLETORES-LED-MINI-BANNER-LED-CHRISTMAS-10-12-21.png',
                  link: '/refletores-de-led?sort=mais_vendidos',
               },
               {
                  nome: 'Lançamentos LED',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/LANCAMENTOS-LED-MINI-BANNER-LED-CHRISTMAS-10-12-21.png',
                  link: '/lancamentos-led?sort=ultimos_produtos',
               },
               {
                  nome: 'Oferta da Semana',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/OFERTAS-DA-SEMANA-MINI-BANNER-LED-CHRISTMAS-10-12-21.png',
                  link: '/ofertadasemana?sort=mais_vendidos',
               }
            ]

            return banners;
      
         },
      
         gerarHTML(){
      
               let objeto = this.gerarObjeto();
      
               let htmlList = objeto.map(banner=> {
                  return `
                     <li>
                           <a href="${banner.link}" onclick="ga('send', 'event', 'Wire Mini Home', 'click', 'Mini Banner ${banner.nome}')">
                              <img class="lazyload" alt="${banner.nome}" title="${banner.nome}" src="${banner.imagem}" width="407" height="279">
                           </a>
                     </li>
                  `; 
               }).join('');


               return `
                  <div class="mini-banners">
                     <ul class="lista-mini-banners">
                           ${htmlList}
                     </ul>
                  </div>
               `;
      
         },
      
         renderizar(){

            let html = this.gerarHTML();

            $('.banners-personalizados').after(html);
      
         }
      
      }
      
      MiniBanners.renderizar();

   },


   verTodosNasListagens(){

      $('#listagemProdutos a.titulo-categoria').append('<span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>');

   },

   bannersDesconto(){ //ATIVAR APOS BLACK
      
      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      const BannersDesconto = {

         gerarObjeto(){

            let banners = [
               {
                  nome: 'Refletores LED',
                  link: '/refletor-microled?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-desconto-refletor-03-09-21.png',
                  desconto: '64',
               },
               {
                  nome: 'Plafons LED',
                  link: '/plafon-led?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-desconto-plafons-03-09-21.png',
                  desconto: '64',
               },
               {
                  nome: "Spots LED",
                  link: '/spots?sort=mais_vendidos!',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-desconto-spots-03-09-21.png',
                  desconto: '64',
               },
               {
                  nome: 'Fitas LED',
                  link: '/fita-de-led?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-desconto-fitas-03-09-21.png',
                  desconto: '44',
               },
               {
                  nome: 'Lâmpadas LED',
                  link: '/lampada-led?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-desconto-lampadas-03-09-21.png',
                  desconto: '84',
               },
               {
                  nome: 'Acessórios LED',
                  link: '/acessorios-para-leds?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-desconto-acessorios-03-09-21.png',
                  desconto: '44',
               },
               {
                  nome: 'Kits LED',
                  link: '/kits-led?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/kits-ref-29-09-21-v2.png',
                  desconto: '84',
               },
               {
                  nome: 'Lustres LED',
                  link: '/lustre?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/29-09-21-lustres-led.png',
                  desconto: '70',
               },
               {
                  nome: 'Pendentes LED',
                  link: '/pendente?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/29-09-21-pendentes-led.png',
                  desconto: '76',
               },
               {
                  nome: 'Luminárias LED',
                  link: '/luminarias-led?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/29-09-21-luminarias-led.png',
                  desconto: '84',
               },
               {
                  nome: 'Lançamentos LED',
                  link: '/lancamentos-led?sort=ultimos_produtos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lancamentos-29-09-21-v2.png',
                  desconto: '75',
               },
               {
                  nome: 'Ofertas da Semana',
                  link: '/ofertadasemana?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/29-09-21-oferta-da-semana.png',
                  desconto: '80',
               }
            ];

            return banners;

         },

         ativarCarousel(){

            $('.banners-com-desconto.banners-com-produtos .lista-banners-com-desconto.carousel-target').owlCarousel({
               loop:false,
               margin:0,
               autoHeight: false,
               nav:true,
               dots: false,
               navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
               responsive:{
                  0: {
                     items:2
                  },
                  
                  767: {
                     items:4
                  },
                  1024: {
                     items: 6
                  }
               }
            });

         },

         gerarHTML(){

            let objeto = this.gerarObjeto();

            let html = objeto.map(banner => {

               return `
                  <li class="banner-desconto">
                        <a href="${banner.link}" onclick="ga('send', 'event', 'Porcentagem Categorias Home','click', '${banner.nome}')">
                           
                           <div class="banner-desconto-texto-desconto">-${banner.desconto}%</div>
                           <div class="banner-desconto-imagem">
                              <img alt="${banner.nome}" title="${banner.nome}" src="${banner.imagem}">
                           </div>
                           <div class="banner-desconto-nome">${banner.nome}</div>

                        </a>
                  </li>
               `;

            }).join('');

            return`
               <div class="banners-com-desconto banners-com-produtos">
                  <div class="banners-com-desconto-titulo">
                     <strong>Navegue por mais departamentos</strong>
                  </div>
                  <ul class="lista-banners-com-desconto carousel-target">
                     ${html}
                  </ul>
               </div>
            `;

         },

         renderizar(){

            let html = this.gerarHTML();

            $('#listagemProdutos').append(html);

            this.ativarCarousel();

         }

      }
      
      BannersDesconto.renderizar();

   },

   bannersDescontoBlack(){ //REMOVER APOS BLACK
      
      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      const BannersDesconto = {

         gerarObjeto(){

            let banners = [
               {
                  nome: 'Refletores LED',
                  link: '/refletor-microled?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-refletor.png',
                  desconto: '64',
               },
               {
                  nome: 'Plafons LED',
                  link: '/plafon-led?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-plafons.png',
                  desconto: '64',
               },
               {
                  nome: "Spots LED",
                  link: '/spots?sort=mais_vendidos!',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-SPOTS.png',
                  desconto: '64',
               },
               {
                  nome: 'Fitas LED',
                  link: '/fita-de-led?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-fitas.png',
                  desconto: '44',
               },
               {
                  nome: 'Lâmpadas LED',
                  link: '/lampada-led?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-lampadas.png',
                  desconto: '84',
               },
               {
                  nome: 'Acessórios LED',
                  link: '/acessorios-para-leds?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-acessorios.png',
                  desconto: '44',
               },
               {
                  nome: 'Kits LED',
                  link: '/kits-led?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-Kits-LED.png',
                  desconto: '84',
               },
               {
                  nome: 'Lustres LED',
                  link: '/lustre?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-Lustres.png',
                  desconto: '70',
               },
               {
                  nome: 'Pendentes LED',
                  link: '/pendente?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-Pendentes.png',
                  desconto: '76',
               },
               {
                  nome: 'Luminárias LED',
                  link: '/luminarias-led?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-Luminarias.png',
                  desconto: '84',
               },
               {
                  nome: 'Lançamentos LED',
                  link: '/lancamentos-led?sort=ultimos_produtos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-lancamentos.png',
                  desconto: '75',
               },
               {
                  nome: 'Ofertas da Semana',
                  link: '/ofertadasemana?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-Ofertas da semana.png',
                  desconto: '80',
               }
            ];

            return banners;

         },

         ativarCarousel(){

            $('.banners-com-desconto.banners-com-produtos .lista-banners-com-desconto.carousel-target').owlCarousel({
               loop:false,
               margin:0,
               autoHeight: false,
               nav:true,
               dots: false,
               navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
               responsive:{
                  0: {
                     items:2
                  },
                  
                  767: {
                     items:4
                  },
                  1024: {
                     items: 6
                  }
               }
            });

         },

         gerarHTML(){

            let objeto = this.gerarObjeto();

            let html = objeto.map(banner => {

               return `
                  <li class="banner-desconto">
                        <a href="${banner.link}" onclick="ga('send', 'event', 'Porcentagem Categorias Home','click', '${banner.nome}')">
                           
                           <div class="banner-desconto-texto-desconto">-${banner.desconto}%</div>
                           <div class="banner-desconto-imagem">
                              <img alt="${banner.nome}" title="${banner.nome}" src="${banner.imagem}">
                           </div>
                           <div class="banner-desconto-nome">${banner.nome}</div>

                        </a>
                  </li>
               `;

            }).join('');

            return`
               <div class="banners-com-desconto banners-com-produtos">
                  <div class="banners-com-desconto-titulo">
                     <strong>Navegue por mais departamentos</strong>
                  </div>
                  <ul class="lista-banners-com-desconto carousel-target">
                     ${html}
                  </ul>
               </div>
            `;

         },

         renderizar(){

            let html = this.gerarHTML();

            $('#listagemProdutos').append(html);

            this.ativarCarousel();

         }

      }
      
      BannersDesconto.renderizar();

   },

   bannersKitsDesconto(){ //ATIVAR APOS BLACK
      
      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      const BannersDesconto = {

         gerarObjeto(){

            let banners = [
               {
                  nome: 'Kit 5',
                  link: '/kit-led-5-unidades?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/17-01-22-KIT-5.png',
                  desconto: '40',
               },
               {
                  nome: 'Kit 10',
                  link: '/kit-led-10-unidades?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/17-01-22-KIT-10.png',
                  desconto: '50',
               },
               {
                  nome: 'Kit 12',
                  link: '/kit-led-12-unidades?sort=mais_vendidos!',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/17-01-22-KIT-12.png',
                  desconto: '60',
               },
               {
                  nome: 'Kit 20',
                  link: '/kit-led-20-unidades?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/17-01-22-KIT-20.png',
                  desconto: '70',
               },
               {
                  nome: 'Kit 30',
                  link: '/kit-led-30-unidades?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/17-01-22-KIT-30.png',
                  desconto: '80',
               },
               {
                  nome: 'TODOS KITS',
                  link: '/kits-led?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/todos-kits-17-01-22.png',
                  desconto: '90',
               },
            ];

            return banners;

         },

         ativarCarousel(){

            $('.banners-com-desconto.banners-com-kits .lista-banners-com-desconto.carousel-target').owlCarousel({
               loop:false,
               margin:0,
               autoHeight: false,
               nav:true,
               dots: false,
               navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
               responsive:{
                  0: {
                     items:2
                  },
                  
                  767: {
                     items:4
                  },
                  1024: {
                     items: 6
                  }
               }
            });

         },

         gerarHTML(){

            let objeto = this.gerarObjeto();

            let html = objeto.map(banner => {

               return `
                  <li class="banner-desconto">
                        <a href="${banner.link}" onclick="ga('send', 'event', 'Porcentagem Categorias Home','click', '${banner.nome}')">
                           
                           <div class="banner-desconto-texto-desconto">-${banner.desconto}%</div>
                           <div class="banner-desconto-imagem">
                              <img alt="${banner.nome}" title="${banner.nome}" src="${banner.imagem}">
                           </div>
                           <div class="banner-desconto-nome">${banner.nome}</div>

                        </a>
                  </li>
               `;

            }).join('');

            return`
               <div class="banners-com-desconto banners-com-kits">
                  <div class="banners-com-desconto-titulo">
                     <strong>Descontos Progressivos</strong>
                  </div>
                  <ul class="lista-banners-com-desconto carousel-target">
                     ${html}
                  </ul>
               </div>
            `;

         },

         renderizar(){

            let html = this.gerarHTML();

            $('#listagemProdutos').append(html);

            this.ativarCarousel();

         }

      }
      
      BannersDesconto.renderizar();

   },

   blocosDescontosProgressivos(){ //ATIVAR APOS BLACK
      
	if(ILUMINIM_UTILS.screen.isMobile()){
	   return;
	}

	const blocosDescontosProgressivos = {

	   gerarObjeto(){

		  let banners = [
			 {
				nome: 'KIT 5',
				link: 'https://abt-ilm-manutencao.lojaintegrada.com.br/kit-led-5-unidades?sort=mais_vendidos',
				imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/box-kit-5-04-05-2022.png',
				desconto: '40',
			 },
			 {
				nome: 'KIT 10',
				link: 'https://abt-ilm-manutencao.lojaintegrada.com.br/kit-led-10-unidades?sort=mais_vendidos',
				imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/box-kit-10-04-05-2022.png',
				desconto: '50',
			 },
			 {
				nome: "KIT 12",
				link: 'https://abt-ilm-manutencao.lojaintegrada.com.br/kit-led-12-unidades?sort=mais_vendidos',
				imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/box-kit-12-04-05-2022.png',
				desconto: '60',
			 },
			 {
				nome: 'KIT 20',
				link: 'https://abt-ilm-manutencao.lojaintegrada.com.br/kit-led-20-unidades?sort=mais_vendidos',
				imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/box-kit-20-04-05-2022.png',
				desconto: '70',
			 },
			 {
				nome: 'KIT 50',
				link: 'https://abt-ilm-manutencao.lojaintegrada.com.br/kit-led-50-unidades?sort=mais_vendidos',
				imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/box-kit-50-04-05-2022.png',
				desconto: '80',
			 },
		  ];

		  return banners;

	   },

	   ativarCarousel(){

		  $('.blocos-descontos-progressivos .carousel-target').owlCarousel({
			 loop:false,
			 margin:25,
			 autoHeight: false,
			 nav:true,
			 dots: false,
			 navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
			 responsive:{
				0: {
				   items:2
				},
				
				767: {
				   items:5
				},
				1024: {
				   items: 5
				}
			 }
		  });

	   },

	   gerarHTML(){

		  let objeto = this.gerarObjeto();

		  let html = objeto.map(bloco => {
			 return `
				<li class="bloco-desconto-progressivo">
					<a href="${bloco.link}">
						<div class="bloco-desconto-progressivos-texto-desconto">
							<span>${bloco.desconto}</span>
							<span>
								<span>%</span>
								<span>OFF</span>
							</span>
						</div>
						<div class="bloco-desconto-progressivos-imagem-btn">
							<div class="bloco-desconto-progressivos-imagem">
								<img alt="${bloco.nome}" title="${bloco.nome}" src="${bloco.imagem}">
							</div>
							<div class="bloco-desconto-progressivos-btn">Confira agora!</div>
						</div>
					</a>
				</li>
			 `;
		  }).join('');

		  return`
			 <div class="blocos-descontos-progressivos">
				<div class="blocos-descontos-progressivos-titulo">
				   <strong>Navegue por mais departamentos</strong>
				</div>
				<ul class="lista-blocos-descontos-progressivos carousel-target">
				   ${html}
				</ul>
			 </div>
		  `;

	   },

	   renderizar(){

		  let html = this.gerarHTML();

		  $('#listagemProdutos').append(html);

		  this.ativarCarousel();

	   }

	}
	
	blocosDescontosProgressivos.renderizar();

   },

   gridDiferenciais(){
		if(!ILUMINIM_UTILS.screen.isDesktop()) return;

		let html = `
			<div class="grid-diferenciais-iluminim">	
				<div class="grid-diferenciais-iluminim-conteudo">
					
					<div class="grid-diferenciais-iluminim-item">
						<div class="grid-diferenciais-iluminim-item-divisao-1">
							<div class="grid-diferenciais-iluminim-item-imagem">
								<img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-frete-gratis-brasil-09-06-2022.png">
							</div>
							<div class="grid-diferenciais-iluminim-item-imagem-titulo">
								<span>frete grátis</span>
								<span>brasil</span>
							</div>
						</div>
						<div class="grid-diferenciais-iluminim-item-divisao-2">
							<div class="grid-diferenciais-iluminim-item-titulo">
								<span>expresso para compras</span>
								<span>a partir de R$299,00</span>
							</div>
						</div>
					</div>
			
					<div class="grid-diferenciais-iluminim-item">
						<div class="grid-diferenciais-iluminim-item-divisao-1">
							<div class="grid-diferenciais-iluminim-item-imagem">
								<img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-entrega-a-jato-09-06-2022.png">
							</div>
							<div class="grid-diferenciais-iluminim-item-imagem-titulo">
								<span>entrega a</span>
								<span>jato</span>
							</div>
						</div>
						<div class="grid-diferenciais-iluminim-item-divisao-2">
							<div class="grid-diferenciais-iluminim-item-titulo">
								<span>garantimos a entrega</span>
								<span>rápida do seu produto</span>
							</div>
						</div>
					</div>
			
					<div class="grid-diferenciais-iluminim-item">
						<div class="grid-diferenciais-iluminim-item-divisao-1">
							<div class="grid-diferenciais-iluminim-item-imagem">
								<img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-12x-sem-juros-09-06-2022.png">
							</div>
							<div class="grid-diferenciais-iluminim-item-imagem-titulo">
								<span>12x sem</span>
								<span>juros</span>
							</div>
						</div>
						<div class="grid-diferenciais-iluminim-item-divisao-2">
							<div class="grid-diferenciais-iluminim-item-titulo">
								<span>parcele sem juros no</span>
								<span>cartão de crédito</span>
							</div>
						</div>
					</div>
			
					<div class="grid-diferenciais-iluminim-item">
						<div class="grid-diferenciais-iluminim-item-divisao-1">
							<div class="grid-diferenciais-iluminim-item-imagem">
								<img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-o-menor-preco-09-06-2022.png">
							</div>
							<div class="grid-diferenciais-iluminim-item-imagem-titulo">
								<span>O menor</span>
								<span>preço</span>
							</div>
						</div>
						<div class="grid-diferenciais-iluminim-item-divisao-2">
							<div class="grid-diferenciais-iluminim-item-titulo">
								<span>garantimos os melhores</span>
								<span>preços do mercado</span>
							</div>
						</div>
					</div>
			
					<div class="grid-diferenciais-iluminim-item">
						<div class="grid-diferenciais-iluminim-item-divisao-1">
							<div class="grid-diferenciais-iluminim-item-imagem">
								<img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-a-maior-do-brasil-09-06-2022.png">
							</div>
							<div class="grid-diferenciais-iluminim-item-imagem-titulo">
								<span>A maior</span>
								<span>do brasil</span>
							</div>
						</div>
						<div class="grid-diferenciais-iluminim-item-divisao-2">
							<div class="grid-diferenciais-iluminim-item-titulo">
								<span>em 10 anos são mais de 1</span>
								<span>milhão de clientes satisfeitos</span>
							</div>
						</div>
					</div>
			
					<div class="grid-diferenciais-iluminim-item">
						<div class="grid-diferenciais-iluminim-item-divisao-1">
							<div class="grid-diferenciais-iluminim-item-imagem">
								<img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-encontre-a-iluminim-09-06-2022.png">
							</div>
							<div class="grid-diferenciais-iluminim-item-imagem-titulo">
								<span>encontre</span>
								<span>a iluminim</span>
							</div>
						</div>
						<div class="grid-diferenciais-iluminim-item-divisao-2">
							<div class="grid-diferenciais-iluminim-item-titulo">
								<span>lojas físicas e pontos de</span>
								<span>retirada por todo brasil</span>
							</div>
						</div>
					</div>
			
				</div>
			</div>
		`;

		$('#listagemProdutos').append(html);
   },

   bannersKitsDescontoBlack(){ //REMOVER APOS BLACK
      
      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      const BannersDesconto = {

         gerarObjeto(){

            let banners = [
               {
                  nome: 'Kit 5',
                  link: '/kit-led-5-unidades?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/14-11-21-KIT-5.png',
                  desconto: '40',
               },
               {
                  nome: 'Kit 10',
                  link: '/kit-led-10-unidades?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/14-11-21-KIT-10.png',
                  desconto: '50',
               },
               {
                  nome: 'Kit 12',
                  link: '/kit-led-12-unidades?sort=mais_vendidos!',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/14-11-21-KIT-12.png',
                  desconto: '60',
               },
               {
                  nome: 'Kit 20',
                  link: '/kit-led-20-unidades?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/14-11-21-KIT-20.png',
                  desconto: '70',
               },
               {
                  nome: 'Kit 30',
                  link: '/kit-led-30-unidades?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/25-11-21-kit-30-v2.png',
                  desconto: '80',
               },
               {
                  nome: 'TODOS KITS',
                  link: '/kits-led?sort=mais_vendidos',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/todos-kits-14-11-21.png',
                  desconto: '90',
               },
            ];

            return banners;

         },

         ativarCarousel(){

            $('.banners-com-desconto.banners-com-kits .lista-banners-com-desconto.carousel-target').owlCarousel({
               loop:false,
               margin:0,
               autoHeight: false,
               nav:true,
               dots: false,
               navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
               responsive:{
                  0: {
                     items:2
                  },
                  
                  767: {
                     items:4
                  },
                  1024: {
                     items: 6
                  }
               }
            });

         },

         gerarHTML(){

            let objeto = this.gerarObjeto();

            let html = objeto.map(banner => {

               return `
                  <li class="banner-desconto">
                        <a href="${banner.link}" onclick="ga('send', 'event', 'Porcentagem Categorias Home','click', '${banner.nome}')">
                           
                           <div class="banner-desconto-texto-desconto">-${banner.desconto}%</div>
                           <div class="banner-desconto-imagem">
                              <img alt="${banner.nome}" title="${banner.nome}" src="${banner.imagem}">
                           </div>
                           <div class="banner-desconto-nome">${banner.nome}</div>

                        </a>
                  </li>
               `;

            }).join('');

            return`
               <div class="banners-com-desconto banners-com-kits">
                  <div class="banners-com-desconto-titulo">
                     <strong>Descontos Progressivos</strong>
                  </div>
                  <ul class="lista-banners-com-desconto carousel-target">
                     ${html}
                  </ul>
               </div>
            `;

         },

         renderizar(){

            let html = this.gerarHTML();

            $('#listagemProdutos').append(html);

            this.ativarCarousel();

         }

      }
      
      BannersDesconto.renderizar();

   },

   videosNaHome(){

      $('#listagemProdutos').append(`
         <div class="videos-vitrine">
            <iframe allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" height="235" src="https://www.youtube.com/embed/Pw_F4czZLxY" width="427"></iframe><iframe allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" height="235" src="https://www.youtube.com/embed/n7nuMceIbZ8" width="427"></iframe>
         </div>
      `);

   },
             
   visualizacaoRapida(){

      if(!ILUMINIM_UTILS.screen.isDesktop()){
         return;
      }

      let produtos = ['LT-60VE', 'LT-60VE', 'LT-60VM', 'PSM-100W', 'PSM-150W' ,'PSM-200W', 'PSM-50W', 'MG-9006', 'STP-7-BQ', 'FC-COB8530T', 'STP-7-BN', 'RSPM-30WRGB', 'PG-Q18WBN-MARROM', 'PS-RT36WBF-15X120'];

      $('.listagem-item').each(function(){

         let skuProd = $(this).find('.produto-sku.hide').text();
         let nameProd = $(this).find('a.nome-produto').text();
         let linkProd = $(this).find('a.nome-produto').attr('href');
         let descontoProd = $(this).find('.bandeira-promocao').text();

         if(produtos.includes(skuProd)){

            if( $(this).find('.visualizacao-rapida-produto').length == 0 ){

               $(this).append(`
                  <div class="visualizacao-rapida-produto" data-desconto="${descontoProd}" data-sku="${skuProd}" data-name="${nameProd}" data-link="${linkProd}">
                        <span>Visualização rápida</span>
                  </div>
               `);

            }

         }

      });

      $(document).on('click', '.visualizacao-rapida-produto', function(){

         let skuProd = $(this).attr('data-sku');
         let nameProd = $(this).attr('data-name');
         let linkProd = $(this).attr('data-link');
         let descontoProd = $(this).attr('data-desconto');

         if($(`#modal_visualizacao_rapida_${skuProd}`).length > 0){

               $(`#modal_visualizacao_rapida_${skuProd}`).modal('show');

         }else {

               $('body').append(`
                  <div class="modal modal-personalizado modal-visualizacao-rapida fade" id="modal_visualizacao_rapida_${skuProd}">

                     <div class="modal-dialog" role="document">

                           <div class="modal-content">

                              <div class="modal-header">
                                 <h5 class="modal-title"><a href="${linkProd}">${nameProd}</a></h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                       <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>

                              <div class="modal-body">

                                 <div class="iluminim-loading text-center">${ILUMINIM_UTILS.icones.loading}</div>

                              </div>

                              <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary btn-custom" data-dismiss="modal">Fechar</button>
                              </div>

                           </div>

                     </div>

                  </div>
               `);

               $(`#modal_visualizacao_rapida_${skuProd}`).modal('show');

               $(`#modal_visualizacao_rapida_${skuProd} .modal-body`).load(`${linkProd} .span12.produto > .row-fluid:first-child`, function(){

                  let target = $(`#modal_visualizacao_rapida_${skuProd}`);

                  target.find('.comprar a.botao.botao-comprar').html('Adicionar ao carrinho');

                  target.find('div#carouselImagem ul.miniaturas.slides').owlCarousel({
                     loop:false,
                     margin:0,
                     nav:true,
                     dots: false,
                     navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
                     responsive:{
                           0: {
                              items:5
                           }
                     }
                  });

                  target.find('.comprar').after(`
                     <div class="cronometro-compre-antes-que-acabe">
                           <div class="conteudo-titulo-cronometro">Compre antes que acabe!</div>
                           <div class="conteudo-cronometro">
                              <div class="conteudo-icone-cronometro">${ILUMINIM_UTILS.icones.relogio}</div>
                              <ul class="countdown-target"></ul>
                           </div>    
                           <div class="conteudo-texto-cronometro">Promoções e condições válidas em ${new Date().toLocaleDateString()}</div>
                     </div>
                  `);

                  target.find('.cronometro-compre-antes-que-acabe .countdown-target').yuukCountDown({
                     starttime: '2016/11/12 00:00:00',
                     endtime: '2030/12/30 00:00:00',
                  });

                  target.find('.conteiner-imagem').prepend(`
                     <div class="desconto-produto">
                           <span class="porcentagem-desconto">${descontoProd}</span>
                           <span class="texto-off">Off</span>
                     </div>
                  `);

                  if( target.find('a.botao.botao-comprar.principal.grande.desativo.with-popover').length > 0 ){

                     target.find('a.botao.botao-comprar.principal.grande.desativo.with-popover').replaceWith(`
                           <a href="${linkProd}" class="botao botao-comprar principal grande " rel="nofollow">Ver mais</a>
                     `);

                  }else {

                     target.find('span.desconto-a-vista').before(`
                           <div class="economize">
                              <span>Economize </span><b>R$ ${ILUMINIM_UTILS.produto.valor_economize(target)}</b>
                           </div>
                     `)

                  }

               });

         }

      });

      $(document).on('click', '.modal-visualizacao-rapida div#carouselImagem li > a', function(){

         let imagem = $(this).attr('data-imagem-grande');

         $(this).parents('div#carouselImagem').find('li').removeClass('active');
         $(this).parent('li').addClass('active');

         $(this).parents('.modal-visualizacao-rapida').find('.conteiner-imagem > div').html(`<img src="${imagem}">`);

      });

   },

   tarjaInformacoesRodape(){

      $('.html_content #tarja-informacoes').insertBefore('#barraNewsletter');

      $('#tarja-informacoes .carousel-target').owlCarousel({
         loop:false,
         margin:0,
         autoHeight:true,
         nav:true,
         navText:['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
         responsive:{
               0: {
                  items:1
               },
               768: {
                  items:3
               },
               1024:{
                  items:4
               }
         }
      });

   },

   textoSeoAvaliacoes(){

      $('.html_content #texto-seo-avaliacoes').insertBefore('div#tarja-informacoes');

      /*$('.reviews-home .carousel-target').owlCarousel({
         loop:false,
         margin:0,
         autoHeight: true,
         nav:true,
         dots: false,
         navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
         responsive:{
               0: {
                  items:1
               },
               768: {
                  items:2
               },
               1024:{
                  items:3
               }
         }
      });*/

      /*$('.reviews-home--list-reviews .ver-mais').on('click', function(){
         let texto = $(this).text();
         if(texto == 'Ver mais'){
               $(this).text('Ver menos');
               $(this).siblings('.list-item--comment').addClass('show-more');
               $(this).parents('.list-item.line-3').addClass('adjust-height');
               
         }else {
               $(this).text('Ver mais');
               $(this).siblings('.list-item--comment').removeClass('show-more');
               $(this).parents('.list-item.line-3').removeClass('adjust-height');
         }
         
         $('.reviews-home--list-reviews').trigger('refresh.owl.carousel');
      });*/
      

   },

   oportunidadesEspeciais(){

      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      const OportunidadesEspeciais = {
      
         gerarObjeto(){

			let objeto = [
				{
					nome: '1',
					imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/mini-banner-BAIXARAM_OS_PRECOS-11-05-2022.png',
					link: '/refletores-de-led?sort=mais_vendidos',
				},
				/*{
					nome: 'Lançamentos LED com até 64% de desconto!',
					imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/mini-banners-lancamentos-led-11-04-2022.png',
					link: '/lancamentos-led?sort=ultimos_produtos',
				},*/
				{
					nome: '3',
					imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/mini-banner-ofertas_da_semana-11-05-2022.png',
					link: '/ofertadasemana?sort=mais_vendidos',
				}
			]
      
               /*let objeto = [
                  {
                     nome: 'Refletores Micro LED Super Oferta!',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/carrossel-banners-home-pequenos-refletores-24-05-21.png',
                     link: '/refletor-micro-led-slim?sort=mais_vendidos',
                  },
                  {
                     nome: 'Decoração Lâmpada Vintage',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/decoracao_vintage-25-05-21-v2.png',
                     link: '/led-retro?sort=mais_vendidos',
                  },
                  {
                     nome: 'Plafons LED Até 65% OFF',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/carrossel-banners-home-pequenos-plafon-24-05-21.png',
                     link: '/plafon-led?sort=mais_vendidos',
                  },
                  {
                     nome: 'Spot LED Melhores Ofertas!',
                     //imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot_led-25-05-21-v2.png',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/compre_por_ambiente-29-12-21.png',
                     //link: '/spots?sort=mais_vendidos',
                     link: '/compre-por-ambiente?sort=mais_vendidos',
                  }
               ]*/

               return objeto;
      
         },
      
         gerarHTML(){
      
               let objeto = this.gerarObjeto();
      
               let htmlList = objeto.map(banner=> {
      
                  return `
                     <li>
                           <a href="${banner.link}" onclick="ga('send', 'event', 'Oportunidades Especiais Home','click', '${banner.nome}')">
                              <img alt="${banner.nome}" title="${banner.nome}" src="${banner.imagem}">
                           </a>
                     </li>
                  `;
      
               }).join('');
      
               return `
                  <div class="banners-oportunidades-especiais">
                     <ul class="lista-banners-oportunidades-especiais">
                        ${htmlList}
                     </ul>
                  </div>
               `;
      
         },
      
         renderizar(){
      
               let html = this.gerarHTML();
      
               $('#listagemProdutos').append(html);
      
         }
      
      }
      
      OportunidadesEspeciais.renderizar();


   },

   oportunidadesEspeciaisBlack(){

      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      const OportunidadesEspeciais = {
      
         gerarObjeto(){
      
               let objeto = [
                  {
                     nome: 'Refletores Micro LED Super Oferta!',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Refletores_Black-21-10-21.png',
                     link: '/refletor-micro-led-slim?sort=mais_vendidos',
                     width: '300',
                     height: '237'
                  },
                  {
                     nome: 'Decoração Lâmpada Vintage',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Decoracao_Vintage_Black-21-10-21.png',
                     link: '/led-retro?sort=mais_vendidos',
                     width: '300',
                     height: '237'
                  },
                  {
                     nome: 'Plafons LED Até 65% OFF',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Plafons_Black-21-10-21.png',
                     link: '/plafon-led?sort=mais_vendidos',
                     width: '300',
                     height: '237'
                  },
                  {
                     nome: 'Spot LED Melhores Ofertas!',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Spots_Black-21-10-21.png',
                     link: '/spots?sort=mais_vendidos',
                     width: '300',
                     height: '237'
                  }
               ]

               return objeto;
      
         },
      
         gerarHTML(){
      
               let objeto = this.gerarObjeto();
      
               let htmlList = objeto.map(banner=> {
      
                  return `
                     <li>
                           <a href="${banner.link}" onclick="ga('send', 'event', 'Oportunidades Especiais Home','click', '${banner.nome}')">
                              <img alt="${banner.nome}" title="${banner.nome}" src="${banner.imagem}" width="${banner.width}" height="${banner.height}">
                           </a>
                     </li>
                  `;
      
               }).join('');
      
               return `
                  <div class="banners-oportunidades-especiais">
                     <ul class="lista-banners-oportunidades-especiais">
                        ${htmlList}
                     </ul>
                  </div>
               `;
      
         },
      
         renderizar(){
      
               let html = this.gerarHTML();
      
               $('#listagemProdutos').append(html);
      
         }
      
      }
      
      OportunidadesEspeciais.renderizar();


   },

   entrarOuCadastrarListagem(){

      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      if(!ILUMINIM_UTILS.usuario.logado()){
         $('a.titulo-categoria.borda-principal.cor-principal.vitrine-3217074').before(`
               <div class="entre-ou-cadastre-se">
                  <div class="entre-ou-cadastre-se-texto">Faça login e veja ofertas incríveis escolhidas só para você</div>
                  <div class="entre-ou-cadastre-se-links">
                     <a class="entre-ou-cadastre-se-link entrar btn-custom" href="#!">Entre</a>
                     <a class="entre-ou-cadastre-se-link cadastrar btn-custom" href="#!">Cadastre-se</a>
                  </div>
               </div>
         `);
      }

   },

   tagLancamentoListagemProduto(){

      $('.titulo-categoria.borda-principal.cor-principal.vitrine-lancamento+ul .listagem-item').each(function(){

         $(this).addClass('produto-tag-lancamento').append(`
               <div class="produto-tag tag-lancamento">
                  Lançamento
               </div>
         `);

      });

   },

   tagCampeaoDeVendasListagemProduto(){

      /*let skus = [
         'RSPM-100WBF',
         'BULBO-9WBF-R',
         'PG-Q25WBF',
         'PG-Q18WBF',
         'RSPM-100WBF-KIT5',
         'XL-3528RGB-KIT5',
         'PG-Q25WBF-KIT5',
         'LUM-120BF',
         'SMD-Q5WBQ',
      ]*/


      $(`
         .titulo-categoria.borda-principal.cor-principal.vitrine-mas-vendido+ul .listagem-item,
         a.titulo-categoria.borda-principal.cor-principal.vitrine-877731+ul .listagem-item,
         a.titulo-categoria.borda-principal.cor-principal.vitrine-881697+ul .listagem-item,
         a.titulo-categoria.borda-principal.cor-principal.vitrine-2756184+ul .listagem-item,
         a.titulo-categoria.borda-principal.cor-principal.vitrine-881062+ul .listagem-item
      `).addClass('produto-tag-campeao-de-vendas');

      //$('.titulo-categoria.borda-principal.cor-principal.vitrine-mas-vendido+ul .listagem-item').each(function(){

         //let skuProd = $(this).find('.produto-sku.hide').text();

         /*if(skus.includes(skuProd)){*/

            //$(this).addClass('produto-tag-campeao-de-vendas');

            /*$(this).addClass('produto-tag-campeao-de-vendas').find('.imagem-produto').after(`
               <div class="produto-tag tag-campeao-de-vendas">
                  <img alt="Produto Campeão de Vendas" title="Produto Campeão de Vendas" src="https://cdn.awsli.com.br/257/257163/arquivos/cp-vendas.png" width="192" height="42">
               </div>
            `);*/

         /*}*/

      //});

   },

   palavrasBuscadasTopoMobile(){

      if(!ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      $('.html_content .palavras-buscadas.palavras-buscadas-topo-mobile').insertBefore('.secao-banners');

   },

   /*tarjaTopoMobile(){

      $('.palavras-buscadas.palavras-buscadas-topo-mobile').before(`
         <div class="gif-topo-mobile">
               <a href="#!"><img alt="LED Ofertas Fantástica! Frete grátis para compras acima de R$299,00" title="LED Ofertas Fantástica! Frete grátis para compras acima de R$299,00" src="https://blog.iluminim.com.br/wp-content/uploads/2021/01/mobile-Tarja-topo-LED-OFERTAS-FANTASTICAS-500x45-1.gif"></a>
         </div>
      `);

   },*/

   gifTarjaMobile(){

      if(!ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      $('.secao-banners').after(`
         <div class="gif-tarja-mobile">
               <a href="#!"><img alt="Frete Grátis, Entrega Expressa, 12x sem Juros, 12 Anos de Mercado, Melhor Preço" title="Frete Grátis, Entrega Expressa, 12x sem Juros, 12 Anos de Mercado, Melhor Preço" src="https://blog.iluminim.com.br/wp-content/uploads/2020/03/gif-tarja-mobile-11-03-2020.gif"></a>
         </div>
      `);

   },

   /*bannersEmAba(){ // ILUMINIM ATACADO & SOLUÇÕES EMPRESARIAIS;
      
      $('.pagina-inicial .titulo-categoria.borda-principal.cor-principal.vitrine-3217133').before(`
      <div id="banners-em-aba" class="banners-animate-carrousel hidden-phone">

         <div class="table-nav-banners">
            <div class="table-nav-banners--item" data-banner="banner1"><span>Iluminim Atacado</span></div>
            <div class="table-nav-banners--item active" data-banner="banner2"><span>Soluções Empresariais</span></div>
            <div class="table-nav-banners--item" data-banner="banner3"><span>Representante Comercial</span></div>
         </div>
         
         <div class="banner-ilm-atacado block-banner" data-banner="banner1">
               <a href="https://www.iluminimatacado.com.br/" target="_blank" rel="noopener" onclick="ga('send', 'event', 'Soluções empresariais / iluminim atacado', 'click', 'Banner Iluminim Atacado')">
                  <img 
                     alt="Compras no Atacado?, acesse www.iluminimatacado.com.br" 
                     title="Compras no Atacado?, acesse www.iluminimatacado.com.br" 
                     src="https://cdn.awsli.com.br/257/257163/arquivos/HOME_VAREJO_BANNER_ATACADO17-05-21.png" width="1280" height="206">
               </a>
         </div>
      
         <div class="banner-empresarial-animated block-banner b_animated_ilm hidden-phone active" data-banner="banner2">
               
               <!--<div class="wrap">
                  <div class="wrap_txt">
                     <h1>Soluções <b>Empresariais</b></h1>
                  </div>
                  <div class="wrap_icones">
                     <div class="icone-wrap mao">
                           <div class="icn-ilm"><img alt="Preço exclusivo para empresa" title="Preço exclusivo para empresa" src="https://cdn.awsli.com.br/257/257163/arquivos/icone-mao-11-03-.png">
                           </div>
                           <div class="drop_box" style="display:none;">
                              <div class="wraped"> <span class="titdropbox">Preço exclusivo para empresa,</span> <span
                                       class="p_txt">entre em contato para orçamento!</span> </div>
                           </div>
                     </div>
                     <div class="icone-wrap luz">
                           <div class="icn-ilm"><img alt="A Iluminim é a melhor solução" title="A Iluminim é a melhor solução" src="https://cdn.awsli.com.br/257/257163/arquivos/iicone-luz-11-03-.png">
                           </div>
                           <div class="drop_box" style="display:none;">
                              <div class="wraped"> <span class="titdropbox">A Iluminim é a melhor solução</span> <span
                                       class="p_txt">em tecnologia LED do mercado!</span> </div>
                           </div>
                     </div>
                     <div class="icone-wrap papel">
                           <div class="icn-ilm"><img alt="Atendimento e projetos personalizados!" title="Atendimento e projetos personalizados!" src="https://cdn.awsli.com.br/257/257163/arquivos/icone-caneta-papel-11-03-.png"></div>
                           <div class="drop_box" style="display:none;">
                              <div class="wraped"> <span class="titdropbox">Atendimento e projetos personalizados!</span>
                                 <span class="p_txt">Confie na líder!</span> </div>
                           </div>
                     </div>
                  </div>
                  <div class="wrap_btn"><a href="/pagina/atendimento-empresarial.html" class="btn">Clique e Confira</a></div>
               </div>-->

               <a href="/pagina/atendimento-empresarial.html" onclick="ga('send', 'event', 'Soluções empresariais / iluminim atacado', 'click', 'Banner Soluções empresariais')">
                  <img 
                     alt="Soluções empresariais" 
                     title="Soluções empresariais" 
                     src="https://cdn.awsli.com.br/257/257163/arquivos/BANNER_SOLUCOES_EMPRESARIAIS_HOME-17-05-21.png" width="1280" height="206">
               </a>
      
         </div>

         <div class="banner-ilm-atacado block-banner" data-banner="banner3">
               <a href="/pagina/seja-nosso-representante-comercial.html" target="_blank" rel="noopener" onclick="ga('send', 'event', 'Soluções empresariais / iluminim atacado', 'click', 'Banner Iluminim Representante Comercial')">
                  <img 
                     alt="Representante Comercial Iluminim" 
                     title="Representante Comercial Iluminim" 
                     src="https://cdn.awsli.com.br/257/257163/arquivos/representante-comercial-red-v1.png" width="1280" height="206">
               </a>
         </div>
      
      </div>
      `);

      $('.table-nav-banners--item').click(function(){

         $('.table-nav-banners--item').removeClass('active');
         var idBanner = $(this).attr('data-banner');
         $(this).addClass('active');
         $('.block-banner').removeClass('active');
         $(`.block-banner[data-banner="${idBanner}"]`).addClass('active');

      });

      $('#banners-em-aba .wrap_icones .icone-wrap').hover(function(){
         $(this).toggleClass('active');
      });

   },*/

   bannerBaixeNossoAppMobile(){

      if(!ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      $('#corpo').after(`
         <div class="banner-baixe-nosso-app-mobile">
               <a href="https://play.google.com/store/apps/details?id=br.com.moblite.app.www.iluminim.com.br&amp;hl=pt_BR" target="_blank" rel="noopener">
                  <img alt="Baixe nosso APP" title="Baixe nosso APP" src="https://cdn.awsli.com.br/257/257163/arquivos/banner-app-mobile-11-03-2020.png">
               </a>
         </div>
      `);

   },

   bannerYoutubeMobile(){

      if(!ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      $('#corpo').after(`
         <div class="banner-youtube-mobile">
               <a href="https://bit.ly/iluminim-led" target="_blank" rel="noopener">
                  <img alt="Inscrever-se!" title="Inscrever-se!" src="https://cdn.awsli.com.br/257/257163/arquivos/banner-youtube-mobile-11-03-2020.png" width="1000" height="700">
                  <div class="btn-banner-youtube"><span>Inscrever-se!</span></div>
               </a>
         </div>
      `);

   },

   historicoDeNavegacaoMobile(){

      if(!ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      $('div#texto-seo-avaliacoes').before(`
         <div class="historico-navegacao-mobile">

               <div class="titulo-categoria titulo-navegue-por-categoria">
                  <strong>Histórico recente</strong>
               </div>

               <div class="conteudo-historico-navegacao-mobile">
                  <div class="historico-titulo-conteudo">
                     <div class="historico-titulo">${ ILUMINIM_UTILS.icones.relogio } Histórico</div>
                     <div class="historico-text">Produtos acessados recentemente.</div>
                  </div>

                  <div class="historico-conteudo-vazio">
                     <h1 class="titulo-historico">Você não acessou nenhum produto recentemente :(</h1>
                     <a href="/ofertadasemana?sort=mais_vendidos">Clique <b>aqui</b> para conheçer uma de nossas recomendações.</a>
                  </div>
               </div>
         </div>
      `);

   },

   newsletterMobile(){

      if(!ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      $('div#corpo').after(`
         <div class="newsletter-mobile">
               <div class="conteudo-newsletter-mobile">
                  <div class="textos-newsletter-mobile">
                     <div class="texto-1-newsletter-mobile"><b>R$ 20,00</b> de desconto</div>
                     <div class="texto-2-newsletter-mobile">
                           <div>Cadastre seu e-mail e ganhe</div>
                           <b>R$ 20,00 de desconto</b> na 1ª compra!
                     </div>
                  </div>

                  <div class="campos-newsletter-mobile">
                     ${ $('div#barraNewsletter .componente.newsletter.borda-principal').html() }
                  </div>
               </div>
         </div>
      `);

   },

   blocoUsuarioComProdutos(){

      let htmlRastreio = `
         <li class="conteudo-usuario-lista-acoes-item conteudo-usuario-lista-acoes-rastrear">
               <a href="#!">Rastrea pedido</a>
               <div class="rastrear-pedido-conteudo">
                  <!--<div class="rastrear-pedido-titulo">Rastrear Pedido</div>-->
                  <form class="formulario-rastrear-pedido">
                     <div class="formulario-input">
                           <input type="text" placeholder="Código">
                     </div>
                     <div class="formulario-botao">
                           <button class="btn-custom" type="submit">Rastrear</button>
                     </div>
                  </form>
               </div>    
         </li>
      `;

      $('body').append(`
         <div class="modal modal-personalizado fade" id="modal_rastrear_pedido">

               <div class="modal-dialog" role="document">

                  <div class="modal-content">

                     <div class="modal-header">
                           <h5 class="modal-title" id="exampleModalLongTitle">Rastrear pedido</h5>
                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                           </button>
                     </div>

                     <div class="modal-body">
                           <li class="conteudo-usuario-lista-acoes-item conteudo-usuario-lista-acoes-rastrear">
                              <div class="rastrear-pedido-conteudo">
                                 <form class="formulario-rastrear-pedido">
                                       <div class="formulario-input">
                                          <input type="text" placeholder="Código">
                                       </div>
                                       <div class="formulario-botao">
                                          <button class="btn-custom" type="submit">Rastrear</button>
                                       </div>
                                 </form>
                              </div>    
                           </li>
                     </div>
                     
                  </div>

               </div>

         </div>
      `);

      $('div#listagemProdutos').append(`
         <div class="bloco-usuario-com-listagens">

               <div class="bloco-usuario-com-listagens-conteudo-usuario">

                  <div class="conteudo-usuario">

                     <div class="conteudo-usuario-titulo">
                           <div class="conteudo-usuario-icone">
                              ${ ILUMINIM_UTILS.icones.usuario }
                           </div>

                           ${ILUMINIM_UTILS.usuario.logado() ? `
                              <div class="conteudo-usuario-texto">Olá, ${ILUMINIM_UTILS.usuario.nome().split(' ')[0]}</div>
                           ` : `
                              <div class="conteudo-usuario-texto">Olá, Visitante</div>
                           `}

                     </div>

                     <div class="conteudo-usuario-lista-acoes">
                           <ul>
                              ${ILUMINIM_UTILS.usuario.logado() ? `` : `
                                 <li class="conteudo-usuario-lista-acoes-item conteudo-usuario-lista-acoes-login">
                                       <a href="/conta/login"><i class="conteudo-acoes-icone">${ILUMINIM_UTILS.icones.line_entrar}</i>Entrar</a>
                                 </li>
                                 <li class="conteudo-usuario-lista-acoes-item conteudo-usuario-lista-acoes-register">
                                       <a href="/conta/login"><i class="conteudo-acoes-icone">${ILUMINIM_UTILS.icones.line_register}</i>Cadastrar</a>
                                 </li>
                                 
                                 ${ ILUMINIM_UTILS.screen.isDesktop() ? `
                                       ${htmlRastreio}
                                 ` : `` }
                              `}

                              <li>
                                 <a href="#!" data-toggle="modal" data-target="#modal_rastrear_pedido"><i class="conteudo-acoes-icone">${ILUMINIM_UTILS.icones.busca_rastreio}</i>Rastrear pedido</a>
                              </li>

                              <li>
                                 <a href="/conta/pedido/listar"><i class="conteudo-acoes-icone">${ILUMINIM_UTILS.icones.line_pedidos}</i>Meus pedidos</a>
                              </li>
                              <li>
                                 <a href="/conta/index"><i class="conteudo-acoes-icone">${ILUMINIM_UTILS.icones.line_conta}</i>Minha conta</a>
                              </li>
                              <li>
                                 <a href="/conta/favorito/listar"><i class="conteudo-acoes-icone">${ILUMINIM_UTILS.icones.line_favoritos}</i>Favoritos</a>
                              </li>

                              ${ ILUMINIM_UTILS.usuario.logado() ? `
                                 ${ ILUMINIM_UTILS.screen.isDesktop() ? `
                                       ${htmlRastreio}
                                 ` : `` }
                              ` : `` }

                           </ul>
                     </div>

                  </div>
               </div>
               
               <div class="bloco-usuario-com-listagens-conteudo-produtos">

                  <div class="bloco-usuario-produtos bloco-usuario-produtos-baseado-seus-interesses">
                  
                     <div class="historico-conteudo-vazio">
                           <h1 class="titulo-historico">Você não acessou nenhum produto recentemente :(</h1>
                           <a href="/ofertadasemana?sort=mais_vendidos">Clique <b>aqui</b> para conheçer uma de nossas recomendações.</a>
                     </div>

                  </div>

                  <div class="bloco-usuario-produtos bloco-usuario-produtos-lancamentos">
                     <div class="iluminim-loading">${ ILUMINIM_UTILS.icones.loading }</div>
                  </div>

                  <div class="bloco-usuario-produtos bloco-usuario-produtos-mais-vendidos">
                     <div class="iluminim-loading">${ ILUMINIM_UTILS.icones.loading }</div>
                  </div>

               </div>

         </div>
      `);

   },

   /*naveguePorCategoria(){

      const NavegueCategoria = {
      
         gerarObjeto(){
      
               let objeto = [
                  {
                     nome: 'Fitas LED',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletores navegue por categoria 31-08-2020.png',
                     link: '/refletores-de-led?sort=mais_vendidos',
                  },
                  {
                     nome: 'Luminárias >ED',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminarias  navegue por categoria 31-08-2020.png',
                     link: '/luminarias-led?sort=mais_vendidos',
                  },
                  {
                     nome: 'Spots LED',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spots  navegue por categoria 31-08-2020.png',
                     link: '/spots?sort=mais_vendidos',
                  },
                  {
                     nome: 'Fitas LED',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/fitas  navegue por categoria 31-08-2020-v2.png',
                     link: '/fita-de-led?sort=mais_vendidos',
                  },
                  {
                     nome: 'Lâmpadas LED',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampadas  navegue por categoria 31-08-2020.png',
                     link: '/lampada-led?sort=mais_vendidos',
                  },
                  {
                     nome: 'Acessórios LED',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/acessorios  navegue por categoria 31-08-2020.png',
                     link: '/acessorios-para-leds?sort=mais_vendidos',
                  },
                  {
                     nome: 'Câmeras LED',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/cameras  navegue por categoria 31-08-2020.png',
                     link: '/camera-de-seguranca?sort=mais_vendidos',
                  },
                  {
                     nome: 'LED Solar',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/solar  navegue por categoria 31-08-2020.png',
                     link: '/led-solar?sort=mais_vendidos',
                  },
                  {
                     nome: 'Iluminação Industrial',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/ilum ind  navegue por categoria 31-08-2020.png',
                     link: '/iluminacao-industrial?sort=mais_vendidos',
                  },
                  {
                     nome: 'Home Decor',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/home decor  navegue por categoria 31-08-2020.png',
                     link: '/decoracao?sort=mais_vendidos',
                  },
                  {
                     nome: 'Festa LED',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/festa navegue por categoria 31-08-2020.png',
                     link: '/iluminacao-para-festa?sort=mais_vendidos',
                  },
                  {
                     nome: 'Kits Especiais LED',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/kits especiais navegue por categoria 31-08-2020.png',
                     link: '/kits-led?sort=mais_vendidos',
                  },
                  {
                     nome: 'Lançamentos LED',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lancamentos navegue por categoria 31-08-2020.png',
                     link: '/lancamentos-led?sort=mais_vendidos',
                  },
                  {
                     nome: 'Ofertas da Semana',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/oferta semana navegue por categoria 31-08-2020.png',
                     link: '/ofertadasemana?sort=mais_vendidos',
                  }
               ]

               return objeto;
      
         },

         gerarHTML(){

               let objeto = this.gerarObjeto();

               let htmlItems = objeto.map(categoria=> {

                  return `
                     <div class="navegue-por-categoria-item">
                           <a href="${categoria.link}" class="navegue-por-categoria-item-conteudo">
                              <div class="navegue-por-categoria-item-imagem">
                                 <img src="${categoria.imagem}" title="${categoria.nome}" alt="${categoria.nome}">
                              </div>

                              <!--<div class="navegue-por-categoria-item-nome">
                                 <span>${categoria.nome}</span>
                              </div>-->
                           </a>
                     </div>
                  `;

               }).join('');

               return `
                  <div class="navegue-por-categoria">

                     <div class="titulo-categoria titulo-navegue-por-categoria">
                           <strong>Navegue por categoria</strong>
                     </div>

                     <div class="navegue-por-categoria-conteudo">
                           <div class="navegue-por-categoria-lista carousel-target">${htmlItems}</div>
                     </div>
                  </div>
               `;

         },

         ativarCarousel(){

               $('.navegue-por-categoria .carousel-target').owlCarousel({
                  margin:10,
                  autoHeight: true,
                  nav:false,
                  dots: false,
                  navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
                  responsive:{
                     0: {
                           items:2
                     },
                     768: {
                           items:3
                     },
                     1024:{
                           items:4
                     },
                     1300:{
                           items:5
                     }
                  }
               });

         },
      
         renderizar(){
      
               let html = this.gerarHTML();

               $('div#corpo').after(html);

               this.ativarCarousel();
      
         }
      
      }
      
      NavegueCategoria.renderizar();

   }*/

   removerBotaoProdutoAdicionado(){

      $('.listagem-item.produto-adicionado .bandeiras-produto .adicionado-carrinho').remove();

   },

   bannerDuploBlackFriday(){

      $('#listagemProdutos').append(`
         <div class="banner-duplo-black-friday">
            <a href="/led-friday?sort=mais_vendidos">
               <img src="https://cdn.awsli.com.br/257/257163/arquivos/banner-ofertas-black-friday-26-11-21.png">
            </a>
            
            <a href="/pagina/mais-vendidos-black-friday.html">
               <img src="https://cdn.awsli.com.br/257/257163/arquivos/banner-produtos-mais-vendidos-black-friday-26-11.png">
            </a>
         </div>
      `);

   },

   duploBlocoVitrine(){

      $('#listagemProdutos').append(`
         <div class="duplo-bloco-vitrine">
            <div class="bloco-vitrine-1">
               <a href="/pagina/led-ofertas-imbativeis.html">
                  <img src="https://cdn.awsli.com.br/257/257163/arquivos/BANNER_OFERTAS-HOME-10-01-22.png">
               </a>
            </div>

            <div class="bloco-vitrine-2">
               <iframe allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" height="235" src="https://www.youtube.com/embed/bPxHsH_dryw" width="427"></iframe>
            </div>
         </div>
      `);

   },

   loginMobileVitrine(){

      if(!ILUMINIM_UTILS.screen.isMobile()) return;

      if(ILUMINIM_UTILS.usuario.logado()) return;

      $('div#corpo > .conteiner').prepend(`
         <div class="login-mobile">
         
            <div class="login-mobile-conteudo">

               <div class="login-mobile-icone">
                     <svg width="40" height="25" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" class=""></path></svg>
               </div>
               <div class="login-mobile-textos">
                     <div>Olá, confira nossas promoções exclusivas!</div>
                     <span>Entre e veja condições e ofertas pensadas para você. Aproveite!</span>
               </div>
            </div>
         
            <div class="login-mobile-conteudo-botao">
               <a href="/conta/login">Entrar</a>
            </div>
         </div>
      `);
   },

   baixarAppMobile(){

      let validaCookie = ILUMINIM_UTILS.pegarCookie("download_app");

      if(!ILUMINIM_UTILS.screen.isMobile()) return;

      if(!ILUMINIM_UTILS.mobileDevice.Android()) return;

      if(validaCookie == "true") return;

      $(`<div id="download_app" class="version_android">
            <div class="close_app">X</div>
            <div class="image_app"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icon_download_app.png"/></div>
            <div class="text_app">
               <a href="https://play.google.com/store/apps/details?id=com.iluminimled.iluminim" target="_blank">
                  <p class="title_app">Iluminim: LED Ofertas</p>
                  <span class="action_app">OBTER - Na Play Store</span>
               </a>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.iluminimled.iluminim" class="call_action_app" target="_blank">Ver</a>
      </div>`).insertBefore(`.palavras-buscadas-topo-mobile`);

      $("#download_app .close_app").on("click", function(){
         ILUMINIM_UTILS.setarCookie("download_app", "true", 24);
         $("#download_app").remove();
      });
   },

   cronometroProdutosListagem(){

      $('.titulo-categoria.borda-principal.cor-principal.vitrine-mas-vendido+ul .listagem-item, a.titulo-categoria.borda-principal.cor-principal.vitrine-3217133+ul .listagem-item, a.titulo-categoria.borda-principal.cor-principal.vitrine-3874806+ul .listagem-item').addClass('produto-com-cronometro');
      
      $('.listagem-item.produto-com-cronometro').each(function(){

         $(this).append(`
            <div class="cronometro-produto">
               <ul class="countdown-target"></ul>
            </div>
         `);
   
         $(this).find('.cronometro-produto .countdown-target').yuukCountDown({
            starttime: '2016/11/12 00:00:00',
            endtime: '2030/12/30 00:00:00',
         });
     
      });

   },

   tagCampanhaListagemApenasClasse(){

      $('.listagem-item').addClass('produto-tag-campanha');

   },

   blocoLogin(){

      if(ILUMINIM_UTILS.usuario.logado() || ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      $('body').append(`
        <div class="bloco-login">
            <div class="bloco-login-conteudo">
            
               <div class="bloco-login-icone">
                  <svg width="70" height="70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Camada_1" x="0px" y="0px" style="enable-background:new 0 0 500 500;" xml:space="preserve" viewBox="17.1 17.1 465.8 465.8"><style type="text/css">	.st0{fill:none;stroke:#D30000;stroke-width:16;stroke-miterlimit:10;}	.st1{fill:#D30000;stroke:#D30000;stroke-width:16;stroke-miterlimit:10;}	.st2{fill:#D30000;}</style><circle class="st0" cx="250" cy="250" r="224.9"></circle><path class="st1" d="M76.1,382.3c23.9-75.6,94.4-127.2,173.3-127c80.1,0.2,151.3,53.8,173.7,131.3c-6.2,8.1-69.8,88.3-178.1,85.2  C141,468.8,82.8,391.5,76.1,382.3z"></path><path class="st2" d="M249.7,238.9c7.1-0.5,21.2-2.6,35.2-12.1c12-8.3,18.2-18.2,21.2-23.3c14.9-24.7,29.8-78.7-0.9-110  c-19.7-20.1-47.9-20.3-55.6-20.4c-4.9,0-35.8-0.3-55.6,19.2c-24.6,24.2-26.3,73.1,1.7,115.8c3.6,5.4,11.8,16.2,26.5,23.6  C233.5,237.3,243.6,238.6,249.7,238.9z"></path></svg>
               </div>
   
               <div class="bloco-login-texto">
                  <span>Descubra a experiência personalizada que fizemos para você :)</span>
               </div>

               <div class="bloco-login-botao">
                  <a href="/conta/login">Fazer login</a>
               </div>

            </div>
        </div> 
      `);

   },

   blocoVideoComProdutos(){
		const blocoVideoComProdutos = {
			gerarHTML(){
				return `
					<div class="video-com-produtos">
						<div class="video-com-produtos-conteudo">
							<div class="video-com-produtos-corpo">
								<div class="video-com-produtos-corpo-video">
									<iframe width="890" height="500" src="https://www.youtube.com/embed/PUOc_s-QXP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								</div>
								<div class="video-com-produtos-corpo-produtos">
									<div class="video-com-produtos-corpo-produtos-titulo">Indicações do Vídeo</div>
									<div class="video-com-produtos-corpo-produtos-lista">
										<div class="video-com-produtos-corpo-produtos-lista-target">${ ILUMINIM_UTILS.icones.loading }</div>
									</div>
									<div class="video-com-produtos-corpo-produtos-btn-comprar">Compre todos</div>
									<div class="video-com-produtos-corpo-produtos-adicionados"><span>Produtos adicionados!</span><a href="/carrinho/index">Ir para o carrinho</a></div>
								</div>
							</div>
						</div>
					</div>
				`;
			},

			timeAwait(time){
				return new Promise((resolve, reject) => {
					setTimeout(resolve, time);
				});
			},

			onClickBtnComprarProdutos(){

				$(document).on('click', '.video-com-produtos-corpo-produtos-btn-comprar', async () => {
					$('.video-com-produtos').addClass('adicionando-produtos');

					let promises = [];
					let productsIDS = Array.from($('.video-com-produtos div#smartfront__app .body-app--product-listing .content--product-application')).map(item => $(item).attr('data-id'));
					
					for(let i = 0; i < productsIDS.length; i++){
						await this.timeAwait(1000);
						promises.push(fetch(`/carrinho/produto/${productsIDS[i]}/adicionar/1`));
					}

					await Promise.all(promises);
					
					$('.video-com-produtos').removeClass('adicionando-produtos').addClass('produtos-adicionados');
				});

			},

			renderizar(){
				let html = this.gerarHTML();

				$('#listagemProdutos').append(html);

				this.onClickBtnComprarProdutos();
			}
		}

		blocoVideoComProdutos.renderizar();
	},

   reposicionarListagens(){

      //MAIS VENDIDOS
      $(`
         .titulo-categoria.borda-principal.cor-principal.vitrine-mas-vendido+ul, 
         .titulo-categoria.borda-principal.cor-principal.vitrine-mas-vendido
      `).appendTo('div#listagemProdutos');

      this.carrouselBannersPersonalizados(); //MANTER ORDEM

      //KITS ESPECIAIS
      $(`
         a.titulo-categoria.borda-principal.cor-principal.vitrine-3217133+ul, 
         a.titulo-categoria.borda-principal.cor-principal.vitrine-3217133
      `).appendTo('div#listagemProdutos');


      //REFLETORES LED
      $(`
         a.titulo-categoria.borda-principal.cor-principal.vitrine-3874806+ul, 
         a.titulo-categoria.borda-principal.cor-principal.vitrine-3874806
      `).appendTo('div#listagemProdutos');

      this.miniBanners();

      //this.cronometroLEDOfertas();
      //this.cronometroLEDOfertasChristmas();

      //LUMINÁRIAS LED
      $(`
         a.titulo-categoria.borda-principal.cor-principal.vitrine-3217072+ul, 
         a.titulo-categoria.borda-principal.cor-principal.vitrine-3217072
      `).appendTo('div#listagemProdutos');

      //this.bannersDesconto();
      //this.bannersDescontoBlack(); //REMOVER APOS BLACK

      //this.bannersKitsDesconto();
	  //this.blocosDescontosProgressivos();
	  this.gridDiferenciais();
      //LANÇAMENTOS LED
      $(`
         .titulo-categoria.borda-principal.cor-principal.vitrine-lancamento+ul, 
         .titulo-categoria.borda-principal.cor-principal.vitrine-lancamento
      `).appendTo('div#listagemProdutos');
      
      //this.videosNaHome();
      //this.duploBlocoVitrine();

      //SPOT LED
      $(`
         a.titulo-categoria.borda-principal.cor-principal.vitrine-3874696+ul, 
         a.titulo-categoria.borda-principal.cor-principal.vitrine-3874696
      `).appendTo('div#listagemProdutos');

      //this.blocoUsuarioComProdutos();

      //LÂMPADAS LED
      $(`
         a.titulo-categoria.borda-principal.cor-principal.vitrine-881065+ul, 
         a.titulo-categoria.borda-principal.cor-principal.vitrine-881065
      `).appendTo('div#listagemProdutos');
   
      //this.oportunidadesEspeciais();
	  this.blocoVideoComProdutos();

      //FITAS LED
      $(`
         a.titulo-categoria.borda-principal.cor-principal.vitrine-881696+ul, 
         a.titulo-categoria.borda-principal.cor-principal.vitrine-881696
      `).appendTo('div#listagemProdutos');

      //KIT PENDENTES LED
      $(`
         a.titulo-categoria.borda-principal.cor-principal.vitrine-2756184+ul, 
         a.titulo-categoria.borda-principal.cor-principal.vitrine-2756184
      `).appendTo('div#listagemProdutos');
  
      //EMERGENCIA LED
      $(`
         a.titulo-categoria.borda-principal.cor-principal.vitrine-16397775+ul, 
         a.titulo-categoria.borda-principal.cor-principal.vitrine-16397775
      `).appendTo('div#listagemProdutos');

   },

   iniciar(){ //INICIAR SCRIPTS DA PÁGINA;

      this.bannerTarja(); //MANTER ORDEM

      this.blocoTriplo(); //MANTER ORDEM
      this.loginMobileVitrine(); //MANTER ORDEM

      //ILUMINIM_UTILS.renderizarCategoriasFlutuante();
      ILUMINIM_UTILS.renderizarBotaoVoltarAoTopo();
      //ILUMINIM_UTILS.newsletterFlutuante();

      this.bannerChamadaDesktop();
	  //this.tarjaAbaixoMenu();
      
      //this.bannerChamadaMobile();

      this.cronometroBannerHome();
      this.tagLancamentoListagemProduto();
      this.tagCampeaoDeVendasListagemProduto();
      this.visualizacaoRapida();
      this.cronometroProdutosListagem();

      ILUMINIM_UTILS.botaoAdicionarCarrinhoListagem();

      this.verTodosNasListagens();
      this.tarjaInformacoesRodape();
      this.textoSeoAvaliacoes();
      
      this.entrarOuCadastrarListagem();
      this.aplicarDescontoPrimeiraCompra();
      //this.bannersEmAba();
      
      this.palavrasBuscadasTopoMobile();
      this.baixarAppMobile();
      //this.tarjaTopoMobile();
      this.gifTarjaMobile();
      //this.bannerYoutubeMobile();
      //this.bannerBaixeNossoAppMobile();
      this.historicoDeNavegacaoMobile();
      this.newsletterMobile();
      //this.naveguePorCategoria();
      this.removerBotaoProdutoAdicionado();
      this.blocoLogin();

      //this.tagCampanhaListagemApenasClasse();

      this.reposicionarListagens(); //MANTER FINAL

   }

}

$(document).ready(()=> {

   PaginaInicial.iniciar();

});