var PaginaInicial = {

   bannerChamadaDesktop(){

      if(!ILUMINIM_UTILS.screen.isDesktop()){
         return;
      }

      let target = $('.secao-banners .banner.cheio img[alt="Banner chamada"]');

      if(target.length > 0){

         let bannerChamada = 'https://blog.iluminim.com.br/wp-content/uploads/2021/12/led-ofertas-precos-imbativeis-new-2022.gif';
         target.attr('src', bannerChamada);

      }
      
   },

   bannerChamadaMobile(){

      if(!ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      let bannerChamada = 'https://blog.iluminim.com.br/wp-content/uploads/2021/03/Banner-Principal-500x488-do-consumidor-1.gif';
      $('.secao-banners .banner.cheio img[alt="Banner Chamada @MOBILE"]').attr('src', bannerChamada);

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
                        <span><strong>Entrega Expressa</strong>Garantimos a entrega rápida do seu produto</span>
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
                           As compras podem ser parceladas em até 12x sem juros e para pagamento via boleto é concedido um desconto de 10%.
                        </div>
                  </div>
      
               </li>
      
               <li class="item-tarja melhor-preco">
                  
                  <a href="/pagina/menor-preco-led.html" class="item-tarja-conteudo">
                        <div class="item-tarja-icone">
                           ${ILUMINIM_UTILS.icones.mao_porcentagem}
                        </div>
                        <span><strong>O melhor preço</strong>Garantimos os menores preços</span>
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
                        <span><strong>10 anos no mercado</strong>Já são mais de 1.000.000 clientes satisfeitos</span>
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
                        <span><strong>Encontre a Iluminim</strong>Lojas Físicas e Pontos de Retirada no Brasil</span>
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

   blocoTriplo(){ //WIREFRAME

      const BlocoTriplo = {

         ativarCarousel(){

               if(ILUMINIM_UTILS.screen.isDesktop()){

                  $('.bloco-triplo-personalizado > div .carousel-target').each(function(){

                     $(this).owlCarousel({
                           loop:false,
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
                     //imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banners_verticais_carrossel_home_FITAS_LED_06-10-21.png',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/FITAS_VERTICAIS_HOME_13-01-2022-v1.png',
                     link: '/fitas-de-led?sort=mais_vendidos',
                  },
                  {
                     nome: 'Lâmpadas LED',
                     //imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banners_verticais_carrossel_home_lampadas_06-10-21.png',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/LAMPADAS_VERTICAIS_HOME_13-01-2022-v1.png',
                     link: '/lampada-led?sort=mais_vendidos',
                  },
                  {
                     nome: 'Spots LED',
                     //imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banners_verticais_carrossel_home_spots_06-10-21.png',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/SPOTS_VERTICAIS_HOME_13-01-2022-v1.png',
                     link: '/spots?sort=mais_vendidos',
                  },
               ],

               bloco_3: [
                  {
                     nome: 'Frete Grátis',
                     //imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Banner_Vertical_Frete_Gratis_PRECOS_IMBATIVEIS-02-09-21.png',
                     // https://cdn.awsli.com.br/257/257163/arquivos/banner_vertical_frete_gratis_home_imbativel-15-09-21.png
                     //imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner_vertical_frete_gratis_home_imbativel_06-10-21.png',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-vertical-frete-gratis-10-01-21.png',
                     link: '/frete-gratis?sort=mais_vendidos',
                  },
                  {
                     nome: 'Frete Grátis KIT 10 Refletor',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner_vertical_frete_gratis_home_RSPM-200WBF-KIT5-16-09-21.png',
                     link: '/kit-5-refletor-holofote-microled-slim-200w-branco-frio',
                  },
                  {
                     nome: 'Frete Grátis KIT 10 Luminária',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner_vertical_frete_gratis_home_PG-Q18WBF-KIT10-16-09-21.png',
                     link: '/kit-10-luminaria-plafon-18w-led-sobrepor-branco-frio-',
                  },
                  {
                     nome: 'Frete Grátis KIT 20 Tubular',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner_vertical_frete_gratis_home_LUM-120BF-KIT20-16-09-21-v2.png',
                     link: '/kit-20-tubular-led-sobrepor-completa-36w-120m-branco-frio',
                  },
                  {
                     nome: 'Frete Grátis KIT 50 Luminária Emergência',
                     imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner_vertical_frete_gratis_home_23597-KIT50-16-09-21.png',
                     link: '/kit-50-luminaria-de-emergencia-30-leds-slim',
                  },
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
                  loop:false,
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
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/refletores_wide_wire_24-12-21.png',
                  link: '/refletor-led-friday?sort=mais_vendidos',
               },
               {
                  nome: 'Luminárias LED a partir de R$ 8,09',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/luminarias_wide_wire_24-12-21.png',
                  link: '/plafon-led-friday?sort=mais_vendidos',
               }
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
               <div class="cronometro-led-ofertas-conteudo">
               
                  <div class="cronometro-led-ofertas-conteudo-textos">
                     <div class="cronometro-led-ofertas-conteudo-texto-1">SÓ HOJE: LED OFERTAS</div>
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
                  nome: 'Refletores LED com até 84% de desconto!',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/refletores_wire_v2_24-12-21.png',
                  link: '/refletores-de-led?sort=mais_vendidos',
               },
               {
                  nome: 'Lançamentos LED com até 64% de desconto!',
                  imagem: 'https://cdn.awsli.com.br/1234/1234739/arquivos/LANCAMENTOS_plafon-13-01-22.png',
                  link: '/lancamentos-led?sort=ultimos_produtos',
               },
               {
                  nome: 'Oferta da Semana com até 78% de desconto',
                  imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/OFERTAS_DA_SEMANA_kit10-14-01.png',
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

      $('#listagemProdutos a.titulo-categoria').append('<span class="ver-todos animation-blinking">Ver Todos <i class="icon-list-ul"></i></span>');

   },

   bannersDesconto(){
      
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

            $('.banners-com-desconto .lista-banners-com-desconto.carousel-target').owlCarousel({
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
               <div class="banners-com-desconto">
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

   /*bannersDesconto(){

      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }

      const BannersDesconto = {

         gerarObjeto(){

               let banners = [
                  {
                     nome: 'Refletores Micro LED SMD',
                     link: '/refletor-microled?sort=mais_vendidos',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/refletor-banner-desconto-08-02-2021-v2.png',
                     desconto: '64',
                     width: '116',
                     height: '143'
                  },
                  {
                     nome: 'Plafon LED Garantia Total',
                     link: '/plafon-led-sobrepor?sort=mais_vendidos!',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/refletor-banner-desconto-luminarias-rgb-23-03-2021.png',
                     desconto: '64',
                     width: '119',
                     height: '132'
                  },
                  {
                     nome: "Fita LED A prova d'agua",
                     link: '/fita-de-led?sort=mais_vendidos!',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/refletor-banner-desconto-fita-23-03-2021.png',
                     desconto: '64',
                     width: '113',
                     height: '113'
                  },
                  {
                     nome: 'Fonte Chaveada Automática Bivolt',
                     link: '/fonte-chaveada-led?sort=mais_vendidos',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/refletor-banner-desconto-fonte-23-03-2021.png',
                     desconto: '44',
                     width: '142',
                     height: '111'
                  },
                  {
                     nome: 'Lâmpadas LED RGB Estilo e cor',
                     link: '/lampada-led-rgb?sort=mais_vendidos',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/refletor-banner-desconto-lampada-rgb-23-03-2021.png',
                     desconto: '84',
                     width: '115',
                     height: '143'
                  },
                  {
                     nome: 'Balizadores LED Impermeáveis',
                     link: '/balizador-led?sort=mais_vendidos',
                     imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/refletor-banner-desconto-balizador-23-03-2021.png',
                     desconto: '44',
                     width: '127',
                     height: '134'
                  }
               ];

               return banners;

         },

         gerarHTML(){

               let objeto = this.gerarObjeto();

               let html = objeto.map(banner=> {

                  return `
                     <li class="banner-desconto" data-nome-banner-desconto="${banner.nome}">
                           <a href="${banner.link}" onclick="ga('send', 'event', 'Porcentagem Categorias Home','click', '${banner.nome}')">
                              <div class="banner-desconto-textos">
                                 <div class="banner-desconto-nome">${banner.nome}</div>
                                 <div class="banner-desconto-textos-desconto">
                                       <div>com até</div>
                                       <div class="banner-desconto-texto-desconto">${banner.desconto}%</div>
                                       <div>de desconto</div>
                                 </div>
                              </div>

                              <div class="banner-desconto-imagem">
                                 <img alt="${banner.nome}" title="${banner.nome}" src="${banner.imagem}" width="${banner.width}" height="${banner.height}">
                              </div>
                           </a>
                     </li>
                  `;

               }).join('');

               return`
                  <div class="banners-com-desconto">
                     <ul class="lista-banners-com-desconto">
                           ${html}
                     </ul>
                  </div>
               `;

         },

         renderizar(){

               let html = this.gerarHTML();

               $('#listagemProdutos a.titulo-categoria.vitrine-3217078').before(html);

         }

      }
      
      BannersDesconto.renderizar();

   },*/
                  
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
                  nome: 'Refletores Micro LED Super Oferta!',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/carrossel-banners-home-pequenos-refletores-24-05-21.png',
                  link: '/refletor-micro-led-slim?sort=mais_vendidos',
                  width: '300',
                  height: '237'
               },
               {
                  nome: 'Decoração Lâmpada Vintage',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/decoracao_vintage-25-05-21-v2.png',
                  link: '/led-retro?sort=mais_vendidos',
                  width: '300',
                  height: '237'
               },
               {
                  nome: 'Plafons LED Até 65% OFF',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/carrossel-banners-home-pequenos-plafon-24-05-21.png',
                  link: '/plafon-led?sort=mais_vendidos',
                  width: '300',
                  height: '237'
               },
               {
                  nome: 'Spot LED Melhores Ofertas!',
                  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot_led-25-05-21-v2.png',
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
         a.titulo-categoria.borda-principal.cor-principal.vitrine-881697+ul .listagem-item
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

   },

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

   duploBlocoVitrine(){

      $('#listagemProdutos').append(`
         <div class="duplo-bloco-vitrine">
            <div class="bloco-vitrine-1">
               <a href="/led-friday?sort=mais_vendidos">
                  <img src="https://cdn.awsli.com.br/930/930730/arquivos/banner_video_24-12-21.png">
               </a>
            </div>

            <div class="bloco-vitrine-2">
               <iframe allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" height="235" src="https://www.youtube.com/embed/Tgav0FeEPbI" width="427"></iframe>
            </div>
         </div>
      `);

   },

   reposicionarListagens(){

      //MAIS VENDIDOS
      $(`
         .titulo-categoria.borda-principal.cor-principal.vitrine-mas-vendido+ul, 
         .titulo-categoria.borda-principal.cor-principal.vitrine-mas-vendido
      `).appendTo('div#listagemProdutos');

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

      this.cronometroLEDOfertas();

      //LUMINÁRIAS LED
      $(`
         a.titulo-categoria.borda-principal.cor-principal.vitrine-3217072+ul, 
         a.titulo-categoria.borda-principal.cor-principal.vitrine-3217072
      `).appendTo('div#listagemProdutos');

      this.bannersDesconto();

      //LANÇAMENTOS LED
      $(`
         .titulo-categoria.borda-principal.cor-principal.vitrine-lancamento+ul, 
         .titulo-categoria.borda-principal.cor-principal.vitrine-lancamento
      `).appendTo('div#listagemProdutos');

      this.duploBlocoVitrine(); 

      //SPOT LED
      $(`
         a.titulo-categoria.borda-principal.cor-principal.vitrine-3874696+ul, 
         a.titulo-categoria.borda-principal.cor-principal.vitrine-3874696
      `).appendTo('div#listagemProdutos');

      //this.blocoUsuarioComProdutos();

      //EMERGENCIA LED
      $(`
         a.titulo-categoria.borda-principal.cor-principal.vitrine-16397775+ul, 
         a.titulo-categoria.borda-principal.cor-principal.vitrine-16397775
      `).appendTo('div#listagemProdutos');
   
      this.oportunidadesEspeciais();

      //FITAS LED
      $(`
         a.titulo-categoria.borda-principal.cor-principal.vitrine-881696+ul, 
         a.titulo-categoria.borda-principal.cor-principal.vitrine-881696
      `).appendTo('div#listagemProdutos');

   },

   iniciar(){ //INICIAR SCRIPTS DA PÁGINA;

      this.bannerTarja(); //MANTER ORDEM
      this.blocoTriplo(); //MANTER ORDEM
      this.carrouselBannersPersonalizados(); //MANTER ORDEM
      
      this.miniBanners(); //MANTER ORDEM

      //ILUMINIM_UTILS.renderizarCategoriasFlutuante();
      ILUMINIM_UTILS.renderizarBotaoVoltarAoTopo();
      //ILUMINIM_UTILS.newsletterFlutuante();

      this.bannerChamadaDesktop();
      //this.bannerChamadaMobile();

      this.tagLancamentoListagemProduto();
      this.tagCampeaoDeVendasListagemProduto();
      this.visualizacaoRapida();
      
      this.verTodosNasListagens();
      this.tarjaInformacoesRodape();
      this.textoSeoAvaliacoes();
      
      this.entrarOuCadastrarListagem();
      this.aplicarDescontoPrimeiraCompra();

      //this.bannersEmAba();
      
      this.palavrasBuscadasTopoMobile();
      //this.tarjaTopoMobile();
      //this.gifTarjaMobile();
      //this.bannerYoutubeMobile();
      //this.bannerBaixeNossoAppMobile();
      this.historicoDeNavegacaoMobile();
      this.newsletterMobile();
      //this.naveguePorCategoria();
      this.removerBotaoProdutoAdicionado();


      this.reposicionarListagens(); //MANTER FINAL

   }

}

$(document).ready(()=> {

   PaginaInicial.iniciar();

});