var PaginaInicial = {

	bannerChamadaDesktop(){ //VOLTAR APOS BLACK
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()){
		  return;
	   }
 
	   let target = $('.secao-banners .banner.cheio img[alt="Banner Chamada Campanha - @gif"]');
 
	   if(target.length > 0){
 
		 let bannerChamada = 'https://blog.iluminim.com.br/wp-content/uploads/2022/06/NOVA-CAMPANHA-versao-fina-2.gif';
		 //let bannerChamada = 'https://blog.iluminim.com.br/wp-content/uploads/2022/05/banner-desktop-chamada-campanha-30-05-2022.gif';
 
		 target.attr('src', bannerChamada);
 
	   }
	   
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
						 <span><strong>Frete Grátis Brasil</strong>Expresso para compras a partir de R$299,00</span>
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
							autoplayTimeout:5000,
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
						 nome: 'Ofertas da Semana',
						 imagem: 'https://blog.iluminim.com.br/wp-content/uploads/2022/05/Banner-vertical-fita-led-03-05-2022.gif',
						 link: '/ofertadasemana?sort=mais_vendidos',
					  },
					  /*{
						 nome: 'Refletor Micro LED Slim 200W Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banners_verticais_RSPM-200WBF-27-05-2022.png',
						 link: '/refletor-micro-led-slim-200w-branco-frio',
					  },*/
					  /*{
						 nome: 'Lâmpadas LED',
						 imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Bloco1-Lampadas-LED-29-03-2022.png',
						 link: '/lampada-led',
					  },
					  {
						 nome: 'Spots LED',
						 imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Bloco1-Spots-LED-29-03-2022.png',
						 link: '/spots',
					  },
					  {
						 nome: 'Arandelas LED',
						 imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Bloco1-Arandelas-LED-29-03-2022.png',
						 link: '/arandela-led?sort=mais_vendidos',
					  },*/
				   ],
 
				   bloco_3: [
					  {
						 nome: 'Frete Grátis',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-vertical-frete-gratis-22-06-2022.png',
						 //imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/BANNER-VERTICAL-FRETE-GRATIS-07-06-2022.png',
						 link: '/frete-gratis?sort=mais_vendidos',
					  },
					  /*{
						 nome: 'Dia do Frete Grátis',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-vertical-frete-gratis-18-04-2022.png',
						 link: '/frete-gratis?sort=mais_vendidos',
					  },
					  {
						 nome: 'Frete Grátis RSPM-200WBF-KIT5',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/16-02-2022-banner-vertical-RSPM-200WBF-KIT5.png',
						 link: '/kit-5-refletor-holofote-microled-slim-200w-branco-frio',
					  },
					  {
						 nome: 'Frete Grátis RSPM-200WBF-KIT10',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/16-02-2022-banner-vertical-RSPM-200WBF-KIT10.png',
						 link: '/kit-10-refletor-holofote-microled-slim-200w-branco-frio',
					  },
					  {
						 nome: 'Frete Grátis RSPM-300WBF-KIT10',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/16-02-2022-banner-vertical-RSPM-300WBF-KIT10.png',
						 link: '/kit-10-refletor-holofote-microled-slim-300w-branco-frio',
					  },
 
					  {
						 nome: 'Frete Grátis PS-Q18WBF-KIT20',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/16-02-2022-banner-vertical-PS-Q18WBF-KIT20.png',
						 link: '/kit-20-luminaria-plafon-led-18w-embutir-branco-frio',
					  },
					  {
						 nome: 'Frete Grátis PS-Q25WBF-KIT20',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/16-02-2022-banner-vertical-PS-Q25WBF-KIT20.png',
						 link: '/kit-20-luminaria-plafon-25w-led-embutir-branco-frio',
					  },
 
					  {
						 nome: 'Frete Grátis LUM-120BF-KIT20',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/16-02-2022-banner-vertical-LUM-120BF-KIT20.png',
						 link: '/kit-20-tubular-led-sobrepor-completa-36w-120m-branco-frio',
					  },
					  {
						 nome: 'Frete Grátis 23597-KIT50',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/16-02-2022-banner-vertical-23597-KIT50.png',
						 link: '/kit-50-luminaria-de-emergencia-30-leds-slim',
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
							   <div class="bloco-produtos-titulo">Ofertas Exclusivas</div>
							   <div class="bloco-produtos-relogio-cronometro">
									${ ILUMINIM_UTILS.screen.isMobile() ? `
										${ILUMINIM_UTILS.icones.relogio_2}
									` : ``}
									
									<ul class="countdown-target"></ul>
							   </div>
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
						 nome: 'Refletores LED',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Refletores_banner-horizontal-23-06-2022.png',
						 link: '/refletores-de-led?sort=mais_vendidos',
					 },
					 {
						 nome: 'Luminárias LED',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Luminarias_banner-horizontal-23-06-2022.png',
						 link: '/luminarias-led?sort=mais_vendidos',
					 },
					 /*{
						 nome: 'Arandelas LED a partir de R$ 26,54',
						 imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/29-03-2022-banner-horizontal-arandelas-led.png',
						 link: '/arandela-led?sort=mais_vendidos',
					 },*/
						{
						 nome: 'Lustre LED',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Lustres_banner-horizontal-23-06-2022.png',
						 link: '/lustre',
					 },
					 {
						 nome: 'Spots LED',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Spots_banner-horizontal-23-06-2022.png',
						 link: '/spots',
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
					  <div class="cronometro-led-ofertas-conteudo-texto-1">LED OFERTAS DA SEMANA</div>
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
	
	miniBanners(){
 
	   if(ILUMINIM_UTILS.screen.isMobile()){
		  return;
	   }
 
	   const MiniBanners = {
	   
		  gerarObjeto(){
	   
				let banners = [
				   {
					  nome: 'Refletores LED',
					  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/minibanner-refletores-21-06-2022.png',
					  link: '/refletores-de-led?sort=mais_vendidos',
				   },
				   {
					  nome: 'Lançamentos LED',
					  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/minibanner-lancamentos-21-06-2022.png',
					  link: '/lancamentos-led',
				   },
				   {
					  nome: 'Super Ofertas LED',
					  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/minibanner-super-ofertas-21-06-2022.png',
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
	   
	   $('#listagemProdutos a.titulo-categoria').each(function(){
		 let href = $(this).attr('href');
		 $(this).attr('href', `${href}?sort=mais_vendidos`);
		 $(this).append('<span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>');
	   });
 
	   //$('#listagemProdutos a.titulo-categoria').append('<span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>');
 
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
				   link: '/spots!',
				   imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-desconto-spots-03-09-21.png',
				   desconto: '64',
				},
				{
				   nome: 'Fitas LED',
				   link: '/fita-de-led',
				   imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-desconto-fitas-03-09-21.png',
				   desconto: '44',
				},
				{
				   nome: 'Lâmpadas LED',
				   link: '/lampada-led',
				   imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-desconto-lampadas-03-09-21.png',
				   desconto: '84',
				},
				{
				   nome: 'Acessórios LED',
				   link: '/acessorios-para-leds',
				   imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-desconto-acessorios-03-09-21.png',
				   desconto: '44',
				},
				{
				   nome: 'Kits LED',
				   link: '/kits-led',
				   imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/kits-ref-29-09-21-v2.png',
				   desconto: '84',
				},
				{
				   nome: 'Lustres LED',
				   link: '/lustre',
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
				   link: '/lancamentos-led',
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
				   link: '/spots!',
				   imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-SPOTS.png',
				   desconto: '64',
				},
				{
				   nome: 'Fitas LED',
				   link: '/fita-de-led',
				   imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-fitas.png',
				   desconto: '44',
				},
				{
				   nome: 'Lâmpadas LED',
				   link: '/lampada-led',
				   imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-lampadas.png',
				   desconto: '84',
				},
				{
				   nome: 'Acessórios LED',
				   link: '/acessorios-para-leds',
				   imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-acessorios.png',
				   desconto: '44',
				},
				{
				   nome: 'Kits LED',
				   link: '/kits-led',
				   imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/npmd-25-10-21-Kits-LED.png',
				   desconto: '84',
				},
				{
				   nome: 'Lustres LED',
				   link: '/lustre',
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
				   link: '/lancamentos-led',
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
				   link: '/kits-led',
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
				 link: '/kit-led-5-unidades?sort=mais_vendidos',
				 imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/box-kit-5-04-05-2022.png',
				 desconto: '40',
			  },
			  {
				 nome: 'KIT 10',
				 link: '/kit-led-10-unidades?sort=mais_vendidos',
				 imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/box-kit-10-04-05-2022.png',
				 desconto: '50',
			  },
			  {
				 nome: "KIT 12",
				 link: '/kit-led-12-unidades?sort=mais_vendidos!',
				 imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/box-kit-12-04-05-2022.png',
				 desconto: '60',
			  },
			  {
				 nome: 'KIT 20',
				 link: '/kit-led-20-unidades?sort=mais_vendidos',
				 imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/box-kit-20-04-05-2022.png',
				 desconto: '70',
			  },
			  {
				 nome: 'KIT 30',
				 link: '/kit-led-30-unidades?sort=mais_vendidos',
				 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/box-kit-30-09-05-2022-v2.png',
				 desconto: '80',
			  },
		   ];
 
		   return banners;
 
		},
 
		ativarCarousel(){
 
		   $('.blocos-descontos-progressivos .carousel-target').owlCarousel({
			  loop:false,
			  margin:30,
			  autoHeight: false,
			  touchDrag  : false,
			  mouseDrag  : false,
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
					<strong>Descontos Progressivos</strong>
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
					 nome: 'Plafon para Sala de Estar',
					 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon_para_Sala_de_Estar-30-06-2022-v2.jpg',
					 link: '/plafon-para-sala-de-estar?sort=mais_vendidos',
					 width: '304',
					 height: '304'
				 },
				 {
					 nome: 'Refletor para Jardim',
					 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Refletor_para_Jardim-30-06-2022.jpg',
					 link: '/refletor-led-para-jardim?sort=mais_vendidos',
					 width: '304',
					 height: '304'
				 },
				 {
					 nome: 'Plafon para Quarto',
					 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon_para_Quarto-30-06-2022.jpg',
					 link: '/luminaria-de-teto-para-quarto?sort=mais_vendidos',
					 width: '304',
					 height: '304'
				 },
				 {
					 nome: 'Refletor para Fachada',
					 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Refletor_para_Fachada-30-06-2022-v2.jpg',
					 link: '/led-para-outdoor?sort=mais_vendidos',
					 width: '304',
					 height: '304'
				 },
				 /*{
					 nome: 'Leve mais pague menos',
					 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-leve-mais-pague-menos-15-06-2022.png',
					 link: '/kits-led',
					 width: '304',
					 height: '304'
				 },
				 {
					 nome: 'Oferta relâmpago',
					 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-oferta-relampago-15-06-2022.png',
					 link: '/ofertadasemana?sort=mais_vendidos',
					 width: '304',
					 height: '304'
				 },
				 {
					 nome: 'Frete grátis',
					 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-frete-gratis-15-06-2022.png',
					 link: '/frete-gratis?sort=mais_vendidos',
					 width: '304',
					 height: '304'
				 },
				 {
					 nome: 'Compre por ambiente',
					 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-compre-por-ambiente-15-06-2022.png',
					 link: '/compre-por-ambiente',
					 width: '304',
					 height: '304'
				 },*/
				 /*
				  {
					 nome: 'Baixaram os preços',
					 imagem: 'https://blog.iluminim.com.br/wp-content/uploads/2022/05/mini-banner-baixaram-os-precos-25-05-2022-1.png',
					 link: '/pagina/led-ofertas.html',
					 width: '620',
					 height: '279'
				   },
				   {
					 nome: 'Ofertas da semana',
					 imagem: 'https://blog.iluminim.com.br/wp-content/uploads/2022/05/mini-banner-oferta-da-semana-25-05-2022.png',
					 link: '/ofertadasemana?sort=mais_vendidos',
					 width: '620',
					 height: '279'
				   },
				   */
				   /*
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
					  //imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot_led-25-05-21-v2.png',
					  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/compre_por_ambiente-29-12-21.png',
					  //link: '/spots',
					  link: '/compre-por-ambiente',
					  width: '300',
					  height: '237'
				   }*/
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
 
	   
	   //a.titulo-categoria.borda-principal.cor-principal.vitrine-2756184+ul .listagem-item,
	   $(`
		  .titulo-categoria.borda-principal.cor-principal.vitrine-mas-vendido+ul .listagem-item,
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-877731+ul .listagem-item,
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-881697+ul .listagem-item,
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
 
	   if(!ILUMINIM_UTILS.screen.isMobile()) return;
 
	   $('.html_content .palavras-buscadas.palavras-buscadas-topo-mobile').insertBefore('.secao-banners');
 
	},
 
	/*tarjaTopoMobile(){
 
	   $('.palavras-buscadas.palavras-buscadas-topo-mobile').before(`
		  <div class="gif-topo-mobile">
				<a href="#!"><img alt="LED Ofertas Fantástica! Frete grátis para compras acima de R$299,00" title="LED Ofertas Fantástica! Frete grátis para compras acima de R$299,00" src="https://blog.iluminim.com.br/wp-content/uploads/2021/01/mobile-Tarja-topo-LED-OFERTAS-FANTASTICAS-500x45-1.gif"></a>
		  </div>
	   `);
 
	},*/

	adaptacoesFullBannersMobile(){

		if(!ILUMINIM_UTILS.screen.isMobile()) return;

		$('.secao-banners .row-fluid.banner.cheio ul.slides > li').removeAttr('style').removeAttr('class');
		
		let banners = $('.secao-banners .row-fluid.banner.cheio ul.slides').html();

		$('.secao-banners').prepend(`
			<div class="full-banners-mobile">
				<ul class="lista-full-banners carousel-target">
					${banners}
				</ul>
			</div>
		`);

		$('.secao-banners .lista-full-banners.carousel-target').owlCarousel({
			loop: false,
			margin: 5,
			nav: false,
			dots: true,
			navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
			responsive: {
			   0: {
				  items: 1
			   },
			}
		 });

	},

	gridCategoriasMobile(){

		if(!ILUMINIM_UTILS.screen.isMobile()) return;

		$('.secao-banners').after(`
			<div class="grid-categorias">
				<div class="lista-grid-categorias carousel-target">
					<div class="categoria-item">
						<a href="#!">
							<div class="categoria-item-icone">
								<svg width="56" height="47" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="4.18 7.52 38.13 30.73"><g><path d="M13.1721 20.4373L12.9245 20.3432L12.9229 20.3476L13.1721 20.4373ZM13.1721 13.7274L12.9223 13.8156L12.9239 13.8199L13.1721 13.7274ZM10.875 13.7475L10.6262 13.6566L10.6247 13.6609L10.875 13.7475ZM17.6454 23.8628L17.8497 24.0314L17.8504 24.0306L17.6454 23.8628ZM6.46218 23.7822L6.25534 23.9477L6.25681 23.9495L6.46218 23.7822ZM6.42188 10.181L6.62564 10.3502L6.62634 10.3494L6.42188 10.181ZM34.3296 8.2063L34.5612 8.33478L34.7794 7.94142H34.3296V8.2063ZM17.988 37.6656V37.9304H18.1439L18.2196 37.794L17.988 37.6656ZM12.0034 37.6656L11.7718 37.5371L11.5536 37.9304H12.0034V37.6656ZM28.345 8.2063V7.94142H28.1891L28.1134 8.07781L28.345 8.2063ZM35.6393 32.0034L35.3848 31.9301L35.384 31.933L35.6393 32.0034ZM35.6393 25.6159L35.3836 25.6852L35.3852 25.6904L35.6393 25.6159ZM33.2818 25.4748L33.033 25.3839L33.0315 25.3882L33.2818 25.4748ZM40.032 35.57L39.8279 35.4012L39.8277 35.4014L40.032 35.57ZM28.8689 35.4894L28.6621 35.6548L28.6636 35.6566L28.8689 35.4894ZM28.8286 21.9083L29.0324 22.0775L29.0331 22.0767L28.8286 21.9083ZM10.2474 17.0723C10.2474 18.6215 10.3741 19.7772 10.647 20.5097L11.1434 20.3247C10.9058 19.687 10.7772 18.6127 10.7772 17.0723H10.2474ZM10.647 20.5097C10.7836 20.8765 10.963 21.1758 11.1971 21.3853C11.4368 21.5997 11.7229 21.7097 12.0437 21.7097V21.18C11.8541 21.18 11.6936 21.1186 11.5503 20.9905C11.4016 20.8574 11.2619 20.643 11.1434 20.3247L10.647 20.5097ZM12.0437 21.7097C12.3631 21.7097 12.6478 21.6024 12.8851 21.3905C13.1168 21.1836 13.2914 20.8881 13.4213 20.527L12.9229 20.3476C12.8111 20.6582 12.6766 20.8665 12.5323 20.9954C12.3934 21.1194 12.2348 21.18 12.0437 21.18V21.7097ZM13.4197 20.5314C13.6935 19.8111 13.8198 18.6471 13.8198 17.0723H13.2901C13.2901 18.6409 13.1612 19.7203 12.9245 20.3432L13.4197 20.5314ZM13.8198 17.0723C13.8198 15.5231 13.6932 14.3674 13.4203 13.6349L12.9239 13.8199C13.1615 14.4576 13.2901 15.5318 13.2901 17.0723H13.8198ZM13.4219 13.6392C13.2923 13.272 13.1183 12.9714 12.887 12.7608C12.65 12.545 12.3647 12.4349 12.0437 12.4349V12.9646C12.2332 12.9646 12.3912 13.0258 12.5303 13.1525C12.6752 13.2844 12.8102 13.4977 12.9223 13.8155L13.4219 13.6392ZM12.0437 12.4349C11.7166 12.4349 11.4252 12.5462 11.1818 12.7645C10.9439 12.9777 10.7629 13.2827 10.6262 13.6566L11.1238 13.8384C11.2424 13.5138 11.3837 13.2949 11.5354 13.1589C11.6816 13.0279 11.8469 12.9646 12.0437 12.9646V12.4349ZM10.6247 13.6609C10.3677 14.4035 10.2474 15.5492 10.2474 17.0723H10.7772C10.7772 15.5595 10.8988 14.4886 11.1253 13.8342L10.6247 13.6609ZM19.3754 16.9917C19.3754 19.9104 18.7185 22.133 17.4404 23.6951L17.8504 24.0306C19.2321 22.3418 19.9051 19.9836 19.9051 16.9917H19.3754ZM17.4411 23.6943C16.1706 25.2342 14.3579 26.0159 11.9631 26.0159V26.5457C14.485 26.5457 16.4604 25.7154 17.8497 24.0314L17.4411 23.6943ZM11.9631 26.0159C9.72536 26.0159 7.96982 25.2138 6.66755 23.6149L6.25681 23.9495C7.66806 25.6821 9.57982 26.5457 11.9631 26.5457V26.0159ZM6.66901 23.6168C5.37388 21.9979 4.71205 19.799 4.71205 16.9917H4.1823C4.1823 19.8801 4.86381 22.2083 6.25534 23.9477L6.66901 23.6168ZM4.71205 16.9917C4.71205 14.0719 5.36272 11.8709 6.62564 10.3502L6.21811 10.0118C4.84811 11.6614 4.1823 14.0008 4.1823 16.9917H4.71205ZM6.62634 10.3494C7.88469 8.82138 9.65143 8.04802 11.9631 8.04802V7.51827C9.51942 7.51827 7.59199 8.34348 6.21741 10.0126L6.62634 10.3494ZM11.9631 8.04802C14.2436 8.04802 16.0334 8.84538 17.3617 10.4316L17.7679 10.0915C16.329 8.37321 14.3843 7.51827 11.9631 7.51827V8.04802ZM17.3617 10.4316C18.6943 12.023 19.3754 14.1996 19.3754 16.9917H19.9051C19.9051 14.1149 19.2026 11.8048 17.7679 10.0915L17.3617 10.4316ZM34.098 8.07781L17.7563 37.5371L18.2196 37.794L34.5612 8.33478L34.098 8.07781ZM17.988 37.4007H12.0034V37.9304H17.988V37.4007ZM12.235 37.794L28.5767 8.33478L28.1134 8.07781L11.7718 37.5371L12.235 37.794ZM28.345 8.47117H34.3296V7.94142H28.345V8.47117ZM32.6542 28.7996C32.6542 30.3488 32.7809 31.5045 33.0537 32.2369L33.5502 32.052C33.3126 31.4142 33.184 30.34 33.184 28.7996H32.6542ZM33.0537 32.2369C33.1904 32.6038 33.3698 32.9031 33.6039 33.1126C33.8435 33.327 34.1296 33.437 34.4505 33.437V32.9072C34.2609 32.9072 34.1003 32.8459 33.9571 32.7178C33.8084 32.5847 33.6687 32.3703 33.5502 32.052L33.0537 32.2369ZM34.4505 33.437C34.8057 33.437 35.1168 33.3144 35.3666 33.0688C35.6097 32.8298 35.7801 32.4892 35.8947 32.0739L35.384 31.933C35.2836 32.2967 35.1484 32.5405 34.9952 32.6911C34.8488 32.835 34.6729 32.9072 34.4505 32.9072V33.437ZM35.8939 32.0768C36.132 31.2502 36.2468 30.1542 36.2468 28.7996H35.717C35.717 30.1316 35.6034 31.1715 35.3848 31.9301L35.8939 32.0768ZM36.2468 28.7996C36.2468 27.4452 36.1321 26.3553 35.8935 25.5414L35.3852 25.6904C35.6033 26.4347 35.717 27.4673 35.717 28.7996H36.2468ZM35.895 25.5465C35.7807 25.125 35.6108 24.7795 35.3682 24.5369C35.1187 24.2874 34.8071 24.1621 34.4505 24.1621V24.6919C34.6715 24.6919 34.8468 24.7647 34.9936 24.9115C35.1473 25.0652 35.2831 25.3142 35.3837 25.6852L35.895 25.5465ZM34.4505 24.1621C34.1234 24.1621 33.832 24.2735 33.5886 24.4918C33.3507 24.705 33.1696 25.01 33.033 25.3839L33.5306 25.5657C33.6492 25.2411 33.7905 25.0222 33.9422 24.8862C34.0883 24.7552 34.2537 24.6919 34.4505 24.6919V24.1621ZM33.0315 25.3882C32.7744 26.1308 32.6542 27.2764 32.6542 28.7996H33.184C33.184 27.2868 33.3056 26.2159 33.5321 25.5615L33.0315 25.3882ZM41.7822 28.719C41.7822 31.6233 41.119 33.839 39.8279 35.4012L40.2362 35.7387C41.6318 34.0501 42.3119 31.6984 42.3119 28.719H41.7822ZM39.8277 35.4014C38.5569 36.9417 36.7507 37.7231 34.3699 37.7231V38.2528C36.8789 38.2528 38.8473 37.4222 40.2364 35.7385L39.8277 35.4014ZM34.3699 37.7231C32.1321 37.7231 30.3766 36.9209 29.0743 35.3221L28.6636 35.6566C30.0748 37.3893 31.9866 38.2528 34.3699 38.2528V37.7231ZM29.0758 35.3239C27.7805 33.7048 27.1188 31.5125 27.1188 28.719H26.5891C26.5891 31.5943 27.2707 33.9156 28.6621 35.6548L29.0758 35.3239ZM27.1188 28.719C27.1188 25.7992 27.7695 23.5982 29.0324 22.0775L28.6249 21.739C27.2549 23.3886 26.5891 25.7281 26.5891 28.719H27.1188ZM29.0331 22.0767C30.2915 20.5487 32.0582 19.7753 34.3699 19.7753V19.2456C31.9262 19.2456 29.9988 20.0708 28.6242 21.7399L29.0331 22.0767ZM34.3699 19.7753C36.6504 19.7753 38.4402 20.5727 39.7685 22.1589L40.1747 21.8188C38.7357 20.1005 36.791 19.2456 34.3699 19.2456V19.7753ZM39.7685 22.1589C41.1011 23.7503 41.7822 25.9269 41.7822 28.719H42.3119C42.3119 25.8422 41.6093 23.5321 40.1747 21.8188L39.7685 22.1589Z" fill="white"></path></g></svg>
							</div>
							<div class="categoria-item-titulo">
								<span>Ofertas da</span>
								<span>Semana</span>
							</div>
						</a>
					</div>

					<div class="categoria-item">
						<a href="#!">
							<div class="categoria-item-icone">
								<svg width="44" height="54" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0.18 0.13 30.93 38.2"> <path d="M4.07795 37.5419C4.08909 37.5976 4.14483 37.7425 4.28975 37.8651C4.47925 38.0212 4.69105 37.9989 4.73564 37.9989C13.2188 37.2186 21.702 36.4383 30.174 35.6579C30.2632 35.6245 30.4639 35.5242 30.6199 35.2901C30.7203 35.134 30.7537 34.9891 30.776 34.8999C30.0737 24.8004 29.3826 14.7008 28.6803 4.60126C28.6691 4.53438 28.6468 4.36717 28.5242 4.21111C28.3347 3.97701 28.0449 3.95472 28.0003 3.94357C20.1637 2.78424 12.3382 1.62491 4.50155 0.465576C4.41237 0.476724 3.96647 0.510166 3.63205 0.900325C3.39795 1.17901 3.36451 1.51343 3.34222 1.65835C3.33107 1.73638 3.33107 1.859 3.33107 2.0931C3.33107 2.43867 3.33107 2.68391 3.33107 2.71735C3.34222 2.99604 3.34222 3.41964 3.34222 4.27799C3.34222 4.82421 3.34222 5.21437 3.34222 5.27011C3.33107 5.9724 3.53172 14.9238 4.07795 37.5419Z" stroke="white" stroke-width="0.668845" stroke-miterlimit="10"></path> <path d="M4.50156 0.476776C4.41238 0.521366 4.28975 0.610545 4.17828 0.744314C3.96648 0.989557 3.93304 1.26824 3.92189 1.37972C3.92189 7.29899 3.97763 13.3297 4.10025 19.4497C4.21172 25.5027 4.39008 31.4554 4.61303 37.3078C4.62418 37.3636 4.70221 37.6645 4.99204 37.8317C5.18155 37.9432 5.37105 37.9432 5.44909 37.9432" stroke="white" stroke-width="0.557371" stroke-miterlimit="10"></path> <path d="M8.2248 2.40526C8.09103 2.39411 6.86481 2.31608 6.01761 3.29705C5.31532 4.12196 5.39336 5.09178 5.41565 5.25899C5.67204 14.3999 5.91728 23.5296 6.17367 32.6705C6.18482 32.8265 6.32974 34.8442 7.97955 35.736C8.72643 36.1373 9.46216 36.1373 9.84117 36.1039C15.6267 35.5688 21.4122 35.0337 27.2088 34.4986C27.5433 34.4095 27.9334 34.2646 28.2901 33.9636C29.639 32.8711 29.3603 30.8423 29.338 30.6639C28.8364 23.1617 28.3236 15.6595 27.8219 8.15732C27.8219 7.94552 27.7774 6.36259 26.5066 5.40391C25.8711 4.92457 25.2023 4.8131 24.8567 4.77965C19.3165 3.99934 13.7651 3.19672 8.2248 2.40526Z" stroke="white" stroke-width="0.557371" stroke-miterlimit="10"></path> <path d="M7.38873 5.7049C7.60053 11.7468 7.80119 17.7887 8.01299 23.8306C8.04643 23.9644 8.16905 24.3657 8.55921 24.6666C8.86019 24.9007 9.17232 24.9676 9.31723 24.9788C14.8909 24.8004 20.4535 24.6109 26.0272 24.4325C26.0829 24.4325 26.5065 24.388 26.7629 24.0089C26.9747 23.6968 26.9301 23.3735 26.919 23.2955C26.5288 18.1343 26.1387 12.973 25.7485 7.81176C25.7262 7.68914 25.6482 7.37701 25.3584 7.12062C25.1688 6.95341 24.9682 6.87538 24.8567 6.84193C19.3388 6.19538 13.8096 5.54884 8.29167 4.90229C8.23594 4.89114 7.9461 4.8577 7.68971 5.05835C7.39988 5.31474 7.39988 5.66031 7.38873 5.7049Z" stroke="white" stroke-width="0.557371" stroke-miterlimit="10"></path> <path d="M9.8969 11.8917C9.91919 14.1546 9.95263 16.4176 9.97493 18.6916C9.97493 18.7362 10.0084 19.3716 10.51 19.6503C10.733 19.7729 10.9559 19.7729 11.0674 19.7729C14.4004 19.8175 17.7224 19.8733 21.0555 19.9178C21.1112 19.9178 21.5125 19.9067 21.7912 19.5611C22.0364 19.2713 22.0141 18.9369 22.003 18.8588C21.9249 16.8523 21.8469 14.8569 21.7689 12.8504C21.7689 12.8058 21.78 12.4825 21.5236 12.2596C21.3453 12.1035 21.1335 12.0924 21.0555 12.0812C20.5538 12.0478 16.3401 11.7022 10.5323 11.234C10.4766 11.234 10.2871 11.2452 10.1198 11.3901C9.90804 11.6019 9.8969 11.8583 9.8969 11.8917Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path d="M10.131 11.4124C9.26151 9.36124 8.39201 7.32126 7.53366 5.27014" stroke="white" stroke-width="0.557371" stroke-miterlimit="10"></path> <path d="M21.6686 12.4379C22.9059 10.6766 24.1321 8.90417 25.3695 7.14288" stroke="white" stroke-width="0.557371" stroke-miterlimit="10"></path> <path d="M10.3428 19.5388C9.65166 21.1552 8.96052 22.7604 8.26938 24.3768" stroke="white" stroke-width="0.557371" stroke-miterlimit="10"></path> <path d="M21.8023 19.5723C23.4075 21.1106 25.0239 22.6489 26.6291 24.1873" stroke="white" stroke-width="0.557371" stroke-miterlimit="10"></path> <path d="M3.82156 26.8181C2.87404 29.4154 1.92651 32.0128 0.978975 34.6101C0.800617 34.1977 0.633406 33.7963 0.455048 33.3839C1.54749 29.9505 2.63994 26.5171 3.73239 23.0725C3.76583 24.3211 3.78812 25.5696 3.82156 26.8181Z" stroke="white" stroke-width="0.557371" stroke-miterlimit="10"></path> <path d="M1.15733 35.0894C1.16848 35.134 1.19078 35.2232 1.26881 35.3012C1.32454 35.357 1.38028 35.3793 1.41372 35.4016C2.28322 35.3904 3.15272 35.3793 4.03337 35.3681C4.02222 34.7662 4.02222 34.1754 4.01107 33.5734C3.23075 33.5623 2.45043 33.5511 1.67011 33.5288C1.49176 34.0527 1.32454 34.5767 1.15733 35.0894Z" stroke="white" stroke-width="0.557371" stroke-miterlimit="10"></path> <path d="M10.209 11.9921C10.2536 14.2327 10.2982 16.4733 10.3317 18.7139C10.3317 18.7474 10.3317 18.87 10.4208 18.9926C10.5323 19.1487 10.7107 19.1487 10.733 19.1598C14.211 19.249 17.689 19.3493 21.1558 19.4385C21.245 19.4162 21.3453 19.3716 21.4122 19.2713C21.4122 19.2713 21.4568 19.2044 21.4568 19.1152C21.4791 18.8477 21.2338 13.6196 21.1892 12.8058C21.1892 12.7724 21.1669 12.6943 21.1112 12.6275C21.0443 12.5494 20.9663 12.516 20.944 12.5048C17.4437 12.2373 13.9546 11.9586 10.4543 11.6911C10.4208 11.6911 10.3651 11.7134 10.3094 11.7468C10.2313 11.836 10.2202 11.9586 10.209 11.9921Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M10.6884 12.3488C10.6884 12.2373 10.6884 12.1258 10.6884 12.0143C10.8221 12.0143 10.967 12.0143 11.1008 12.0255C11.1008 12.137 11.1008 12.2484 11.1008 12.3599C10.9559 12.3488 10.8221 12.3488 10.6884 12.3488Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M11.87 12.4268C11.87 12.3153 11.87 12.2038 11.8589 12.0812C11.9926 12.0924 12.1264 12.0924 12.2602 12.1035C12.2602 12.215 12.2602 12.3376 12.2602 12.4491C12.1264 12.4491 12.0038 12.4379 11.87 12.4268Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M12.9959 12.1704C12.9959 12.2819 12.9959 12.3822 12.9959 12.4937C13.1185 12.5048 13.2411 12.5159 13.3637 12.5159C13.3637 12.4045 13.3637 12.3041 13.3637 12.1927C13.2411 12.1927 13.1185 12.1815 12.9959 12.1704Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M14.1218 12.5828C14.1218 12.4825 14.1218 12.371 14.1106 12.2707C14.2332 12.2818 14.3447 12.2818 14.4673 12.293C14.4673 12.3933 14.4673 12.5048 14.4673 12.6051C14.3559 12.6051 14.2444 12.594 14.1218 12.5828Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M15.2365 12.3821C15.2365 12.4936 15.2365 12.5939 15.2365 12.7054C15.348 12.7054 15.4706 12.7166 15.5821 12.7166C15.5821 12.6162 15.5821 12.5159 15.5821 12.4156C15.4706 12.3933 15.3591 12.3821 15.2365 12.3821Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M16.2955 12.7723C16.2955 12.672 16.2955 12.5605 16.2955 12.4602C16.407 12.4714 16.5296 12.4714 16.6411 12.4825C16.63 12.5828 16.63 12.6832 16.6188 12.7835C16.5185 12.7835 16.407 12.7835 16.2955 12.7723Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M17.3434 12.8504C17.3545 12.7389 17.3545 12.6274 17.3656 12.516C17.4994 12.5271 17.622 12.5383 17.7558 12.5494C17.7447 12.6609 17.7447 12.7612 17.7335 12.8727C17.5997 12.8727 17.466 12.8615 17.3434 12.8504Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M18.4135 12.6274C18.4135 12.7389 18.4024 12.8504 18.4024 12.9507C18.525 12.9507 18.6365 12.9618 18.7591 12.9618C18.7591 12.8615 18.7591 12.7612 18.7702 12.6609C18.6476 12.6609 18.5361 12.6386 18.4135 12.6274Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M19.4391 13.0398C19.4391 12.9395 19.4391 12.8392 19.4391 12.7277C19.5506 12.7389 19.662 12.75 19.7735 12.7612C19.7735 12.8615 19.7735 12.9618 19.7847 13.0621C19.6732 13.051 19.5617 13.051 19.4391 13.0398Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M20.4646 13.1513C20.4646 13.0399 20.4758 12.9284 20.4758 12.8169C20.5984 12.8169 20.7099 12.8169 20.8325 12.8281C20.8325 12.9395 20.8325 13.051 20.8213 13.1625C20.6987 13.1513 20.5761 13.1513 20.4646 13.1513Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M10.8556 18.4129C10.8556 18.5356 10.8444 18.6582 10.8444 18.7808C10.9671 18.7808 11.0785 18.7919 11.2012 18.7919C11.2012 18.6693 11.2012 18.5578 11.2012 18.4352C11.0897 18.4352 10.9671 18.4241 10.8556 18.4129Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M11.9926 18.8254C11.9926 18.7028 11.9926 18.5801 11.9926 18.4687C12.1264 18.4687 12.2602 18.4687 12.3939 18.4687C12.3939 18.5913 12.3939 18.7028 12.3939 18.8254C12.2602 18.8254 12.1264 18.8254 11.9926 18.8254Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M13.1408 18.8477C13.1408 18.7251 13.152 18.6025 13.152 18.4799C13.2857 18.4799 13.4083 18.4799 13.5421 18.4799C13.5421 18.6025 13.531 18.7251 13.531 18.8477C13.4083 18.8589 13.2746 18.8589 13.1408 18.8477Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M14.3001 18.8588C14.3001 18.7474 14.3001 18.647 14.3113 18.5356C14.4339 18.5356 14.5565 18.5467 14.6792 18.5467C14.6792 18.647 14.6792 18.7585 14.6792 18.8588C14.5565 18.87 14.4228 18.87 14.3001 18.8588Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M15.4149 18.8923C15.4149 18.792 15.4149 18.6805 15.4149 18.5802C15.5375 18.5802 15.6601 18.5802 15.7939 18.5913C15.7939 18.6916 15.7939 18.8031 15.805 18.9034C15.6713 18.8923 15.5487 18.8923 15.4149 18.8923Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M16.5185 18.6359C16.5185 18.7362 16.5185 18.8365 16.5185 18.9257C16.6411 18.9368 16.7749 18.9368 16.8975 18.948C16.8975 18.8477 16.9086 18.7473 16.9086 18.647C16.7749 18.647 16.6522 18.6359 16.5185 18.6359Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M17.6109 18.9926C17.6109 18.8923 17.6109 18.7808 17.6109 18.6805C17.7224 18.6805 17.8339 18.6916 17.9453 18.6916C17.9453 18.792 17.9565 18.9034 17.9565 19.0038C17.8339 18.9926 17.7224 18.9926 17.6109 18.9926Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M18.6476 18.725C18.6476 18.8142 18.6365 18.9034 18.6365 19.0037C18.748 19.0037 18.8706 19.0149 18.9821 19.0149C18.9821 18.9257 18.9932 18.8365 18.9932 18.7473C18.8817 18.7473 18.7703 18.7362 18.6476 18.725Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M19.6843 18.7697C19.6843 18.87 19.6843 18.9592 19.6843 19.0595C19.7958 19.0595 19.9073 19.0595 20.0187 19.0595C20.0187 18.9592 20.0187 18.87 20.0187 18.7697C19.9184 18.7697 19.7958 18.7697 19.6843 18.7697Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M20.7322 18.8143C20.7322 18.9034 20.7322 19.0038 20.7322 19.093C20.8437 19.093 20.9551 19.093 21.0555 19.1041C21.0555 19.0149 21.0666 18.9257 21.0666 18.8254C20.9663 18.8143 20.8437 18.8143 20.7322 18.8143Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M10.8556 17.7218C10.8556 17.8444 10.8444 17.967 10.8444 18.0896C10.9671 18.0896 11.0785 18.1008 11.2012 18.1008C11.2012 17.9782 11.2012 17.8667 11.2012 17.7441C11.0785 17.7441 10.9671 17.7329 10.8556 17.7218Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M11.9926 18.1454C11.9926 18.0228 11.9926 17.9001 11.9926 17.7887C12.1264 17.7887 12.2602 17.7887 12.3939 17.7887C12.3939 17.9113 12.3939 18.0228 12.3939 18.1454C12.2602 18.1454 12.1264 18.1454 11.9926 18.1454Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M13.1408 18.1565C13.1408 18.0339 13.152 17.9113 13.152 17.7887C13.2857 17.7887 13.4083 17.7887 13.5421 17.7887C13.5421 17.9113 13.531 18.0339 13.531 18.1565C13.3972 18.1677 13.2746 18.1677 13.1408 18.1565Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M14.3001 18.1788C14.3001 18.0674 14.3001 17.967 14.3113 17.8556C14.4339 17.8556 14.5565 17.8667 14.6792 17.8667C14.6792 17.967 14.6792 18.0785 14.6792 18.1788C14.5454 18.1788 14.4228 18.1788 14.3001 18.1788Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M15.4149 18.2123C15.4149 18.1119 15.4149 18.0005 15.4149 17.9001C15.5375 17.9001 15.6601 17.9001 15.7939 17.9113C15.7939 18.0116 15.7939 18.1231 15.805 18.2234C15.6713 18.2123 15.5375 18.2123 15.4149 18.2123Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M16.5185 17.9448C16.5185 18.0451 16.5185 18.1454 16.5185 18.2346C16.6411 18.2457 16.7749 18.2457 16.8975 18.2569C16.8975 18.1566 16.9086 18.0562 16.9086 17.9559C16.7749 17.9559 16.6522 17.9559 16.5185 17.9448Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M17.5998 18.3014C17.5998 18.2011 17.5998 18.0896 17.5998 17.9893C17.7112 17.9893 17.8227 18.0005 17.9342 18.0005C17.9342 18.1008 17.9453 18.2123 17.9453 18.3126C17.8339 18.3014 17.7224 18.3014 17.5998 18.3014Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M18.6476 18.0451C18.6476 18.1343 18.6365 18.2234 18.6365 18.3238C18.748 18.3238 18.8706 18.3349 18.9821 18.3349C18.9821 18.2457 18.9932 18.1565 18.9932 18.0674C18.8817 18.0562 18.7703 18.0451 18.6476 18.0451Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M19.6843 18.0785C19.6843 18.1788 19.6843 18.268 19.6843 18.3684C19.7958 18.3684 19.9073 18.3684 20.0187 18.3684C20.0187 18.268 20.0187 18.1788 20.0187 18.0785C19.9073 18.0785 19.7958 18.0785 19.6843 18.0785Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M20.7322 18.123C20.7322 18.2122 20.7322 18.3126 20.7322 18.4017C20.8437 18.4017 20.9551 18.4017 21.0555 18.4129C21.0555 18.3237 21.0666 18.2345 21.0666 18.1342C20.9551 18.1342 20.8437 18.123 20.7322 18.123Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M10.8556 16.9415C10.8556 17.0641 10.8444 17.1867 10.8444 17.3093C10.9671 17.3205 11.0785 17.3205 11.2012 17.3316C11.2012 17.209 11.2012 17.0975 11.2123 16.9749C11.0897 16.9638 10.9782 16.9526 10.8556 16.9415Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M11.9926 17.3762C11.9926 17.2536 11.9926 17.131 12.0038 17.0195C12.1375 17.0195 12.2713 17.0306 12.4051 17.0306C12.4051 17.1533 12.3939 17.2647 12.3939 17.3874C12.2602 17.3762 12.1264 17.3762 11.9926 17.3762Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M13.1408 17.4096C13.1408 17.287 13.152 17.1644 13.152 17.0418C13.2857 17.0418 13.4083 17.0529 13.5421 17.0529C13.5421 17.1755 13.531 17.2982 13.531 17.4208C13.3972 17.4208 13.2746 17.4208 13.1408 17.4096Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M14.3001 17.4431C14.3001 17.3316 14.3113 17.2313 14.3113 17.1198C14.4339 17.131 14.5565 17.131 14.6792 17.1421C14.6792 17.2424 14.6792 17.3539 14.668 17.4542C14.5454 17.4542 14.4228 17.4431 14.3001 17.4431Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M15.4149 17.4988C15.4149 17.3985 15.4149 17.287 15.426 17.1867C15.5487 17.1867 15.6713 17.1979 15.805 17.1979C15.805 17.2982 15.805 17.4097 15.805 17.51C15.6713 17.4988 15.5375 17.4988 15.4149 17.4988Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M16.5185 17.2536C16.5185 17.354 16.5073 17.4431 16.5073 17.5435C16.6299 17.5546 16.7637 17.5658 16.8863 17.5769C16.8863 17.4766 16.8975 17.3763 16.8975 17.2759C16.7748 17.2648 16.6522 17.2536 16.5185 17.2536Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M17.5998 17.6215C17.5998 17.5211 17.5998 17.4097 17.5998 17.3093C17.7112 17.3093 17.8227 17.3205 17.9342 17.3205C17.9342 17.4208 17.9342 17.5323 17.9453 17.6326C17.8339 17.6326 17.7112 17.6326 17.5998 17.6215Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M18.6476 17.3762C18.6365 17.4654 18.6365 17.5546 18.6253 17.6549C18.7368 17.6661 18.8594 17.6661 18.9709 17.6772C18.9709 17.588 18.982 17.4988 18.982 17.4097C18.8817 17.3985 18.7702 17.3874 18.6476 17.3762Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M19.6843 17.432C19.6843 17.5323 19.6843 17.6215 19.6843 17.7218C19.7958 17.7218 19.9073 17.733 20.0187 17.733C20.0187 17.6326 20.0187 17.5434 20.0187 17.4431C19.9073 17.4431 19.7958 17.432 19.6843 17.432Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M20.7322 17.4988C20.7322 17.588 20.7322 17.6883 20.7322 17.7775C20.8437 17.7775 20.9551 17.7886 21.0555 17.7886C21.0666 17.6995 21.0666 17.6103 21.0777 17.51C20.9551 17.51 20.8437 17.4988 20.7322 17.4988Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M10.7998 16.295C10.7998 16.4176 10.7887 16.5402 10.7887 16.6628C10.9113 16.674 11.0228 16.674 11.1454 16.6851C11.1454 16.5625 11.1454 16.451 11.1566 16.3284C11.0339 16.3172 10.9113 16.3061 10.7998 16.295Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M11.9369 16.7297C11.9369 16.6071 11.9369 16.4844 11.948 16.373C12.0818 16.373 12.2156 16.373 12.3493 16.3841C12.3493 16.5067 12.3382 16.6182 12.3382 16.7408C12.1933 16.7297 12.0706 16.7297 11.9369 16.7297Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M13.0851 16.7631C13.0851 16.6405 13.0962 16.5179 13.0962 16.3952C13.23 16.3952 13.3526 16.4064 13.4864 16.4064C13.4864 16.529 13.4752 16.6516 13.4752 16.7742C13.3415 16.7742 13.2077 16.7742 13.0851 16.7631Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M14.2332 16.7965C14.2332 16.6851 14.2444 16.5847 14.2444 16.4733C14.367 16.4844 14.4896 16.4844 14.6123 16.4956C14.6123 16.5959 14.6123 16.7074 14.6011 16.8077C14.4896 16.8077 14.367 16.8077 14.2332 16.7965Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M15.348 16.8411C15.348 16.7408 15.348 16.6293 15.3591 16.529C15.4818 16.529 15.6044 16.5402 15.7382 16.5402C15.7382 16.6405 15.7382 16.752 15.7382 16.8523C15.6044 16.8523 15.4818 16.8523 15.348 16.8411Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M16.4627 16.6071C16.4627 16.7074 16.4516 16.7966 16.4516 16.8969C16.5742 16.908 16.708 16.9192 16.8306 16.9303C16.8306 16.83 16.8417 16.7297 16.8417 16.6294C16.7191 16.6182 16.5853 16.6071 16.4627 16.6071Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M17.544 16.9749C17.544 16.8746 17.544 16.7631 17.544 16.6628C17.6555 16.6628 17.767 16.6739 17.8785 16.6739C17.8785 16.7743 17.8896 16.8857 17.8896 16.9861C17.767 16.9861 17.6555 16.9749 17.544 16.9749Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M18.5919 16.7297C18.5919 16.8189 18.5807 16.9081 18.5807 17.0084C18.6922 17.0195 18.8148 17.0195 18.9263 17.0307C18.9263 16.9415 18.9374 16.8523 18.9374 16.7631C18.826 16.7409 18.7034 16.7297 18.5919 16.7297Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M19.6286 16.7743C19.6286 16.8746 19.6286 16.9638 19.6286 17.0641C19.7401 17.0641 19.8515 17.0752 19.963 17.0752C19.963 16.9749 19.963 16.8857 19.963 16.7854C19.8515 16.7854 19.7401 16.7854 19.6286 16.7743Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M20.6765 16.8412C20.6765 16.9303 20.6765 17.0307 20.6765 17.1198C20.7879 17.1198 20.8994 17.131 20.9997 17.131C20.9997 17.0418 21.0109 16.9526 21.0109 16.8523C20.8994 16.8523 20.7879 16.8412 20.6765 16.8412Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M10.6661 13.0621C10.6661 12.9507 10.6661 12.8392 10.6661 12.7277C10.7998 12.7277 10.9448 12.7277 11.0785 12.7389C11.0785 12.8503 11.0785 12.9618 11.0785 13.0733C10.9336 13.0733 10.7998 13.0621 10.6661 13.0621Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M11.8477 13.1402C11.8477 13.0287 11.8477 12.9172 11.8365 12.7946C11.9703 12.8058 12.1041 12.8058 12.2378 12.8169C12.2378 12.9284 12.2378 13.051 12.2378 13.1625C12.1041 13.1625 11.9814 13.1513 11.8477 13.1402Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M12.9736 12.895C12.9736 13.0064 12.9736 13.1068 12.9736 13.2182C13.0962 13.2294 13.2188 13.2405 13.3415 13.2405C13.3415 13.1291 13.3415 13.0287 13.3415 12.9173C13.2188 12.9061 13.0962 12.895 12.9736 12.895Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M14.0995 13.2963C14.0995 13.1959 14.0995 13.0845 14.0883 12.9841C14.2109 12.9953 14.3224 12.9953 14.445 13.0064C14.445 13.1068 14.445 13.2182 14.445 13.3186C14.3336 13.3186 14.2221 13.3074 14.0995 13.2963Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M15.2142 13.0956C15.2142 13.2071 15.2142 13.3074 15.2142 13.4189C15.3257 13.4189 15.4483 13.43 15.5598 13.43C15.5598 13.3297 15.5598 13.2294 15.5598 13.1291C15.4483 13.1068 15.3368 13.0956 15.2142 13.0956Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M16.2844 13.4857C16.2844 13.3854 16.2844 13.2739 16.2844 13.1736C16.3958 13.1848 16.5185 13.1848 16.6299 13.1959C16.6188 13.2962 16.6188 13.3966 16.6076 13.4969C16.4962 13.4969 16.3847 13.4969 16.2844 13.4857Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M17.3211 13.5638C17.3322 13.4523 17.3322 13.3408 17.3434 13.2294C17.4772 13.2405 17.5998 13.2517 17.7335 13.2628C17.7224 13.3743 17.7224 13.4746 17.7113 13.5861C17.5775 13.5861 17.4549 13.5749 17.3211 13.5638Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M18.4024 13.3409C18.4024 13.4523 18.3912 13.5638 18.3912 13.6641C18.5138 13.6641 18.6253 13.6753 18.7479 13.6753C18.7479 13.5749 18.7479 13.4746 18.7591 13.3743C18.6253 13.3743 18.5138 13.352 18.4024 13.3409Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M19.4168 13.7533C19.4168 13.653 19.4168 13.5526 19.4168 13.4412C19.5283 13.4523 19.6397 13.4635 19.7512 13.4746C19.7512 13.5749 19.7512 13.6753 19.7623 13.7756C19.6509 13.7756 19.5394 13.7644 19.4168 13.7533Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M20.4424 13.8648C20.4424 13.7533 20.4535 13.6419 20.4535 13.5304C20.5761 13.5304 20.6876 13.5304 20.8102 13.5415C20.8102 13.653 20.8102 13.7645 20.7991 13.876C20.6764 13.8648 20.565 13.8648 20.4424 13.8648Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M10.7218 13.7199C10.7218 13.6084 10.7218 13.4969 10.7218 13.3855C10.8556 13.3855 11.0005 13.3855 11.1343 13.3966C11.1343 13.5081 11.1343 13.6196 11.1343 13.731C11.0005 13.7199 10.8667 13.7199 10.7218 13.7199Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M11.9034 13.7979C11.9034 13.6864 11.9035 13.575 11.8923 13.4523C12.0261 13.4635 12.1598 13.4635 12.2936 13.4746C12.2936 13.5861 12.2936 13.7087 12.2936 13.8202C12.171 13.8202 12.0372 13.809 11.9034 13.7979Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M13.0405 13.5415C13.0405 13.653 13.0405 13.7533 13.0405 13.8648C13.1631 13.876 13.2857 13.8871 13.4083 13.8871C13.4083 13.7756 13.4083 13.6753 13.4083 13.5638C13.2857 13.5638 13.1631 13.5527 13.0405 13.5415Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M14.1664 13.954C14.1664 13.8536 14.1664 13.7422 14.1552 13.6418C14.2778 13.653 14.3893 13.653 14.5119 13.6641C14.5119 13.7645 14.5119 13.8759 14.5119 13.9763C14.4005 13.9651 14.2778 13.9651 14.1664 13.954Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M15.2811 13.7422C15.2811 13.8537 15.2811 13.954 15.2811 14.0655C15.3926 14.0655 15.5152 14.0766 15.6267 14.0766C15.6267 13.9763 15.6267 13.876 15.6267 13.7756C15.5152 13.7645 15.3926 13.7533 15.2811 13.7422Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M16.3401 14.1435C16.3401 14.0432 16.3401 13.9317 16.3401 13.8314C16.4516 13.8425 16.5742 13.8425 16.6857 13.8537C16.6745 13.954 16.6745 14.0543 16.6634 14.1546C16.5631 14.1546 16.4516 14.1546 16.3401 14.1435Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M17.388 14.2215C17.3991 14.1101 17.3991 13.9986 17.4103 13.8871C17.544 13.8983 17.6666 13.9094 17.8004 13.9206C17.7893 14.032 17.7893 14.1324 17.7781 14.2438C17.6443 14.2438 17.5106 14.2327 17.388 14.2215Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M18.4581 13.9986C18.4581 14.11 18.447 14.2215 18.447 14.3218C18.5696 14.3218 18.6811 14.333 18.8037 14.333C18.8037 14.2327 18.8037 14.1323 18.8148 14.032C18.6922 14.0209 18.5696 14.0097 18.4581 13.9986Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M19.4837 14.411C19.4837 14.3107 19.4837 14.2104 19.4837 14.0989C19.5952 14.11 19.7066 14.1212 19.8181 14.1323C19.8181 14.2326 19.8181 14.333 19.8293 14.4333C19.7178 14.4222 19.5952 14.4222 19.4837 14.411Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M20.4981 14.5225C20.4981 14.411 20.5092 14.2996 20.5092 14.1881C20.6319 14.1881 20.7433 14.1881 20.866 14.1992C20.866 14.3107 20.866 14.4222 20.8548 14.5337C20.7433 14.5225 20.6207 14.5225 20.4981 14.5225Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M10.7776 14.4333C10.7776 14.3218 10.7776 14.2104 10.7776 14.0989C10.9113 14.0989 11.0562 14.0989 11.19 14.11C11.19 14.2215 11.19 14.333 11.19 14.4444C11.0451 14.4333 10.9113 14.4333 10.7776 14.4333Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M11.9592 14.5113C11.9592 14.3999 11.9592 14.2884 11.948 14.1658C12.0818 14.1769 12.2156 14.1769 12.3493 14.1881C12.3493 14.2995 12.3493 14.4222 12.3493 14.5336C12.2156 14.5225 12.0818 14.5225 11.9592 14.5113Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M13.0851 14.2549C13.0851 14.3664 13.0851 14.4667 13.0851 14.5782C13.2077 14.5894 13.3303 14.6005 13.4529 14.6005C13.4529 14.489 13.4529 14.3887 13.4529 14.2772C13.3303 14.2772 13.2077 14.2661 13.0851 14.2549Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M14.211 14.6674C14.211 14.5671 14.211 14.4556 14.1998 14.3553C14.3224 14.3664 14.4339 14.3664 14.5565 14.3775C14.5565 14.4779 14.5565 14.5894 14.5565 14.6897C14.4451 14.6785 14.3224 14.6785 14.211 14.6674Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M15.3257 14.4556C15.3257 14.5671 15.3257 14.6674 15.3257 14.7789C15.4372 14.7789 15.5598 14.79 15.6713 14.79C15.6713 14.6897 15.6713 14.5894 15.6713 14.4891C15.5598 14.4779 15.4483 14.4668 15.3257 14.4556Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M16.3847 14.8569C16.3847 14.7566 16.3847 14.6451 16.3847 14.5448C16.4962 14.5559 16.6188 14.5559 16.7303 14.5671C16.7191 14.6674 16.7191 14.7677 16.708 14.868C16.6076 14.868 16.4962 14.8569 16.3847 14.8569Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M17.4326 14.9349C17.4437 14.8234 17.4437 14.712 17.4549 14.6005C17.5886 14.6116 17.7112 14.6228 17.845 14.6339C17.8339 14.7454 17.8339 14.8457 17.8227 14.9572C17.6889 14.9572 17.5552 14.9461 17.4326 14.9349Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M18.5027 14.7008C18.5027 14.8123 18.4915 14.9238 18.4915 15.0241C18.6142 15.0241 18.7256 15.0353 18.8483 15.0353C18.8483 14.9349 18.8483 14.8346 18.8594 14.7343C18.7368 14.7343 18.6253 14.7231 18.5027 14.7008Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M19.5283 15.1244C19.5283 15.0241 19.5283 14.9238 19.5283 14.8123C19.6397 14.8235 19.7512 14.8346 19.8627 14.8458C19.8627 14.9461 19.8627 15.0464 19.8738 15.1467C19.7624 15.1356 19.6509 15.1356 19.5283 15.1244Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M20.5538 15.2359C20.5538 15.1244 20.565 15.013 20.565 14.9015C20.6876 14.9015 20.7991 14.9015 20.9217 14.9126C20.9217 15.0241 20.9217 15.1356 20.9105 15.2471C20.7879 15.2359 20.6653 15.2359 20.5538 15.2359Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M10.7664 15.2025C10.7664 15.091 10.7664 14.9795 10.7664 14.8681C10.9002 14.8681 11.0451 14.8681 11.1789 14.8681C11.1789 14.9795 11.1789 15.091 11.1789 15.2025C11.0451 15.1913 10.9113 15.2025 10.7664 15.2025Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M11.948 15.2582C11.948 15.1468 11.9369 15.0353 11.9369 14.9127C12.0706 14.9127 12.2044 14.9238 12.3382 14.9238C12.3382 15.0353 12.3493 15.1579 12.3493 15.2694C12.2156 15.2694 12.0818 15.2582 11.948 15.2582Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M13.0851 14.9795C13.0851 15.091 13.0851 15.1913 13.0962 15.3028C13.2188 15.3139 13.3415 15.3139 13.4641 15.3251C13.4641 15.2136 13.4641 15.1133 13.4529 15.0018C13.3303 14.9907 13.2077 14.9907 13.0851 14.9795Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M14.211 15.3697C14.211 15.2694 14.1998 15.1579 14.1998 15.0576C14.3224 15.0576 14.4339 15.0687 14.5565 15.0687C14.5565 15.1691 14.5565 15.2805 14.5677 15.3809C14.4451 15.3809 14.3224 15.3697 14.211 15.3697Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M15.3257 15.1356C15.3257 15.2471 15.3368 15.3474 15.3368 15.4589C15.4483 15.4589 15.5709 15.4589 15.6824 15.4589C15.6824 15.3586 15.6824 15.2582 15.6824 15.1579C15.5598 15.1468 15.4372 15.1468 15.3257 15.1356Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M16.3959 15.5146C16.3959 15.4143 16.3959 15.3028 16.3959 15.2025C16.5073 15.2025 16.63 15.2136 16.7414 15.2136C16.7414 15.3139 16.7303 15.4143 16.7303 15.5146C16.6077 15.5257 16.5073 15.5257 16.3959 15.5146Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M17.4326 15.5815C17.4326 15.47 17.4437 15.3585 17.4437 15.2471C17.5775 15.2582 17.7001 15.2694 17.8339 15.2694C17.8227 15.3808 17.8227 15.4812 17.8116 15.5926C17.6889 15.5926 17.5663 15.5815 17.4326 15.5815Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M18.5027 15.3251C18.5027 15.4366 18.4915 15.5481 18.4915 15.6484C18.6142 15.6484 18.7256 15.6595 18.8483 15.6595C18.8483 15.5592 18.8483 15.4589 18.8483 15.3585C18.7368 15.3585 18.6253 15.3363 18.5027 15.3251Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M19.5394 15.7264C19.5394 15.6261 19.5394 15.5258 19.5394 15.4143C19.6509 15.4254 19.7623 15.4366 19.8738 15.4366C19.8738 15.5369 19.885 15.6372 19.885 15.7376C19.7735 15.7376 19.6509 15.7264 19.5394 15.7264Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M20.5538 15.8156C20.5538 15.7041 20.5538 15.5927 20.565 15.4812C20.6876 15.4812 20.7991 15.4812 20.9217 15.4812C20.9217 15.5927 20.9217 15.7041 20.9217 15.8156C20.7991 15.8156 20.6764 15.8156 20.5538 15.8156Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M10.7664 15.9271C10.7664 15.8156 10.7664 15.7041 10.7664 15.5927C10.9002 15.5927 11.0451 15.5927 11.1789 15.5927C11.1789 15.7041 11.1789 15.8156 11.19 15.9271C11.0451 15.9271 10.9113 15.9271 10.7664 15.9271Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M11.948 15.9716C11.9369 15.8602 11.9369 15.7487 11.9257 15.6261C12.0595 15.6261 12.1933 15.6372 12.327 15.6372C12.327 15.7487 12.3382 15.8713 12.3382 15.9828C12.2156 15.9828 12.0818 15.9828 11.948 15.9716Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M13.0739 15.693C13.0739 15.8045 13.0851 15.9048 13.0851 16.0163C13.2077 16.0163 13.3303 16.0274 13.4529 16.0274C13.4529 15.9159 13.4418 15.8156 13.4418 15.7041C13.3192 15.7041 13.1966 15.693 13.0739 15.693Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M14.211 16.0608C14.211 15.9605 14.1998 15.849 14.1998 15.7487C14.3224 15.7487 14.4339 15.7598 14.5565 15.7598C14.5565 15.8602 14.5677 15.9716 14.5677 16.072C14.4451 16.072 14.3336 16.072 14.211 16.0608Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M15.3257 15.8267C15.3257 15.9382 15.3368 16.0385 15.3368 16.15C15.4483 16.15 15.5709 16.15 15.6824 16.15C15.6824 16.0497 15.6824 15.9493 15.6824 15.849C15.5598 15.8379 15.4372 15.8267 15.3257 15.8267Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M16.3959 16.1946C16.3959 16.0943 16.3959 15.9828 16.3959 15.8825C16.5073 15.8825 16.63 15.8936 16.7414 15.8936C16.7414 15.994 16.7303 16.0943 16.7303 16.1946C16.6188 16.1946 16.5073 16.1946 16.3959 16.1946Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M17.4437 16.2392C17.4437 16.1277 17.4548 16.0163 17.4548 15.9048C17.5886 15.9159 17.7112 15.9159 17.845 15.9271C17.845 16.0386 17.8339 16.1389 17.8339 16.2504C17.7001 16.2504 17.5663 16.2504 17.4437 16.2392Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M18.5027 15.9828C18.5027 16.0943 18.5027 16.2057 18.4915 16.3061C18.6142 16.3061 18.7256 16.3061 18.8483 16.3172C18.8483 16.2169 18.8483 16.1166 18.8483 16.0162C18.7368 16.0051 18.6253 15.9939 18.5027 15.9828Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M19.5394 16.3729C19.5394 16.2726 19.5394 16.1723 19.5394 16.0608C19.6509 16.072 19.7623 16.072 19.8738 16.0831C19.8738 16.1834 19.885 16.2838 19.885 16.3841C19.7735 16.3729 19.662 16.3729 19.5394 16.3729Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> <path opacity="0.88" d="M20.565 16.451C20.565 16.3395 20.565 16.2281 20.565 16.1166C20.6876 16.1166 20.7991 16.1166 20.9217 16.1166C20.9217 16.2281 20.9217 16.3395 20.9217 16.451C20.7991 16.4399 20.6876 16.451 20.565 16.451Z" stroke="white" stroke-width="0.222948" stroke-miterlimit="10"></path> </svg>
							</div>
							<div class="categoria-item-titulo">
								<span>Refletores</span>
								<span>LED</span>
							</div>
						</a>
					</div>

					<div class="categoria-item">
						<a href="#!">
							<div class="categoria-item-icone">
								<svg width="35" height="64" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0.67 0.67 23.17 43.34"> <path d="M7.26466 33.0408C7.01589 32.9491 6.66237 32.8051 6.29576 32.504C6.03389 32.2945 5.85059 32.085 5.71965 31.9017C5.57563 30.0424 5.26139 27.7773 4.56744 25.2765C3.91278 22.9328 3.10099 20.9426 2.32849 19.3321C2.14518 18.9262 1.94879 18.3894 1.81785 17.7478C1.71311 17.211 1.68692 16.7265 1.68692 16.3337C8.73111 16.3468 15.7753 16.3468 22.8326 16.3599C22.8719 16.6742 22.8981 17.0932 22.8326 17.5907C22.7278 18.3108 22.466 18.8477 22.2827 19.1881C21.4709 20.6807 20.5805 22.6578 19.9128 25.067C19.1665 27.7642 18.9439 30.1472 18.9046 31.9671C18.7344 32.1635 18.4856 32.4123 18.1583 32.648C17.8833 32.8444 17.6215 32.9884 17.3989 33.0801C14.0077 33.0539 10.6296 33.0539 7.26466 33.0408Z" stroke="white" stroke-width="0.654665" stroke-miterlimit="10"></path> <path d="M1.7262 17.2634C8.77039 17.2634 15.8015 17.2765 22.8457 17.2765" stroke="white" stroke-width="0.654665" stroke-miterlimit="10"></path> <path d="M7.26465 33.0408C7.29084 33.9442 7.31702 34.8608 7.34321 35.7642C7.59198 35.9344 7.69673 36.2225 7.63126 36.4843C7.5658 36.7069 7.39558 36.8248 7.34321 36.851C7.33012 36.851 7.23846 36.9295 7.23846 37.0474C7.23846 37.1783 7.33012 37.2437 7.34321 37.2437C7.53961 37.3878 7.64436 37.6104 7.61817 37.846C7.59198 38.0817 7.43486 38.2127 7.39558 38.2519C7.31702 38.3043 7.27774 38.396 7.29084 38.4745C7.30393 38.5662 7.3694 38.6447 7.44796 38.684C7.47414 38.6971 7.63126 38.8149 7.65745 39.0244C7.68364 39.2077 7.60508 39.378 7.44796 39.4958C7.42177 39.5089 7.33012 39.5874 7.31702 39.7315C7.29084 39.9148 7.42177 40.0457 7.43486 40.0588C7.7491 40.4909 8.07644 40.923 8.39067 41.355C8.48233 41.4467 8.61326 41.5776 8.79657 41.6955C8.95368 41.7871 9.11081 41.8526 9.21555 41.8788C9.62144 42.4156 10.0142 42.9393 10.4201 43.4762C10.8653 43.5809 11.4021 43.6595 12.0175 43.6857C12.8424 43.7118 13.5494 43.6071 14.0863 43.4893C14.4136 42.9917 14.754 42.4942 15.0813 41.9835C15.2647 41.9442 15.5658 41.8657 15.8931 41.6431C16.1812 41.4336 16.3645 41.1979 16.4561 41.0408C16.5085 40.9622 16.574 40.8837 16.6525 40.792C16.7966 40.6349 16.9537 40.5302 17.0715 40.4647C17.1239 40.4254 17.1894 40.3469 17.1763 40.2683C17.1632 40.1897 17.0977 40.1766 17.0192 40.0719C16.9275 39.941 16.9013 39.7577 16.9406 39.6267C16.9537 39.5613 16.993 39.4958 17.0846 39.378C17.2286 39.1685 17.2941 39.1554 17.2941 39.0637C17.2941 38.9721 17.2025 38.959 17.0846 38.8019C17.0453 38.7364 16.9406 38.5793 16.9537 38.396C16.9668 38.2257 17.0715 38.121 17.137 38.0686C17.2156 37.977 17.3072 37.8591 17.281 37.7282C17.2679 37.6235 17.1763 37.5973 17.0846 37.4401C17.0322 37.3616 16.9537 37.2045 16.9668 37.0212C16.993 36.851 17.0846 36.7331 17.1501 36.6807C17.2548 36.5891 17.3596 36.4451 17.3334 36.3141C17.3203 36.2356 17.2548 36.2094 17.1763 36.1177C17.0715 35.9868 16.993 35.8297 16.9799 35.7118C16.9406 35.3976 17.3072 35.1357 17.3465 35.1095C17.3596 34.4287 17.3596 33.7478 17.3727 33.067" stroke="white" stroke-width="0.654665" stroke-miterlimit="10"></path> <path d="M7.3956 35.8427C10.6296 35.6463 13.8637 35.463 17.0977 35.2666" stroke="white" stroke-width="0.701748" stroke-miterlimit="10"></path> <path d="M7.5658 36.5629C10.7606 36.3665 13.9684 36.1832 17.1632 35.9868" stroke="white" stroke-width="0.701748" stroke-miterlimit="10"></path> <path d="M7.63127 37.2699C10.7868 37.1128 13.9422 36.9557 17.0977 36.8116" stroke="white" stroke-width="0.701748" stroke-miterlimit="10"></path> <path d="M7.63127 37.99C10.7737 37.8067 13.9161 37.6365 17.0715 37.4532" stroke="white" stroke-width="0.701748" stroke-miterlimit="10"></path> <path d="M7.64436 38.697C10.7868 38.5137 13.9291 38.3304 17.0846 38.134" stroke="white" stroke-width="0.701748" stroke-miterlimit="10"></path> <path d="M7.73602 39.4303C10.8653 39.2601 13.9946 39.0899 17.1239 38.9328" stroke="white" stroke-width="0.701748" stroke-miterlimit="10"></path> <path d="M7.80148 40.1897C10.8653 40.0326 13.9422 39.8755 17.0061 39.7314" stroke="white" stroke-width="0.701748" stroke-miterlimit="10"></path> <path d="M8.19429 40.9491C10.9963 40.9491 13.7982 40.9622 16.6133 40.9622" stroke="white" stroke-width="0.701748" stroke-miterlimit="10"></path> <path d="M1.67383 16.3337C1.42506 15.6529 -0.0806721 11.175 2.43324 6.73636C4.47579 3.1357 8.48234 0.792002 12.8424 1.01459C17.0715 1.23717 20.6984 3.84274 22.4267 7.41721C24.4431 11.6071 23.1075 15.5743 22.8195 16.3599C15.7622 16.3599 8.71802 16.3468 1.67383 16.3337Z" stroke="white" stroke-width="0.654665" stroke-miterlimit="10"></path> <path opacity="0.15" d="M2.01425 12.0522C2.10591 10.9131 2.49871 8.12422 4.63291 5.61031C5.2352 4.90327 7.43488 2.37626 10.9832 1.94418C13.0781 1.69541 15.4349 2.19296 15.4873 2.80834C15.5527 3.56775 12.1485 3.46301 8.86204 5.79361C4.48889 8.90981 3.42833 14.1733 2.45943 13.8591C2.23684 13.8067 2.00116 13.4663 2.01425 12.0522Z" stroke="white" stroke-width="0.654665" stroke-miterlimit="10"></path> </svg>
							</div>
							<div class="categoria-item-titulo">
								<span>Lâmpadas</span>
								<span>LED</span>
							</div>
						</a>
					</div>

					<div class="categoria-item">
						<a href="#!">
							<div class="categoria-item-icone">
								<svg style="margin: -25px 0 0 0;" width="54" height="72" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="12.59 -2.53 37.8 50.95"> <g> <path d="M13 41.5577C13.3154 41.7735 13.7802 42.0557 14.3944 42.3213C14.3944 42.3213 15.1413 42.6533 15.9713 42.8359C20.9678 43.9646 31.1101 43.8816 31.1101 43.8816C33.2016 43.865 34.264 43.8484 35.5588 43.8152C38.9617 43.699 41.85 43.45 44.0577 43.2176C45.1367 43.1346 46.4979 42.9189 47.9918 42.3877C48.7388 42.1221 49.4028 41.8067 49.9672 41.5079C49.9506 41.0763 49.934 40.6281 49.9174 40.1965C43.2277 35.9802 38.3309 32.8429 37.9989 32.5275C37.7997 32.3284 37.6835 32.1126 37.6835 32.1126C37.5507 31.8636 37.5175 31.6146 37.5175 31.432C37.4677 31.432 37.4179 31.432 37.3847 31.432C37.3847 30.7182 37.3847 30.0044 37.3847 29.2906C37.2021 29.1578 37.0029 29.025 36.8203 28.9088C36.8037 28.2781 36.8037 27.6473 36.7871 27.0165C36.5713 26.9501 36.2891 26.8837 35.9571 26.8671C35.841 26.8671 35.7248 26.8671 35.6252 26.8671C35.6086 26.0039 35.5754 25.1242 35.5588 24.261C35.4426 24.1946 35.2932 24.1116 35.1106 24.0452C34.8948 23.9788 34.7122 23.9622 34.5794 23.9456C34.596 23.8128 34.596 23.7132 34.6126 23.6302C34.6292 23.431 34.6126 23.3646 34.5794 23.2982C34.5462 23.2484 34.513 23.1986 34.4964 23.182C34.4632 21.0407 34.4134 18.8827 34.3802 16.7414C34.3802 16.6916 34.347 16.2932 33.9984 16.0774C33.7494 15.9114 33.4838 15.928 33.4008 15.9446C32.0397 15.9612 30.6785 15.9612 29.3173 15.9778C29.2343 15.9944 28.9355 16.0276 28.6866 16.2766C28.4708 16.4924 28.4376 16.7414 28.421 16.841C28.421 18.9823 28.4044 21.1403 28.4044 23.2816C28.3712 23.2982 28.338 23.3148 28.3048 23.348C28.1886 23.4642 28.2384 23.6468 28.2384 23.6634C28.255 23.7796 28.2716 23.8958 28.2882 24.012C28.172 24.012 28.0392 24.0286 27.8732 24.0784C27.6408 24.1282 27.4582 24.2278 27.3088 24.2942C27.2756 25.1408 27.259 26.0039 27.2258 26.8505C27.093 26.8505 26.9436 26.8505 26.7776 26.8671C26.4456 26.9003 26.1634 26.9667 25.9144 27.0497C25.931 27.6639 25.931 28.2615 25.9476 28.8756C25.7484 29.0084 25.5326 29.1246 25.3334 29.2574C25.35 29.9878 25.3666 30.7182 25.3832 31.432C25.3168 31.4154 25.2504 31.3988 25.1841 31.3988C25.2007 31.5482 25.2007 31.8968 24.9683 32.2288C24.8853 32.3449 24.8023 32.4445 24.7193 32.4943C21.0674 34.7851 17.4321 37.0592 13.7802 39.35C13.664 39.3998 13.3984 39.5326 13.1992 39.8313C13.0996 39.9973 13.0498 40.1633 13.0332 40.2629C13 40.7111 13 41.1427 13 41.5577Z" stroke="white" stroke-width="0.829977" stroke-miterlimit="10"></path> <path d="M27.2922 26.9667C28.3546 27.0995 29.5165 27.1825 30.7615 27.2157C32.5874 27.2655 34.2308 27.1659 35.6916 26.9999" stroke="white" stroke-width="0.829977" stroke-miterlimit="10"></path> <path d="M25.9144 28.8922C27.6906 29.1577 29.7655 29.3403 32.1061 29.2905C33.8324 29.2573 35.3928 29.1079 36.7871 28.9088" stroke="white" stroke-width="0.829977" stroke-miterlimit="10"></path> <path d="M25.3003 29.274C26.927 29.5395 28.836 29.7387 30.9607 29.7553C33.3842 29.7885 35.5422 29.5727 37.3515 29.2906" stroke="white" stroke-width="0.829977" stroke-miterlimit="10"></path> <path d="M25.2338 31.5648C26.595 31.7308 28.0558 31.8636 29.6161 31.9134C32.521 32.013 35.1604 31.8304 37.4511 31.5316" stroke="white" stroke-width="0.829977" stroke-miterlimit="10"></path> <path d="M13 40.2961C13.9628 40.7443 15.4069 41.3419 17.2661 41.7237C18.5774 41.9893 19.59 42.0557 20.171 42.0888C24.7359 42.3544 27.01 42.4706 30.5125 42.5038C31.2429 42.5038 35.5256 42.537 40.6548 42.3046C41.269 42.2714 41.4516 42.2714 41.5678 42.2548C45.3027 42.0059 48.108 41.0265 49.9174 40.2131C49.934 40.6447 49.9506 41.0929 49.9672 41.5245C48.7886 42.1884 47.7262 42.5536 46.9294 42.7694C45.9999 43.0184 45.2031 43.118 43.6593 43.284C41.9164 43.4832 40.605 43.5662 40.439 43.5662C34.9446 43.8816 31.1101 43.8982 31.1101 43.8982C24.7525 43.9148 25.3334 43.533 19.6398 43.4002C18.9094 43.3836 17.2993 43.3504 15.3571 42.6698C14.328 42.3046 13.5312 41.8731 13 41.5577C13 41.1427 13 40.7111 13 40.2961Z" fill="white"></path> <path d="M31.3259 15.9612C31.2927 9.93554 31.2429 3.90991 31.2097 -2.11572L31.3259 15.9612Z" fill="white"></path> <path d="M31.3259 15.9612C31.2927 9.93554 31.2429 3.90991 31.2097 -2.11572" stroke="white" stroke-width="0.829977" stroke-miterlimit="10"></path> <path d="M26.678 43.6658C27.093 46.2055 29.3339 48.0646 31.8737 47.9982C34.3636 47.9318 36.4717 46.0561 36.8369 43.5662C33.4506 43.5994 30.0643 43.6326 26.678 43.6658Z" stroke="white" stroke-width="0.829977" stroke-miterlimit="10"></path> <path d="M25.8812 27.0662C27.591 27.3982 29.7489 27.6472 32.2389 27.5642C33.9486 27.4978 35.4592 27.282 36.7539 27.033" stroke="white" stroke-width="0.829977" stroke-miterlimit="10"></path> <path d="M28.3214 24.1447C29.3339 24.1945 30.3797 24.2111 31.4919 24.2111C32.5211 24.2111 33.5004 24.1613 34.4466 24.1115" stroke="white" stroke-width="0.829977" stroke-miterlimit="10"></path> <path d="M28.2384 23.3645C29.2177 23.4309 30.2801 23.4807 31.4089 23.4641C32.4547 23.4475 33.434 23.3977 34.347 23.3147" stroke="white" stroke-width="0.829977" stroke-miterlimit="10"></path> <path d="M24.9517 32.4279C26.7942 32.7599 29.0186 33.0089 31.5749 32.9923C33.932 32.9757 36.0236 32.7433 37.7665 32.4279" stroke="white" stroke-width="0.829977" stroke-miterlimit="10"></path> <path d="M30.9441 15.762C30.9275 15.7122 30.9275 15.679 30.9275 15.6458C30.9275 15.347 31.3093 15.1478 31.3425 15.1312C31.3923 15.1478 31.6911 15.3138 31.7077 15.596C31.7077 15.6292 31.7077 15.679 31.6911 15.7288C31.4421 15.7454 31.1931 15.762 30.9441 15.762Z" fill="white" stroke="white" stroke-width="0.829977" stroke-miterlimit="10"></path> </g>  </svg>
							</div>
							<div class="categoria-item-titulo">
								<span>Pendentes</span>
								<span>LED</span>
							</div>
						</a>
					</div>

					<div class="categoria-item">
						<a href="#!">
							<div class="categoria-item-icone">
								<svg style="margin: 2px 0 0 0;" width="57" height="50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="7.23 11.67 40.38 34.36"> <g> <path d="M7.5632 16.9792C7.6752 16.8784 7.7872 16.7664 7.888 16.6656C15.0336 15.1088 22.1792 13.552 29.336 12.0064C35.2832 19.824 41.2304 27.6528 47.1888 35.4704C47.2 35.4816 47.3232 35.6384 47.256 35.8176C47.2112 35.9408 47.1104 35.9968 47.088 36.008C40.648 39.2336 34.1968 42.4704 27.7568 45.696C21.0256 36.12 14.2944 26.544 7.5632 16.9792Z" stroke="white" stroke-width="0.672" stroke-miterlimit="10"></path> <path d="M27.9248 45.4608C21.2496 35.8624 14.5744 26.264 7.888 16.6656" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M27.9248 45.4608C34.3088 42.3136 40.6928 39.1552 47.0768 36.008" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M35.2316 34.4846C38.3185 31.8894 37.8103 26.2046 34.0966 21.7874C30.3828 17.3702 24.8698 15.8931 21.783 18.4884C18.6961 21.0836 19.2043 26.7684 22.918 31.1856C26.6318 35.6028 32.1448 37.0799 35.2316 34.4846Z" stroke="white" stroke-width="0.672" stroke-miterlimit="10"></path> <path d="M33.9749 33.7832C36.6286 31.7956 36.3329 26.9173 33.3144 22.8872C30.2958 18.8571 25.6976 17.2014 23.0439 19.189C20.3902 21.1767 20.6859 26.055 23.7044 30.0851C26.723 34.1151 31.3212 35.7708 33.9749 33.7832Z" stroke="white" stroke-width="0.336" stroke-miterlimit="10"></path> <path d="M28.4766 30.1991C28.9971 29.6786 28.8092 28.6468 28.0569 27.8945C27.3046 27.1422 26.2728 26.9543 25.7523 27.4748C25.2318 27.9953 25.4197 29.0271 26.172 29.7794C26.9243 30.5317 27.9561 30.7196 28.4766 30.1991Z" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M16.3664 30.2176C16.2096 30.2512 16.0528 30.296 15.8848 30.3296C16.1872 30.4304 16.4784 30.5312 16.7808 30.632C16.4224 30.912 16.0752 31.192 15.7168 31.472C16.1536 31.4608 16.5904 31.4496 17.0272 31.4272C16.6464 31.8192 16.2656 32.2224 15.8848 32.6144C16.4896 32.5696 17.0944 32.5136 17.6992 32.4688C17.1952 33.0288 16.68 33.6 16.176 34.16C16.9264 34.0032 17.6656 33.8576 18.416 33.7008C17.912 34.2832 17.408 34.8544 16.904 35.4368C17.6992 35.1008 18.5056 34.7648 19.3008 34.4288C18.8192 35.1232 18.3376 35.8176 17.856 36.5008C18.6288 36.0416 19.4016 35.5936 20.1744 35.1344C19.9056 35.8064 19.6256 36.4672 19.3568 37.1392C19.816 36.8368 20.2752 36.5344 20.7232 36.232C20.6 36.8704 20.4768 37.52 20.3536 38.1584C20.7344 37.8336 21.1152 37.4976 21.496 37.1728C21.5632 37.8112 21.6304 38.4608 21.6864 39.0992C21.8992 38.9312 22.1008 38.7632 22.3136 38.5952C20.3312 35.8064 18.3488 33.0176 16.3664 30.2176Z" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M33.0376 32.8083C35.3497 31.0765 35.0897 26.823 32.4568 23.3079C29.8239 19.7927 25.8152 18.3469 23.5032 20.0787C21.1911 21.8105 21.4511 26.0639 24.084 29.5791C26.7168 33.0943 30.7255 34.54 33.0376 32.8083Z" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M26.5248 27.1824C25.808 24.6512 25.1024 22.1312 24.3856 19.6" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M27.0848 27.2832C27.1072 25.9616 27.1072 24.6176 27.0848 23.2288C27.0624 21.952 27.0288 20.6976 26.984 19.4768" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M27.6336 27.552C28.2944 25.2336 28.944 22.9264 29.6048 20.608" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M28.0592 27.8992C29.2576 26.04 30.4448 24.192 31.6432 22.3328" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M28.5184 28.5152C30.1424 27.272 31.7664 26.0288 33.4016 24.7744" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M28.7424 29.1648C30.5792 28.4032 32.4272 27.6528 34.264 26.8912" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M28.7312 29.736C30.6912 29.5232 32.6512 29.3216 34.6112 29.1088" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M28.4736 30.2064C30.3216 30.6992 32.1584 31.2032 34.0064 31.696" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M28.216 30.3856C29.1344 31.4384 30.0416 32.48 30.96 33.5328" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M25.752 27.4848C24.5536 25.6704 23.3664 23.856 22.168 22.0416" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M25.4832 28.5152C24.4304 27.7424 23.3776 26.9696 22.336 26.1968" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M27.264 30.4416C27.432 31.2144 27.6 31.9984 27.768 32.7712" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M25.7408 29.2208C25.136 29.2656 24.5312 29.2992 23.9152 29.344" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> <path d="M26.3456 29.96C26.0992 30.3968 25.8416 30.8224 25.5952 31.2592" stroke="white" stroke-width="0.56" stroke-miterlimit="10"></path> </g>  </svg>
							</div>
							<div class="categoria-item-titulo">
								<span>Spots</span>
								<span>LED</span>
							</div>
						</a>
					</div>

					<div class="categoria-item">
						<a href="#!">
							<div class="categoria-item-icone">
								<svg style="margin: 0 0 0 4px;" width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="11.9 7.88 29.23 36.23"> <path d="M13.1676 43.8503C13.1473 31.9408 13.1371 20.0415 13.1168 8.13196C22.3662 9.12695 31.6258 10.1118 40.8752 11.1068C40.6214 20.5999 40.3675 30.0929 40.1137 39.586C31.1385 41.0074 22.153 42.4289 13.1676 43.8503Z" stroke="white" stroke-width="0.507651" stroke-miterlimit="10"></path> <path d="M12.0102 8.54826C12.0102 20.0415 12 31.5347 12 43.0279C12.3249 43.3427 12.6498 43.6574 12.9747 43.962C12.9645 31.9713 12.9442 19.9907 12.9341 8C12.6295 8.19291 12.3147 8.37566 12.0102 8.54826Z" fill="white" stroke="white" stroke-width="0.20306" stroke-miterlimit="10"></path> <path d="M14.9241 10.1829C14.9038 20.7522 14.8733 31.3215 14.853 41.9009C22.8942 40.7232 30.9354 39.5353 38.9664 38.3575C39.2406 29.7072 39.5147 21.0568 39.7888 12.4166C31.504 11.6652 23.2191 10.9241 14.9241 10.1829Z" stroke="white" stroke-width="0.507651" stroke-miterlimit="10"></path> </svg>
							</div>
							<div class="categoria-item-titulo">
								<span>Luminárias</span>
								<span>LED</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		`);

		$('.grid-categorias .carousel-target').owlCarousel({
			loop: false,
			margin: 0,
			nav: false,
			dots: false,
			navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
			responsive: {
			   0: {
				  items: 4
			   },
			}
		 });

	},
 
	gifTarjaMobile(){
 
	   if(!ILUMINIM_UTILS.screen.isMobile()){
		  return;
	   }
 
	   $('.secao-banners').after(`
		  <div class="gif-tarja-mobile">
				<a href="#!"><img alt="Frete Grátis, Entrega Expressa, 12x sem Juros, 12 Anos de Mercado, Melhor Preço" title="Frete Grátis, Entrega Expressa, 12x sem Juros, 12 Anos de Mercado, Melhor Preço" src="https://blog.iluminim.com.br/wp-content/uploads/2022/06/gif-tarja-mobile-21-06-2022.gif"></a>
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
					  link: '/spots',
				   },
				   {
					  nome: 'Fitas LED',
					  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/fitas  navegue por categoria 31-08-2020-v2.png',
					  link: '/fita-de-led',
				   },
				   {
					  nome: 'Lâmpadas LED',
					  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampadas  navegue por categoria 31-08-2020.png',
					  link: '/lampada-led',
				   },
				   {
					  nome: 'Acessórios LED',
					  imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/acessorios  navegue por categoria 31-08-2020.png',
					  link: '/acessorios-para-leds',
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
					  link: '/kits-led',
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
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()) return;
 
	   $('#listagemProdutos').append(`
		  <div class="duplo-bloco-vitrine">
			 <div class="bloco-vitrine-1">
				<a href="/compre-por-ambiente">
				   <img src="https://cdn.awsli.com.br/257/257163/arquivos/banner_compre_por_ambiente_home_reduzido-21-01-2022.png">
				</a>
			 </div>
 
			 <div class="bloco-vitrine-2">
				<iframe allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" height="235" src="https://www.youtube.com/embed/bRbI4z9UDiw" width="427"></iframe>
			 </div>
		  </div>
	   `);
 
	},
 
	loginMobileVitrine(){
 
	   if(!ILUMINIM_UTILS.screen.isMobile()) return;
 
	   if(ILUMINIM_UTILS.usuario.logado()) return;
 
	   $('.grid-categorias').after(`
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
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()) return;
 
	   $(`
		  .titulo-categoria.borda-principal.cor-principal.vitrine-mas-vendido+ul .listagem-item, 
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-1355586+ul .listagem-item
		`).addClass('produto-com-cronometro');
	   
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
 
	criarLinkListagemLancamentos(){
 
	   $('.titulo-categoria.borda-principal.cor-principal.vitrine-lancamento').replaceWith(`
		  <a href="/lancamentos-led?sort=ultimos_produtos" class="titulo-categoria borda-principal cor-principal vitrine-lancamento">
			 <strong>Lançamentos</strong>
			 <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
		  </a>
	   `);
 
	},
 
	mensagemBusca(){
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()){
		  return;
	   }
 
	   $('input#auto-complete').after(`
		  <div class="informacao-busca">
			 <div class="conteudo-informacao-busca">
				<div class="titulo-informacao-busca">
				   <strong>quer economizar?</strong>
				   <span class="fechar-informacao-busca">✕</span>
				</div>
 
				<div class="texto-informacao-busca">
				   <span>procure em mais de 140.000 produtos</span>
				   <span>e compre com o menor preço na Iluminim,</span>
				   <span>eleita a maior loja de leds do Brasil!</span>
				</div>
			 </div>
		  </div>
	   `);
 
	   $('.informacao-busca .fechar-informacao-busca').click(function(){
		  $(this).parents('.informacao-busca').fadeOut(300);
	   });
 
	},
 
	blocoLogin(){
 
	   if(ILUMINIM_UTILS.usuario.logado() || ILUMINIM_UTILS.screen.isMobile()){
		  return;
	   }
 
	   $('body').append(`
		 <div class="bloco-login">
			 <div class="bloco-login-conteudo">
			 
				<div class="bloco-login-icone">
				   ${ILUMINIM_UTILS.icones.usuario_2}
				</div>
	
				<div class="bloco-login-texto">
				   <span>Descubra a experiência personalizada que fizemos para você :)</span>
				</div>
 
				<div class="bloco-login-botao">
				   <a href="/conta/login" onclick="ga('send', 'event', 'Teste A/B Optimize','click', 'Bloco Login Home - Desktop')">Fazer login</a>
				</div>
 
			 </div>
		 </div> 
	   `);
 
	},
 
	
		/*blocoVideoComProdutos(){
 
		 if(!ILUMINIM_UTILS.screen.isDesktop()) return;
 
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
	 },*/
 
	 /*gridDiferenciais(){
		 if(!ILUMINIM_UTILS.screen.isDesktop()) return;
 
		 let html = `
			 <div class="grid-diferenciais-iluminim">	
				 <div class="grid-diferenciais-iluminim-conteudo">
					 
					 <div class="grid-diferenciais-iluminim-item">
						 <a href="/pagina/condicoes-de-frete-gratis.html">
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
						 </a>
					 </div>
			 
					 <div class="grid-diferenciais-iluminim-item">
						 <a href="/pagina/politica-de-entrega.html">
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
						 </a>
					 </div>
			 
					 <div class="grid-diferenciais-iluminim-item">
						 <a href="/pagina/politica-de-compra.html">
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
						 </a>
					 </div>
			 
					 <div class="grid-diferenciais-iluminim-item">
						 <a href="/pagina/menor-preco-led.html">
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
						 </a>
					 </div>
			 
					 <div class="grid-diferenciais-iluminim-item">
						 <a href="/pagina/quem-somos.html">
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
						 </a>
					 </div>
			 
					 <div class="grid-diferenciais-iluminim-item">
						 <a href="#!" data-toggle="modal" data-target="#ModalRetiradaEmMaos">
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
						 </a>
					 </div>
			 
				 </div>
			 </div>
		 `;
 
		 //$('#listagemProdutos').append(html);
		 $('.secao-banners .row-fluid.banner.cheio').after(html);
		},*/
 
	botaoNewsletterListagem(){
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()){
		  return;
	   }
 
	   $('a.titulo-categoria.borda-principal.cor-principal.vitrine-2756184 + ul .listagem-item').addClass('produto-botao-newsletter').append(`
		  <div class="botao-newsletter">
			 <a href="javascript:void(0);" rel="noopener" onclick="ILUMINIM_UTILS.scrollTo('div#barraNewsletter', '-100');">CADASTRE-SE E GANHE DESCONTOS!</a>
		  </div>
	   `);
 
	},
 
	reposicionarListagens(){
 
	   //MAIS VENDIDOS
	   /*$(`
		  .titulo-categoria.borda-principal.cor-principal.vitrine-mas-vendido+ul, 
		  .titulo-categoria.borda-principal.cor-principal.vitrine-mas-vendido
	   `).appendTo('div#listagemProdutos');*/
 
	   //KITS ESPECIAIS
	   $(`
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-1355586+ul, 
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-1355586
	   `).appendTo('div#listagemProdutos');
 
 
	   //REFLETORES LED
	   $(`
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-877731+ul, 
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-877731
	   `).appendTo('div#listagemProdutos');
 
	   //this.cronometroLEDOfertas();
 
	   //LUMINÁRIAS LED
	   $(`
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-881697+ul, 
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-881697
	   `).appendTo('div#listagemProdutos');
 
	   //this.bannersDesconto();
 
	   //this.bannersKitsDesconto();
	   this.blocosDescontosProgressivos();
	   //this.bannersKitsDescontoBlack();
 
	   //LANÇAMENTOS LED
	   $(`
		  .titulo-categoria.borda-principal.cor-principal.vitrine-lancamento+ul, 
		  .titulo-categoria.borda-principal.cor-principal.vitrine-lancamento
	   `).appendTo('div#listagemProdutos');
	   
	   //this.videosNaHome();
	   //this.duploBlocoVitrine();
	   //this.blocoVideoComProdutos();
 
	   //SPOT LED
	   /*$(`
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-881062+ul, 
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-881062
	   `).appendTo('div#listagemProdutos');*/
 
	   //KIT SPOT LED
	   $(`
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-1357090+ul, 
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-1357090
	   `).appendTo('div#listagemProdutos');
 
	   //this.blocoUsuarioComProdutos();
 
	   //LÂMPADAS LED
	   $(`
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-881065+ul, 
		  a.titulo-categoria.borda-principal.cor-principal.vitrine-881065
	   `).appendTo('div#listagemProdutos');
	
	   this.oportunidadesEspeciais(); //ATIVAR APOS BLACK
 
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
 
	},
 
	adaptacaoListagemMaisVendidos(){
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()) return;
 
	   $('.bloco-triplo-personalizado').after('<div class="listagem listagem-topo"></div>');
	   $('.titulo-categoria.borda-principal.cor-principal.vitrine-mas-vendido, .titulo-categoria.borda-principal.cor-principal.vitrine-mas-vendido+ul').appendTo('.listagem.listagem-topo');
 
	},
 
	iniciar(){ //INICIAR SCRIPTS DA PÁGINA;
 
	   this.bannerTarja(); //MANTER ORDEM
 
	   this.blocoTriplo(); //MANTER ORDEM
	   this.adaptacaoListagemMaisVendidos(); //MANTER FINAL
 
	   this.carrouselBannersPersonalizados(); //MANTER ORDEM
 
	   this.miniBanners(); //VOLTAR APOS BLACK //MANTER ORDEM
 
	   //ILUMINIM_UTILS.renderizarCategoriasFlutuante();
	   ILUMINIM_UTILS.renderizarBotaoVoltarAoTopo();
	   
	   //ILUMINIM_UTILS.newsletterFlutuante();
 
	   this.bannerChamadaDesktop();
 
	   //this.bannerChamadaMobile();
 
	   this.cronometroBannerHome();
	   this.tagLancamentoListagemProduto();
	   this.tagCampeaoDeVendasListagemProduto();
	   this.visualizacaoRapida();
	   this.cronometroProdutosListagem();
 
	   
 
	   this.verTodosNasListagens();
	   this.tarjaInformacoesRodape();
	   this.textoSeoAvaliacoes();
	   
	   this.entrarOuCadastrarListagem();
	   this.aplicarDescontoPrimeiraCompra();
	   //this.bannersEmAba();
	   
	   //this.palavrasBuscadasTopoMobile();
	   this.baixarAppMobile();
	   //this.tarjaTopoMobile();
	   this.adaptacoesFullBannersMobile();

	   this.gridCategoriasMobile();//MANTER ORDEM
	   this.loginMobileVitrine(); //MANTER ORDEM

	   //this.gifTarjaMobile();
	   //this.bannerYoutubeMobile();
	   //this.bannerBaixeNossoAppMobile();
	   this.historicoDeNavegacaoMobile();
	   this.newsletterMobile();
	   //this.naveguePorCategoria();
	   this.removerBotaoProdutoAdicionado();
	   this.criarLinkListagemLancamentos();
	   this.mensagemBusca();
	   this.blocoLogin();
	   this.botaoNewsletterListagem();
 
	   this.reposicionarListagens(); //MANTER FINAL
	   
 
	}
 
 }
 
 $(document).ready(()=> {
 
	PaginaInicial.iniciar();
 
 });