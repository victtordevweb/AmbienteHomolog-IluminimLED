var PaginaProduto = {
    
	moverBreadcrumbs(){
	   
	   $('.info-principal-produto .breadcrumbs').insertBefore('.produto .span6 > .principal');
 
	},
 
	fecharParcelasFormasPagamento(){
 
	   $('.parcelas-produto .accordion .accordion-group:first-child .accordion-body').removeClass('in').attr('style', 'heigth: 0px;')
 
	},
 
	/*adicionarIconeBoletoNoValorDoBoleto(){
 
	   $('.produto .acoes-produto .preco-produto .desconto-a-vista').prepend(`
		  <div class="icone-boleto">
				<span>${ ILUMINIM_UTILS.icones.bandeira.boleto }</span>
		  </div>
	   `);
 
	},*/
 
	adicionarBandeirasPagamentoBlocoParcelas(){
	   $('.produto .parcelas-produto > .accordion > li .accordion-heading img[src*="/formas-de-pagamento/payu-cards.png"]').replaceWith(`
		  <div class="bandeiras-pagamento">
				<ul class="lista-bandeiras">
				   <li><span>${ILUMINIM_UTILS.icones.bandeira.visa}</span></li>
				   <li><span>${ILUMINIM_UTILS.icones.bandeira.mastercard}</span></li>
				   <li><span>${ILUMINIM_UTILS.icones.bandeira.hipercard}</span></li>
				   <li><span>${ILUMINIM_UTILS.icones.bandeira.amex}</span></li>
				   <li><span>${ILUMINIM_UTILS.icones.bandeira.elo}</span></li>
				</ul>
		  </div>
	   `);
	},
 
	//<li><span>${ILUMINIM_UTILS.icones.bandeira.mercado_pago}</span></li>
 
	adicionarBandeiraBoletoBlocoParcelas(){
	   $('.produto .parcelas-produto > .accordion > li .accordion-heading img[src*="/formas-de-pagamento/boleto-logo.png"]').replaceWith(`
		  <div class="bandeiras-pagamento">
				<ul class="lista-bandeiras">
				   <li class="bandeira-boleto">
					  <div>
							<span>${ILUMINIM_UTILS.icones.bandeira.boleto}</span>
					  </div>
					  <span>Boleto Bancário</span>    
				   </li>
				</ul>
		  </div>
	   `);
 
	   //REFERENCIANDO O PIX.
	   $('.parcelas-produto .accordion .accordion-group .accordion-heading img[src*="pagali-pix-logo"]').parent('span.accordion-toggle').addClass('bandeira-pix');
	},
 
	blocoComprandoNaIluminim(){
 
	   if(ILUMINIM_UTILS.screen.isMobile()){
		  return;
	   }
 
	   $('.produto .produto-compartilhar').after(`
		  <div class="comprando-iluminim">
				<div class="titulo-comprando-iluminim">COMPRANDO NA ILUMINIM</div>
 
				<div class="lista-comprando-iluminim">
				   <div class="conteudo-comprando-iluminim">
					  <b class="titulo-conteudo">Entrega</b>
					  <p class="conteudo-texto">Confie na entrega mais eficiente e rápida do Brasil. Nossos produtos são transportados de maneira segura e dentro dos mais rigorosos padrões de qualidade do e-commerce.</p>
				   </div>
 
				   <div class="conteudo-comprando-iluminim">
					  <b class="titulo-conteudo">Forma de Pagamento</b>
					  <p class="conteudo-texto">Sua compra pode ser realizada por cartão de crédito em até 12x sem juros, com parcelas mínimas de R$ 15, ou através de boleto bancário com 5% de desconto extra no valor total.</p>
				   </div>
 
				   <div class="conteudo-comprando-iluminim">
					  <b class="titulo-conteudo">Segurança</b>
					  <p class="conteudo-texto">Possuímos diversos parceiros como Google, Microsoft,Trustvox, Ebit, Mercado Pago e Site Blindado que possibilitam uma transação 100% segura e confiável.</p>
				   </div>
				</div>
 
		  </div>
	   `);
 
	},
 
	adicionarBlocoPrazosDeEntrega(){
	   
	   $('.produto .principal > .cep').before(`
		  <div class="prazos-de-entrega">
				<div class="icone-caminhao">${ILUMINIM_UTILS.icones.caminhao}</div>
				<div class="prazos-de-entrega-conteudo">
				   <span class="texto-1"><b>Só hoje: </b>Frete Grátis expresso em pedidos acima de R$299,00</span>
				   <span class="texto-2">Saiba os prazos de entrega e as formas de envio. <a href="#!" data-toggle="modal" data-target="#modal_detalhes_custo_frete">Detalhes</a></span>
				</div>
		  </div>
	   `);
 
 
	   $('body').append(`
		  <div class="modal modal-personalizado fade" id="modal_detalhes_custo_frete">
 
				<div class="modal-dialog" role="document">
 
				   <div class="modal-content">
 
					  <div class="modal-header">
							<h5 class="modal-title" id="exampleModalLongTitle">Detalhes</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
					  </div>
 
					  <div class="modal-body">
							
							<div class="text-left">
							   <h4 class="mt-0">Como saber o custo do frete:</h4>
							   Os custos de frete dependem do endereço de entrega, da opção de entrega selecionado e do peso dos itens.
							   <br><br>
							   Para saber o custo de frete dos itens:
							   <br>
							   <div>1) No carrinho de compras digite o CEP de destino;</div>
							   <div>2) Selecione a modalidade de frete escolhida e clique em finalizar compra.</div>
							   <br>
							   Para compras acima de R$299,00 é necessário escolher a modalidade "Frete Grátis" para obter o frete gratuito no envio.
							</div>
 
					  </div>
 
					  <div class="modal-footer">
							<button type="button" class="btn btn-secondary btn-custom" data-dismiss="modal">Fechar</button>
					  </div>
 
				   </div>
 
				</div>
 
		  </div>
	   `);
 
 
	},
 
	adicionarPorcentagemDesconto(){
 
	   function setarHTMLDesconto(){
 
		  if(ILUMINIM_UTILS.screen.isDesktop()){
 
			 $('.produto .produto-compartilhar').append(`
				<div class="desconto-produto">
				   <span class="porcentagem-desconto">${ILUMINIM_UTILS.produto.desconto_porcentagem()}%</span>
				   <span class="texto-off">Off</span>
				</div>
			 `);
 
		  }else {
 
			 $('.pagina-produto .produto .conteiner-imagem').prepend(`
				<div class="desconto-produto">
				   <span class="porcentagem-desconto">${ILUMINIM_UTILS.produto.desconto_porcentagem()}%</span>
				   <span class="texto-off">Off</span>
				</div>
			 `);
 
		  }
 
	   }
 
	   if(ILUMINIM_UTILS.produto.desconto_porcentagem()){
 
		  setarHTMLDesconto();
 
	   }
 
	   $(document).on('click', '.atributos ul li a', function(){
		  
		  if($('.porcentagem-desconto').length > 0){
				
				$('.porcentagem-desconto').html(`${ILUMINIM_UTILS.produto.desconto_porcentagem()}%`);
 
		  }else {
 
				setarHTMLDesconto();
 
		  }
	   });
 
	},
 
	adicionarListaDesejos(){
 
	   if(ILUMINIM_UTILS.screen.isDesktop()){
 
	   }
 
	   let id = ILUMINIM_UTILS.produto.id();
	   
	   let jaAdicionado = $('.produto-compartilhar .lista-favoritos').text().includes('Adicionado'); //VERIFICA SE O PRODUTO JA ESTÁ ADICIONADO NA LISTA DE FAVORITOS
 
	   
	   let target = $('.produto .span6 > .principal .nome-produto');
 
	   if(ILUMINIM_UTILS.screen.isMobile()){
		  target = $('.pagina-produto .produto .conteiner-imagem');
	   }
 
 
	   target.append(`
		  <div class="adicionar-produto-lista-desejo adicionar-lista-desejo ${jaAdicionado ? 'produto-adicionado-lista-desejo' : ''}" data-produto-id="${id}">
				<i class="icon-heart-empty"></i>
		  </div>
	   `);
 
	   if(ILUMINIM_UTILS.screen.isDesktop()){
 
		  $('.produto-compartilhar').prepend(`
			 <div class="adicionar-produto-lista-desejo lista-desejo ${jaAdicionado ? 'produto-adicionado-lista-desejo' : ''}" data-produto-id="${id}">
				   <i class="icon-heart-empty"></i>
			 </div>
		  `);
 
	   }
   
 
	},
 
	adicionarSelosSeguranca(){
 
	   $('.parcelas-produto .accordion').before(`
		  <div class="selos-seguranca-produto">
 
				<div class="selo-produto">
				   ${ILUMINIM_UTILS.icones.selo.site_sincero}
				</div>
 
				<div class="selo-produto">
				   ${ILUMINIM_UTILS.icones.selo.abcomm}
				</div>
 
				<div class="selo-produto">
				   ${ILUMINIM_UTILS.icones.selo.ebit_diamante}
				</div>
 
				<div class="selo-produto">
				   ${ILUMINIM_UTILS.icones.selo.mp}
				</div>
 
				<div class="selo-produto">
				   ${ILUMINIM_UTILS.icones.selo.site_blindado}
				</div>
 
				<div class="selo-produto">
				   ${ILUMINIM_UTILS.icones.selo.site_protegido}
				</div>
 
				${ ILUMINIM_UTILS.produto.garantia() ? `
				   <div class="garantia-produto">
					  <div class="garantia-produto-imagem"><img src="https://cdn.awsli.com.br/257/257163/arquivos/selo-garantia-28-09-21.png"></div>
					  <div class="garantia-produto-texto">${ILUMINIM_UTILS.produto.garantia()} de garantia</div>
				   </div>
				` : `` }
		  </div>
	   `);
 
	},
 
	adicionarBlocoParcelas(){
 
	   if($('.parcelas-produto .parcela.sem-juros').length ==0){
		  return;
	   }
 
	   $('.parcelas-produto').each(function(index, el){
 
		  let quantidade_parcela = $(this).find('.accordion .parcela.sem-juros b.cor-principal').last().text().replace('x', '');
 
		  $(this).find('.selos-seguranca-produto').after(`
		  <div class="parcelas-sem-juros" data-hash="#ModalInfoPagamento_${index}" data-target="#ModalInfoPagamento_${index}" data-toggle="modal">
				<span class="conteudo-icone"><i class="icon-credit-card"></i></span>
				<span>Pague em até</span>
				<span class="texto-parcelas">${quantidade_parcela} parcelas sem juros!</span>
		  </div>`);
		  
		  $('body').append(`
		  <div class="modal modal-personalizado fade ModalInfoPagamento" id="ModalInfoPagamento_${index}">
				<div class="modal-dialog" role="document">
				   <div class="modal-content">
 
					  <div class="modal-header">
							<h5 class="modal-title">Formas de pagamento</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
					  </div>
 
					  <div class="modal-body">   
							<div class="row-mp-top">
							   <h3 class="titles-modal-ilm">Mercado Pago</h3>
							   <p>Pagar com o Mercado Pago é escolher qualquer um destes meios. É rápido, seguro e não tem custo adicional.</p>
							</div>
	   
							<div class="row-parcele-mp">
							   <p><i class="icon-credit-card"></i> Você pode pagar este produto em <span>até <span class="parcelas-prod">${quantidade_parcela}x</span> sem juros!</span></p>
							</div>
							
							<div class="row-grid-bandeiras">
							   <h3 class="titles-modal-ilm">Cartões de crédito</h3>
							   <p>Aprovação instantânea.</p>
							
							   <div class="bands-modal-ilm">
										<ul>
										   <li>
											  <div class="visa-modal parcelas-prod">${quantidade_parcela}x</div>
											  <div class="diners-modal parcelas-prod">${quantidade_parcela}x</div>
										   </li>
										   
										   <li>
											  <div class="master-modal parcelas-prod">${quantidade_parcela}x</div>
											  <div class="elo-modal parcelas-prod">${quantidade_parcela}x</div>
										   </li>
										   
										   <li>
											  <div class="hipercard-modal parcelas-prod">${quantidade_parcela}x</div>
											  <div class="mp-modal parcelas-prod">${quantidade_parcela}x</div>
										   </li>
										   
										   <li>
											  <div class="amex-modal parcelas-prod">${quantidade_parcela}x</div>
										   </li>
										</ul>
							   </div>
							</div>
							
							<div class="rdp-modal-boleto">
							
							<h3 class="titles-modal-ilm">Boleto bancário</h3>
							
							<p>Ao comprar explicaremos como fazer o pagamento em qualquer agência bancária, caixa eletrônico, internet banking ou correspondentes bancários.<span>Pague e será aprovado de 1 a 2 dias úteis.</span></p>
							
							</div>
 
							<div class="rdp-modal-pix">
							
							<h3 class="titles-modal-ilm">Pix</h3>
							
							<p>É a opção mais rápida e prática para suas compras.</p>
							
							${ILUMINIM_UTILS.icones.bandeira.pix_2}
 
							</div>
				   
					  </div>
 
					  <div class="modal-footer">
							<button type="button" class="btn btn-secondary btn-custom" data-dismiss="modal">Fechar</button>
					  </div>
 
				   </div>
				</div>
		  </div>
		  `);
 
	   });
 
	},
 
	adicionarBlocoDescontoBoletoEconomize(){
 
	   $('.parcelas-produto').each(function(){
 
		  let id = $(this).attr('data-produto-id');
		  let acoesProduto = $(this).parents('.principal').find(`.acoes-produto[data-produto-id="${id}"]`);
 
		  if(acoesProduto.find('.desconto-a-vista').length == 0){
				return;
		  }
 
		  let valor_economizado = ILUMINIM_UTILS.produto.valor_economize(acoesProduto);
 
		  $(this).find('.selos-seguranca-produto').before(`
			 <div class="desconto-boleto">
				 <div class="desconto-boleto-icone"><span>${ILUMINIM_UTILS.icones.bandeira.boleto}</span></div>
				 <div class="desconto-boleto-texto-negrito"><strong>Só hoje!</strong></div>
				 <div>Ganhe</div>
				 <div class="desconto-boleto-texto-negrito texto-desconto"><strong>5% extra de desconto</strong></div>
				 <div>no boleto ou pix</div>
			 </div>
		  `);
		 /*
		  ${ valor_economizado !== 'NaN' ? `
		  <div class="economize">
			 <span>Economize </span><b>R$ ${valor_economizado}</b></span>
		  </div>
	   ` : `` }
		 */
 
	   });
 
	},
 
	linhaAvaliacao(){
 
	   $('.produto .codigo-produto').append(`
		  <div class="linha-avaliacao">
				<a href="#comentarios" class="avaliacao-dos-clientes">
				   <div class="titulo-avaliacao">Avaliação Máxima:</div>
				   <div class="estrelas-avaliacao">
					  <i class="icon-star"></i>
					  <i class="icon-star"></i>
					  <i class="icon-star"></i>
					  <i class="icon-star"></i>
					  <i class="icon-star"></i>
				   </div>
				</a>
 
				${ILUMINIM_UTILS.screen.isDesktop() ? `
				
				   <a href="#comentarios" class="veja-quem-recomendou">
					  <i class="icon-thumbs-up"></i>
					  <div class="titulo-veja-quem-recomendou">Veja quem recomendou</div>
					  <i class="icon-angle-down"></i>
				   </a>
 
				` : ``}
		  </div>
	   `);
 
	},
 
	adicionarProdutoCertificado(){
 
	   $('.produto .codigo-produto > .cor-secundaria:first-child').after(`
		  <span class="cor-secundaria produto-certificado-texto">
			 <b>Produto Certificado</b>
		  </span>
	   `);
 
	   $('.produto .conteiner-imagem').prepend(`
		  <div class="tag-produto-certificado">
			 <div class="tag-produto-ceritificado-conteudo">
				   <div class="tag-produto-certificado-icone">
					  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" style="enable-background:new 0 0 512 512;width: 18px;height: 20px;" xml:space="preserve" class="" viewBox="17.11 0 180.05 214.27"><g><g xmlns="http://www.w3.org/2000/svg">	<path d="M196.926,55.171c-0.11-5.785-0.215-11.25-0.215-16.537c0-4.142-3.357-7.5-7.5-7.5c-32.075,0-56.496-9.218-76.852-29.01   c-2.912-2.832-7.546-2.831-10.457,0c-20.354,19.792-44.771,29.01-76.844,29.01c-4.142,0-7.5,3.358-7.5,7.5   c0,5.288-0.104,10.755-0.215,16.541c-1.028,53.836-2.436,127.567,87.331,158.682c0.796,0.276,1.626,0.414,2.456,0.414   c0.83,0,1.661-0.138,2.456-0.414C199.36,182.741,197.954,109.008,196.926,55.171z M107.131,198.812   c-76.987-27.967-75.823-89.232-74.79-143.351c0.062-3.248,0.122-6.396,0.164-9.482c30.04-1.268,54.062-10.371,74.626-28.285   c20.566,17.914,44.592,27.018,74.634,28.285c0.042,3.085,0.102,6.231,0.164,9.477C182.961,109.577,184.124,170.844,107.131,198.812   z" fill="#000000" data-original="#000000" style="" class=""></path>	<path d="M132.958,81.082l-36.199,36.197l-15.447-15.447c-2.929-2.928-7.678-2.928-10.606,0c-2.929,2.93-2.929,7.678,0,10.607   l20.75,20.75c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.303-2.196l41.501-41.5   c2.93-2.929,2.93-7.678,0.001-10.606C140.636,78.154,135.887,78.153,132.958,81.082z" fill="#000000" data-original="#000000" style="" class=""></path></g></g></svg>
				   </div>
				   <div class="tag-produto-certificado-texto">Produto Certificado</div>
			 </div>
		  </div>
	   `);
 
	},
 
	adicionarTextoGarantia(){
 
	   if(ILUMINIM_UTILS.produto.garantia()){
		  
		  $('.produto .codigo-produto > span.cor-secundaria:first-child').after(`
			 <span class="cor-secundaria">
				<b>Garantia:</b> <span>${ILUMINIM_UTILS.produto.garantia()}</span>
			 </span>
		  `);
 
	   }
 
	},
 
	adicionarBlocoDuvidasTrustvox(){
 
	   $('.produto .row-fluid > .span6:first-child').append(`
		  <div class="duvidas-trustvox">
				<a href="#comentarios">
				   <div class="icone-duvidas-trustvox">${ILUMINIM_UTILS.icones.atendimento_usuario}</div>
				   <div class="texto-duvidas-trustvox"><span>Posso Ajudar?</span><span>Clique aqui e tire suas dúvidas</span></div>
				</a>
		  </div>                    
	   `);
 
	},
 
	visitanteFazerLoginCadastrar(){
 
	   if(!ILUMINIM_UTILS.usuario.logado()){
		  $('div#barraNewsletter').before(`
				<div class="usuario-visitante">
				   <div class="conteiner">
					  <div class="usuario-visitante-conteudo">
							<span>Olá, visitante</span>
							<a class="btn-custom" href="/conta/login">Faça seu login</a>
							<span>Cliente novo?</span><a href="/conta/login"> Comece aqui.</a>
					  </div>
				   </div>
				</div>
		  `);
	   }
 
	},
 
	adaptacaoPaginaProdutoMobile(){
 
	   if(!ILUMINIM_UTILS.screen.isMobile()){
		  return;
	   }
 
	   $('.pagina-produto .produto > .info-principal-produto').prependTo('.produto .span6 > .principal');
 
	},
 
	adaptacaoVideoNativo(){
 
	   let divVideo = $('.produto .row-fluid > .span6:first-child .produto-video');
 
	   if( divVideo.length > 0){
 
		  $('body').addClass('produto-com-video');
 
		  let iframeLink = $('#modalVideo iframe').attr('src');
 
		  $('.produto-video a.botao-video').attr('href', '#modal_play_iluminim_video');
 
		  $('body').append(`
				<div class="modal modal-personalizado fade modal_play_iluminim" id="modal_play_iluminim_video">
 
				   <div class="modal-dialog">
 
					  <div class="modal-content">
 
							<div class="modal-header">
							   <h5 class="modal-title" id="exampleModalLongTitle">Vídeo - ${ILUMINIM_UTILS.produto.nome()}</h5>
							   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
							   <span aria-hidden="true">&times;</span>
							   </button>
							</div>
 
							<div class="modal-body">
 
							   <iframe id="modal_video" src="${iframeLink}?enablejsapi=1" width="100%" height="350" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
							</div>
 
							<div class="modal-footer">
							   <button type="button" class="btn btn-secondary btn-custom" data-dismiss="modal">Fechar</button>
							</div>
 
					  </div>
 
				   </div>
 
				</div>
		  `);
 
	   }
 
	},
 
	cronometroCompreAntesQueAcabe(){
 
	   // com titulo anterior: <div class="conteudo-titulo">${porcentagemVendido}% vendido</div>
 
	   if(ILUMINIM_UTILS.screen.isMobile()){
		  return;
	   }
 
	   let porcentagemVendido = ILUMINIM_UTILS.gerarNumerosAleatorios(91, 94);
 
	   $('.produto .row-fluid > .span6:first-child').append(`
		  <div class="cronometro-compre-antes-que-acabe">
				<div class="conteudo-titulo-cronometro">LED OFERTAS IMBATÍVEIS: Última chance!</div>
 
				<div class="compre-antes-que-acabe-progress">
				   ${ ILUMINIM_UTILS.gerarBarraProgresso({ porcentagem_fixa: porcentagemVendido }) }
				</div>
 
				<div class="conteudo-cronometro">
				   <div class="conteudo-icone-cronometro">
					  ${ILUMINIM_UTILS.icones.relogio_2}
				   </div>
				   <ul class="countdown-target"></ul>
				</div>
		  </div>
	   `);
 
	   $('.cronometro-compre-antes-que-acabe .countdown-target').yuukCountDown({
		  starttime: '2016/11/12 00:00:00',
		  endtime: '2030/12/30 00:00:00',
	   });
 
	},
 
	ajustarDescricao(){
 
	   /*if($('body.pagina-produto.produto-26482900').length > 0){
		  return;
	   }*/
 
	   $('#descricao table.table.table-striped').each(function(){
		 let string = $(this).text().trim() || '';
 
		 if(string.length < 20){
			 $(this).remove();
		 }
	   });
 
	   $('#descricao table.table.table-striped td').each(function(){
		  let text = $(this).text().trim();
		  if(text == ''){
				$(this).remove();
		  }
	   });
	   
	   $('#descricao table *').each(function(){
	 
		  let conteudo = $(this).html();
		  let verificarString1 = '2019/2020';
		  let verificarString2 = '2021/2022';
 
		  if($(this).children().length == 0){
 
			 if(conteudo.includes(verificarString1)){
 
				let novoConteudo = conteudo.replace(verificarString1, '2022/2023');    
	  
				$(this).html(novoConteudo);
 
			 }else if(conteudo.includes(verificarString2)){
 
				let novoConteudo = conteudo.replace(verificarString2, '2022/2023');    
	  
				$(this).html(novoConteudo);
 
			 }
 
		  }
		  
	  });
 
	   $('div#descricao img[src="https://cdn.awsli.com.br/257/257163/arquivos/itensTITULO.png"]').parent().replaceWith(`
		  <div class="descricao-titulo" data-referencia="Itens Inclusos">
				<span class="descricao-icone">${ILUMINIM_UTILS.icones.descricao_produto.itens_inclusos}</span>
				<span>Itens Inclusos</span>
		  </div>
	   `);
 
 
	   $('div#descricao img[src="https://cdn.awsli.com.br/257/257163/arquivos/caracteristicasTITULO.png"]').parent().replaceWith(`
		  <div class="descricao-titulo descricao-titulo-caracteristicas-tecnicas" data-referencia="Características Técnicas">
				<span class="descricao-icone">${ILUMINIM_UTILS.icones.descricao_produto.caracteristicas}</span>
				<span>Características Técnicas</span>
		  </div>
	   `);
 
 
	   $('div#descricao img[src="https://cdn.awsli.com.br/257/257163/arquivos/confiratitulo.png"], div#descricao img[src="https://cdn.awsli.com.br/257/257163/arquivos/confira.png"]').parent().replaceWith(`
		  <div class="descricao-titulo descricao-titulo-o-que-dizem-nossos-clientes" data-referencia="Confira o que dizem nossos clientes">
				<span class="descricao-icone">${ILUMINIM_UTILS.icones.descricao_produto.nossos_clientes}</span>
				<span>Confira o que dizem nossos clientes</span>
		  </div>
	   `);            
	   
	   $(`
		  div#descricao img[src*="/arquivos/os-beneficios-do-led"], 
		  div#descricao img[src*="/arquivos/beneficiosled"],
		  div#descricao img[src*="pimgpsh_fullsize_distr"],
		  div#descricao img[src*="gratis-pagina-produto-08-04-4545-13-08"]
	   `).remove(); 
 
	   $('#descricao .descricao-titulo').each(function(){
 
		  if( $(this).parents('.descricao-conteudo-accordion').length > 0 ){
			 return;
		  }
 
		  $(this).nextUntil('.descricao-titulo').wrapAll(`<div class="descricao-conteudo" data-referencia="${$(this).attr('data-referencia')}"></div>`);
 
		  $(this).wrap(`<div class="descricao-conteudo-accordion" data-referencia="${$(this).attr('data-referencia')}"></div>`);
 
		  $(this).parent().next('.descricao-conteudo').insertAfter(this);
 
	   });
 
	   if( $('#descricao > div.new__description__text:nth-child(2)').length > 0){
 
		  $('#descricao > p').first().nextUntil('.descricao-conteudo-accordion').wrapAll(`
			 <div class="descricao-conteudo descricao"></div>
		  `);
 
	   }else {
 
		  if($('#descricao > div:nth-child(2)').length > 0){
 
			 $('#descricao > div:nth-child(1) + ~').first().nextUntil('.descricao-conteudo-accordion').wrapAll(`
				<div class="descricao-conteudo descricao"></div>
			 `);
 
		  }else if($('#descricao > div:first-child').length > 0){
			 
			 if($('#descricao > div:first-child + *:empty').length == 0){
 
				$('#descricao > div:first-child').first().nextUntil('.descricao-conteudo-accordion').wrapAll(`
				   <div class="descricao-conteudo descricao"></div>
				`);
 
			 }else {
 
				$('#descricao > div:first-child ~ *').first().nextUntil('.descricao-conteudo-accordion').wrapAll(`
				   <div class="descricao-conteudo descricao"></div>
				`);
 
			 }
 
		  }else{
 
			 /*$('#descricao > p').first().nextUntil('.descricao-conteudo-accordion').prevObject.prevObject.wrapAll(`
				<div class="descricao-conteudo descricao"></div>
			 `);*/
 
			 if($('#descricao > div:first-child + *:empty').length == 0){
 
				$('#descricao > p').first().nextUntil('.descricao-conteudo-accordion').prevObject.prevObject.wrapAll(`
				   <div class="descricao-conteudo descricao"></div>
				`);
 
			 } else {
 
				$('#descricao > p').first().nextUntil('.descricao-conteudo-accordion').wrapAll(`
				   <div class="descricao-conteudo descricao"></div>
				`);
 
			 }
 
		  }
	
	   }
 
	   $('#descricao > .descricao-conteudo.descricao').before(`
		  <div class="descricao-titulo descricao-titulo-descricao">
				<span class="descricao-icone">${ILUMINIM_UTILS.icones.descricao_produto.descricao}</span>
				<span>Descrição</span>
		  </div>
	   `);
 
	   $('#descricao > .descricao-titulo.descricao-titulo-descricao, #descricao > .descricao-conteudo.descricao').wrapAll(`
		  <div class="descricao-conteudo-accordion accordion-descricao"></div>
	   `);
 
	   $('#descricao').prepend(`
				
		  ${ ILUMINIM_UTILS.produto.nome().toLowerCase().includes('tubular') ? `
 
			 <div class="descrica-tarja tarja-tubular">
				<div class="descricao-tarja-titulo">
				   Só hoje: <span>Frete expresso grátis</span> para todo brasil!
				</div>
				<div class="descricao-tarja-texto">*Frete grátis expresso apenas para compras acima de R$299,00 com envio para os estados RS, SC e PR.</div>
				<div class="descricao-tarja-texto-2">Demais estados entrar em contato com nossa Central de Atendimento para verificar opções de transporte.</div>
			 </div>
 
		  ` : `
 
			 <div class="descrica-tarja">
				<div class="descricao-tarja-titulo">
				   Só hoje: <span>Frete expresso grátis</span> para todo brasil!
				</div>
				<div class="descricao-tarja-texto">*Frete grátis expresso! <a href="/pagina/condicoes-de-frete-gratis.html">Consulte o regulamento.</a></div>
			 </div>
		  
		  ` }
 
	   `);
 
	   $('#descricao .descricao-conteudo-accordion.accordion-descricao img[src*="pimgpsh_fullsize_distr"]').parent().remove(); //REMOVER TARJA FRETE LARANJA FRETE GRÁTIS
 
	   $('#descricao *').each(function(){ //REMOVENDO ITENS VAZIO;
		  var text = $(this).html();
		  if(text == '&nbsp;'){
				$(this).remove();
		  }
	   });
 
	   $('#descricao table.table.table-striped').each(function(){ //REMOVENDO TABELAS VAZIAS
		  if( $(this).find('tr').length < 2 ){
				$(this).remove();
		  }
	   });
 
	   $('.descricao-conteudo[data-referencia="Características Técnicas"] > table.table.table-striped > tbody').prepend(`
		 <tr style="box-sizing: border-box;">
			 <td class="index" style="box-sizing: border-box; padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221); background-color: rgb(249, 249, 249);"><b>Marca</b></td>
			 <td style="box-sizing: border-box; padding: 8px; line-height: 1.42857; vertical-align: top; border-top: 1px solid rgb(221, 221, 221); background-color: rgb(249, 249, 249);">Importado</td>
		 </tr>
	   `);
 
	   $('#descricao').addClass('descricao-ativa');
 
	   $(document).on('click', '.descricao-titulo', function(){
 
		  $(this).parent().toggleClass('accordion-active');
		  $(this).next().slideToggle(500);
 
		  $(this).parent().find('.carousel-target').trigger('refresh.owl.carousel');
 
	   });
	
	   this.adicionarBeneficiosLED();
	   this.duvidasRapidas();
	   this.cuidadoMaximoComSuaEncomenda();
	   this.iluminimLEDExplica();
	   this.doacoesRealizadas();
	   this.compareOsModelos();
 
	   $('.descricao-conteudo').hide();
 
	   if( $('.descricao-conteudo.descricao').text() == '' ){
	   
		  $('.descricao-conteudo.descricao').parents('.descricao-conteudo-accordion.accordion-descricao').remove();
	   
	   }
 
	   if( ILUMINIM_UTILS.screen.isMobile() ){
 
		  /*$(`
			 .descricao-conteudo-accordion.accordion-descricao .descricao-titulo,
			 .descricao-conteudo-accordion[data-referencia="Itens Inclusos"] .descricao-titulo,
			 .descricao-conteudo-accordion[data-referencia="Características Técnicas"] .descricao-titulo,
			 .descricao-conteudo-accordion.compare-os-modelos .descricao-titulo
		  `).click();*/
 
	   } else {
 
		  $(`
			 .descricao-conteudo-accordion.accordion-descricao .descricao-titulo,
			 .descricao-conteudo-accordion.beneficios-led .descricao-titulo,
			 .descricao-conteudo-accordion[data-referencia="Itens Inclusos"] .descricao-titulo,
			 .descricao-conteudo-accordion[data-referencia="Características Técnicas"] .descricao-titulo,
			 .descricao-conteudo-accordion.compare-os-modelos .descricao-titulo,
			 .descricao-conteudo-accordion[data-referencia="Confira o que dizem nossos clientes"] .descricao-titulo,
			 .descricao-conteudo-accordion.doacoes-realizadas .descricao-titulo,
			 .descricao-conteudo-accordion.iluminim-led-explica .descricao-titulo,
			 .descricao-conteudo-accordion.cuidado-maximo-com-sua-encomenda .descricao-titulo
		  `).click();
 
	   }
 
 
	},
 
	adicionarBeneficiosLED(){
 
	   $('.descricao-conteudo-accordion.accordion-descricao').after(`
		  <div class="descricao-conteudo-accordion beneficios-led">
				<div class="descricao-titulo descricao-titulo-beneficios-led">
				   <span class="descricao-icone">${ILUMINIM_UTILS.icones.descricao_produto.beneficios}</span>
				   <span>Você já conhece os benefícios do led?</span>
				</div>
				
				<div class="descricao-conteudo">
				   <div class="bloco-beneficios-led">
					  <div class="carousel-target">
				
						 <div class="item-beneficio-led">
							<div class="item-beneficio-titulo">Maior Durabilidade</div>
							<div class="item-beneficio-icone"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-maior-durabilidade-04-02-22.png"></div>
							<div class="item-beneficio-texto">
								  <span>O LED, em média, possui</span>
								  <span>uma vida de 50 mil horas</span>
								  <span>úteis, visto que seu material </span>
								  <span>não esquenta e raramente queima.</span>
							</div>
						 </div>
						 
						 <div class="item-beneficio-led">
							<div class="item-beneficio-titulo">Menor Consumo de Energia</div>
							<div class="item-beneficio-icone"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-menor-consumo-de-energia-04-02-22.png"></div>
							<div class="item-beneficio-texto">
								  <span>Eficiente na produção de lúmens</span>
								  <span>com menos gasto energético,</span>
								  <span>economize até 80% na sua</span>
								  <span>conta de energia com o LED.</span>
							</div>
						 </div>
				
						 <div class="item-beneficio-led">
							<div class="item-beneficio-titulo">Variedade</div>
							<div class="item-beneficio-icone"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-variedade-04-02-22.png"></div>
							<div class="item-beneficio-texto">
								  <span>Por não utilizar metais pesados e não</span>
								  <span>esquentar, o LED possui maior</span>
								  <span>versatilidade, permitindo um amplo</span>
								  <span>catálogo de produtos.</span>
							</div>
						 </div>
				
						 <div class="item-beneficio-led">
							<div class="item-beneficio-titulo">Praticidade</div>
							<div class="item-beneficio-icone"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-praticidade-04-02-22.png"></div>
							<div class="item-beneficio-texto">
								  <span>Fácil e prático o LED</span>
								  <span>é descomplicado,</span>
								  <span>sem burocracia</span>
								  <span>e mais econômico.</span>
							</div>
						 </div>
				
						 <div class="item-beneficio-led">
							<div class="item-beneficio-titulo">Garantia</div>
							<div class="item-beneficio-icone"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-garantia-04-02-22.png"></div>
							<div class="item-beneficio-texto">
								  <span>A maior garantia em</span>
								  <span>LED do mercado</span>
								  <span>com até 5 anos.</span>
							</div>
						 </div>
				
						 <div class="item-beneficio-led">
							<div class="item-beneficio-titulo">Última Tecnologia LED</div>
							<div class="item-beneficio-icone"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icone-ultima-tecnologia-led-04-02-22.png"></div>
							<div class="item-beneficio-texto">
								  <span>Contamos com uma equipe de </span>
								  <span>especialistas que selecionam os</span>
								  <span>melhores produtos e </span>
								  <span>de última geração.</span>
							</div>
						 </div>
				
					  </div>
				   </div>
				</div>
		  </div>
	   `);
 
	   $('.bloco-beneficios-led .carousel-target').owlCarousel({
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
				   items:3
				},
				1024:{
				   items:4
				}
		  }
	   });
	   
 
	},
 
	beneficiosOptimize(){
 
	   $('.descricao-conteudo-accordion.beneficios-led').replaceWith(`
		  <div class="descricao-conteudo-accordion beneficios-led">
				<div class="descricao-titulo descricao-titulo-beneficios-led">
				   <span class="descricao-icone">${ILUMINIM_UTILS.icones.descricao_produto.beneficios}</span>
				   <span>Você já conhece os benefícios do led?</span>
				</div>
				
				<div class="descricao-conteudo" style="display: none;">
 
				   <div class="conteudo-beneficios-led">
				   
					  <div class="item-beneficios-led beneficio-mais-economico">
							<div class="item-titulo-beneficio">Mais econômico</div>
							<div class="item-imagem-beneficio"><img alt="Economiza até 80% de energia quando comparado as antigas lâmpadas." title="Economiza até 80% de energia quando comparado as antigas lâmpadas." src="https://cdn.awsli.com.br/257/257163/arquivos/beneficios-iluminim-mais-economico-04-03-21.png"></div>
							<div class="item-texto-beneficio">Economiza até 80% de energia quando comparado as antigas lâmpadas.</div>
					  </div>
 
					  <div class="item-beneficios-led beneficio-dura-muito-mais">
							<div class="item-titulo-beneficio">Dura muito mais</div>
							<div class="item-imagem-beneficio"><img alt="Dura até 25x mais do que as lâmpadas incandescentes." title="Dura até 25x mais do que as lâmpadas incandescentes." src="https://cdn.awsli.com.br/257/257163/arquivos/beneficios-iluminim-dura-muito-mais-04-03-21.png"></div>
							<div class="item-texto-beneficio">Dura até 25x mais do que as lâmpadas incandescentes.</div>
					  </div>
 
					  <div class="item-beneficios-led beneficio-sem-calor">
							<div class="item-titulo-beneficio">Sem calor</div>
							<div class="item-imagem-beneficio"><img alt="Como não emite radiação infravermelho, o feixe luminoso do LED é livre de calor." title="Como não emite radiação infravermelho, o feixe luminoso do LED é livre de calor." src="https://cdn.awsli.com.br/257/257163/arquivos/beneficios-iluminim-sem-calor-04-03-21.png"></div>
							<div class="item-texto-beneficio">Como não emite radiação infravermelho, o feixe luminoso do LED é livre de calor.</div>
					  </div>
 
					  <div class="item-beneficios-led beneficio-mais-seguro">
							<div class="item-titulo-beneficio">Mais seguro</div>
							<div class="item-imagem-beneficio"><img alt="Opera em baixa voltagem, o que representa menor perigo para o instalador." title="Opera em baixa voltagem, o que representa menor perigo para o instalador." src="https://cdn.awsli.com.br/257/257163/arquivos/beneficios-iluminim-mais-seguro-04-03-21.png"></div>
							<div class="item-texto-beneficio">Opera em baixa voltagem, o que representa menor perigo para o instalador.</div>
					  </div>
 
					  <div class="item-beneficios-led beneficio-garantia">
							<div class="item-titulo-beneficio">Garantia</div>
							<div class="item-imagem-beneficio"><img alt="Garantia de ${ILUMINIM_UTILS.produto.garantia()}, a maior do mercado." title="Garantia de ${ILUMINIM_UTILS.produto.garantia()}, a maior do mercado." src="https://cdn.awsli.com.br/257/257163/arquivos/beneficios-iluminim-garantia-04-03-21.png"></div>
							<div class="item-texto-beneficio">Garantia de ${ILUMINIM_UTILS.produto.garantia()}, a maior do mercado.</div>
					  </div>
 
				   </div>
 
				</div>
		  </div>
	   `);
 
	},
 
	cuidadoMaximoComSuaEncomenda(){
 
	   let config = [
		  {
				imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/icon-caixa-personalizada-23-08-18.png',
				titulo: 'Caixa Personalizada',
				descricao: 'Todas as encomendas são entregues com alto nível de excelência. Para isso, utilizamos caixas e envelopes personalizados com lacre de segurança.',
		  },
		  {
				imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/-icon-posicao-de-produtos-23-08-18.png',
				titulo: 'Posição de produtos',
				descricao: 'Profissionais capacitados e materiais propícios proporcionam o melhor posicionamento dos produtos dentro da caixa box, gerando segurança completa.'
		  },
		  {
				imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/icon-air-plus-23-08-18.png',
				titulo: 'Air Plus Storopack',
				descricao: 'Tecnologia de ultima geração na sua encomenda. Almofadas de ar são inseridas dentro da caixa box visando acomodar os produtos de maneira uniforme.'
		  },
		  {
				imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/long-checklist.png',
				titulo: 'Qualidade Garantida',
				descricao: 'Todos os produtos são testados por uma equipe técnica especialista antes do envio e são submetidos a um rigoroso controle de qualidade.'
		  },
		  {
				imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/icon-conferencia-antes-do-envio-23-08-18.png',
				titulo: 'Conferência antes do envio',
				descricao: 'Exclusivo setor de reconferência antes do envio de mercadorias online garante ao consumidor uma experiência de compra amplamente satisfatória.'
		  }
	   ];
 
 
	   let html = config.map(item=> {
 
		  let { imagem, titulo, descricao } = item;
		  
		  return `
				<div class="item-cuidado-maximo-encomenda">
				   <div class="item-icone"><img alt="${titulo}" title="${titulo}" src="${imagem}"></div>
				   <div class="item-titulo">${titulo}</div>
				   <div class="item-descricao">${descricao}</div>
				</div>
		  `;
 
	   }).join('');
 
 
	   $('#descricao').after(`
		  <div class="descricao-conteudo-accordion cuidado-maximo-com-sua-encomenda">
				<div class="descricao-titulo descricao-titulo-cuidado-maximo-com-a-sua-encomenda">
				   <span class="descricao-icone">${ILUMINIM_UTILS.icones.descricao_produto.cuidado_encomenda}</span>
				   <span>Cuidado máximo com a sua encomenda</span>
				</div>
				<div class="descricao-conteudo">
				   <div class="carousel-target">
					  ${html}
				   </div>
				</div>
		  </div>
	   `);
 
 
 
	   $('.descricao-conteudo-accordion.cuidado-maximo-com-sua-encomenda .carousel-target').owlCarousel({
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
				   items:3
				},
				1024:{
				   items:4
				}
		  }
	   });
 
	},
 
	duvidasRapidas(){
 
	   let duvidasRapidas = {
 
		  gerarObjeto(){
 
				let nome_produto = ILUMINIM_UTILS.produto.nome().toLowerCase();
 
				//termosIncludes: [] //TERMOS QUE PODE ESTÁ INCLUSO
				//termosNotIncludes: [] //TERMOS QUE NÃO PODE ESTÁ INCLUSO
 
				let duvidas = [
				   {
					  termosIncludes: ['spot'],
					  termosNotIncludes: [],
					  titulo: 'Spot LED tem lâmpada?',
					  descricao: 'O Spot LED da Iluminim possui lâmpada de led integrada, não sendo necessário a compra de lâmpadas avulsas.',
				   },
				   {
					  termosIncludes: ['spot'],
					  termosNotIncludes: [],
					  titulo: 'Spot LED é direcionável?',
					  descricao: 'Sim, este modelo possui preciso ajuste direcionável focal.',
				   },
				   {
					  termosIncludes: ['spot'],
					  termosNotIncludes: [],
					  titulo: 'Embutir ou Sobrepor?',
					  descricao: 'O spot de sobrepor é instalado sob o teto fixado por parafuso e bucha, sem necessidade de recorte. <br><br> Já o spot de embutir é instalado rente ao teto com presilhas, necessitando de um corte no forro para a fixação do mesmo.',
				   },
				   {
					  termosIncludes: ['fita'],
					  termosNotIncludes: [],
					  titulo: 'Como cortar Fita de LED?',
					  descricao: 'A Fita LED da Iluminim pode ser cortada a cada 5 centímetros aproximadamente. É possível verificar na própria fita uma marcação pontilhado indicando o local do corte.',
				   },
				   {
					  termosIncludes: ['fita'],
					  termosNotIncludes: [],
					  titulo: 'Diferença entre Fita LED 5050 ou 3528?',
					  descricao: 'A Fita LED 3528 possui consumo médio de 4,8w por metro e é indicada para iluminação decorativa. Já o modelo 5050 possui cerca de 14,8w por metro, três vezes maior do que a fita LED 3528 e outros modelos similares.',
				   },
				   {
					  termosIncludes: ['fita', 'rgb'],
					  termosNotIncludes: [],
					  titulo: 'Como funciona o liga/desliga?',
					  descricao: 'A Fita LED RGB da Iluminim acompanham controle com função de liga e desliga.',
				   },
				   {
					  termosIncludes: ['fita', 'rgb'],
					  termosNotIncludes: [],
					  titulo: 'A Fita LED RGB tem cor branca?',
					  descricao: 'A Fita LED RGB 3528 possui 3 cores, o vermelho, verde e azul. Já a Fita LED 5050 realiza a combinação de 16 cores, o vermelho, verde, azul e mais 13 combinações, incluindo o branco frio e branco quente.',
				   },
				   {
					  termosIncludes: ['fita', 'branco frio'],
					  termosNotIncludes: [],
					  titulo: 'Fita LED Branca Fria com fonte?',
					  descricao: 'Na Iluminim a Fita LED Branca fria é encontrada com fonte e completa para instalação. Acesse a metragem desejada: <a href="/fita-led-branco-frio-5050-5-metros-com-carregador">5 metros</a>,<a href="/fita-led-branco-frio-5050-10-metros-com-carregador"> 10 metros</a>,<a href="/fita-led-branco-frio-5050-15-metros-com-carregador"> 15 metros</a>,<a href="/fita-led-branco-frio-5050-20-metros-com-carregador"> 20 metros</a>,<a href="/fita-led-branco-frio-5050-25-metros-com-carregador"> 25 metros e <a href="/fita-led-branco-frio-5050-30-metros-com-carregador">30 metros</a>.',
				   },
				   {
					  termosIncludes: ['fita', 'branco quente'],
					  termosNotIncludes: [],
					  titulo: 'Fita LED Branco Quente com fonte?',
					  descricao: 'Na Iluminim a Fita LED Branco Quente é encontrada com fonte e completa para instalação. Acesse a metragem desejada: <a href="/fita-led-branco-quente-3528-5-metros-com-fonte-carregador-a-prova-dagua-24w">5 metros</a>,<a href="/fita-led-branco-quente-3528-10-metros-com-fonte-carregador-a-prova-dagua"> 10 metros</a>,<a href="/fita-led-branco-quente-3528-15-metros-com-fonte-carregador-a-prova-dagua"> 15 metros</a>,<a href="/fita-led-branco-quente-3528-20-metros-com-fonte-carregador-a-prova-dagua"> 20 metros</a>,<a href="/fita-led-branco-quente-3528-25-metros-com-fonte-carregador-a-prova-dagua"> 25 metros e <a href="/fita-led-branco-quente-3528-30-metros-com-fonte-carregador-a-prova-dagua">30 metros</a>.',
				   },
				   {
					  termosIncludes: ['fita'],
					  termosNotIncludes: ['fonte/carregador'],
					  titulo: "Fita LED 12V a prova d'água?",
					  descricao: 'A Fita LED da Iluminim possui proteção IP65, sendo resistente a água e poeira.',
				   },
				   {
					  termosIncludes: ['fita', 'rgb', '3528'],
					  termosNotIncludes: [],
					  titulo: "Quais cores a fita 3528 RGB produz?",
					  descricao: 'Esse modelo de Fita LED RGB produz as cores verde, vermelho e azul.',
				   },
				   {
					  termosIncludes: ['fita', 'rgb', '5050'],
					  termosNotIncludes: [],
					  titulo: "Quais cores a fita 5050 RGB produz?",
					  descricao: 'Esse modelo de Fita LED RGB possuem chips que emitem luzes na cor vermelha, verde e azul, que juntas podem reproduzir até 16 cores diferentes, como tons de rosa, azul, vermelho, laranja, amarelo, e branco.',
				   },
 
 
				   {
					  termosIncludes: ['fonte chaveada'],
					  termosNotIncludes: [],
					  titulo: 'Fonte LED é bivolt?',
					  descricao: 'Sim, todas as Fontes LED comercializadas pela Iluminim possuem bi-voltagem automática.',
				   },
				   {
					  termosIncludes: ['fonte chaveada'],
					  termosNotIncludes: [],
					  titulo: 'Qual fonte usar para Fita de LED?',
					  descricao: 'O ideal é sempre utilizar 1 ampér a cada 10W de consumo. Assim, cabe calcular o consumo x metragem de sua Fita LED, para que possa saber qual é a Fonte recomendada.',
				   },
 
 
				   {
					  termosIncludes: ['luminária', 'emergência'],
					  termosNotIncludes: [],
					  titulo: 'Qual fonte usar para Fita de LED?',
					  descricao: 'O ideal é sempre utilizar 1 ampér a cada 10W de consumo. Assim, cabe calcular o consumo x metragem de sua Fita LED, para que possa saber qual é a Fonte recomendada.',
				   },
				   {
					  termosIncludes: ['luminária', 'emergência', '24 leds'],
					  termosNotIncludes: [],
					  titulo: 'A Luminária de Emergência 24 LEDs é recarregável?',
					  descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
				   },
				   {
					  termosIncludes: ['luminária', 'emergência', '30 leds'],
					  termosNotIncludes: [],
					  titulo: 'A Luminária de Emergência 30 LEDs é recarregável?',
					  descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 6 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
				   },
				   {
					  termosIncludes: ['luminária', 'emergência', '42 leds'],
					  termosNotIncludes: [],
					  titulo: 'A Luminária de Emergência 42 LEDs é recarregável?',
					  descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 6 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
				   },
				   {
					  termosIncludes: ['luminária', 'emergência', '60 leds'],
					  termosNotIncludes: [],
					  titulo: 'A Luminária de Emergência 60 LEDs é recarregável?',
					  descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 6 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
				   },
 
				   {
					  termosIncludes: ['luminária', 'emergência', '100 lúmens'],
					  termosNotIncludes: [],
					  titulo: 'A Luminária de Emergência 100 Lúmens é recarregável?',
					  descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
				   },
				   {
					  termosIncludes: ['luminária', 'emergência', '200 lúmens'],
					  termosNotIncludes: ['2.200 lúmens', '1200 lúmens', '24 leds'],
					  titulo: 'A Luminária de Emergência 200 Lúmens é recarregável?',
					  descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 6 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
				   },
				   {
					  termosIncludes: ['luminária', 'emergência', '400 lúmens'],
					  termosNotIncludes: [],
					  titulo: 'A Luminária de Emergência 400 Lúmens é recarregável?',
					  descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
				   },
				   {
					  termosIncludes: ['luminária', 'emergência', '1200 lúmens'],
					  termosNotIncludes: [],
					  titulo: 'A Luminária de Emergência 1.200 Lúmens é recarregável?',
					  descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
				   },
				   {
					  termosIncludes: ['luminária', 'emergência', '2.200 lúmens'],
					  termosNotIncludes: [],
					  titulo: 'A Luminária de Emergência 2.200 Lúmens é recarregável?',
					  descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
				   },
				   {
					  termosIncludes: ['luminária', 'emergência', '3.000 lúmens'],
					  termosNotIncludes: [],
					  titulo: 'A Luminária de Emergência 3.000 Lúmens é recarregável?',
					  descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
				   },
				   {
					  termosIncludes: ['luminária', 'emergência', '50 lúmens'],
					  termosNotIncludes: [],
					  titulo: 'A Luminária de Emergência 50 Lúmens é recarregável?',
					  descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
				   },
				   {
					  termosIncludes: ['luminária', 'emergência', '50 lúmens'],
					  termosNotIncludes: [],
					  titulo: 'A Luminária de Emergência 50 Lúmens é recarregável?',
					  descricao: 'Sim! Essa luminária possui bateria recarregável e vem com cabo para conectar a energia elétrica. Ela garante autonomia de aproximadamente 3 horas fora da tomada depois de carregada e após descarregada, pode-se facilmente recarregá-la para nova utilização.',
				   },
				   {
					  termosIncludes: ['luminária plafon'],
					  termosNotIncludes: [],
					  titulo: 'Diferença de Sobrepor e Embutir?',
					  descricao: 'O Plafon de Sobrepor é instalado de forma que se sobressaia ao teto, já o Plafon de Embutir fica rente ao teto, sendo necessário um recorte no forro.',
				   },
 
 
 
				   {
					  termosIncludes: ['lâmpada'],
					  termosNotIncludes: ['tubular'],
					  titulo: 'Lâmpada LED é econômica?',
					  descricao: 'A Lâmpada LED consome menos energia elétrica, pois é 12 vezes mais eficiente que a lâmpada incandescente. Isso representa uma economia de aproximadamente 80% na conta de luz.',
				   },
				   {
					  termosIncludes: ['lampada'],
					  termosNotIncludes: ['tubular'],
					  titulo: 'Lâmpada LED é econômica?',
					  descricao: 'A Lâmpada LED consome menos energia elétrica, pois é 12 vezes mais eficiente que a lâmpada incandescente. Isso representa uma economia de aproximadamente 80% na conta de luz.',
				   },
 
 
				   {
					  termosIncludes: ['lâmpada', 'tubular'],
					  termosNotIncludes: [],
					  titulo: 'Tubular LED precisa de reator?',
					  descricao: 'Não é necessário. Isso acontece porque ela possui um driver integrado que elimina a necessidade de uso desse dispositivo para o funcionamento.',
				   },
				   {
					  termosIncludes: ['lampada', 'tubular'],
					  termosNotIncludes: [],
					  titulo: 'Tubular LED precisa de reator?',
					  descricao: 'Não é necessário. Isso acontece porque ela possui um driver integrado que elimina a necessidade de uso desse dispositivo para o funcionamento.',
				   },
 
 
 
				   {
					  termosIncludes: ['lâmpada', 'tubular'],
					  termosNotIncludes: [],
					  titulo: 'Posso substituir Lâmpada Fluorescente por LED?',
					  descricao: 'Sim, basta uma modificação simples na fiação da luminária já existente. Saiba mais <a href="https://blog.iluminim.com.br/saiba-como-instalar-uma-lampada-tubular-de-led/">aqui</a>',
				   },
				   {
					  termosIncludes: ['lampada', 'tubular'],
					  termosNotIncludes: [],
					  titulo: 'Posso substituir Lâmpada Fluorescente por LED?',
					  descricao: 'Sim, basta uma modificação simples na fiação da luminária já existente. Saiba mais <a href="https://blog.iluminim.com.br/saiba-como-instalar-uma-lampada-tubular-de-led/">aqui</a>',
				   },
 
 
				   {
					  termosIncludes: ['refletor'],
					  termosNotIncludes: [],
					  titulo: 'Refletor LED precisa de reator?',
					  descricao: 'Não, o Refletor de LED possui um driver integrado que elimina a necessidade de uso do reator para o funcionamento.',
				   },
				   {
					  termosIncludes: ['refletor'],
					  termosNotIncludes: [],
					  titulo: 'Refletor LED ilumina quantos metros?',
					  descricao: 'O Refletor LED tem uma média de iluminação de 1 metro por 700 lúmens aproximadamente.',
				   },
 
 
				   {
					  termosIncludes: ['refletor', 'sensor'],
					  termosNotIncludes: [],
					  titulo: 'Como funciona o sensor?',
					  descricao: 'A movimentação causada pela entrada de alguém no ambiente faz com que a luz seja acionada automaticamente. O sensor é desligado logo após a saída dos ocupantes.',
				   },
				   {
					  termosIncludes: ['refletor', 'sensor'],
					  termosNotIncludes: [],
					  titulo: 'Pode ser instalado em áreas externas?',
					  descricao: 'Sim, o índice de proteção IP66 garante máximo nível de proteção contra água e poeira.',
				   },
 
 
				   {
					  termosIncludes: [],
					  termosNotIncludes: [],
					  titulo: 'Produto pronto para instalar?',
					  descricao: 'Os produtos LED da Iluminim acompanham todas as peças necessárias para a instalação.'
				   },
				   {
					  termosIncludes: [],
					  termosNotIncludes: [],
					  titulo: 'Garantia',
					  descricao: '<div class="descricao-duvidas-rapidas-garantia textos-duvidas"> <div class="first-garantia"> <div class="txtfirst"> <h5 class="titulo-garantia">Compra Garantida</h5> <p>Se houver algum problema ou se não receber o produto que comprou, devolveremos o dinheiro.</p></div></div><div class="nth-garantia"> <div class="txtnth"> <h5 class="titulo-garantia">Você sempre terá a nossa ajuda</h5> <p>Estaremos ao seu lado até você receber o que comprou e nos avisar que está tudo correto. Se tiver algum problema, basta nos avisar.</p><a href="/pagina/compra-garantida.html">Conheça mais o Compra Garantida</a> </div></div><div class="last-garantia"> <div class="txtlast"> <h5 class="titulo-garantia">Garantia do vendedor</h5> <div><div class="garatia-txt">3 ANOS</div>DE GARANTIA COMPROVADA, <div class="maior-mercado">A MAIOR DO MERCADO.</div><div>PRODUTO COM NOTA FISCAL</div></div></div></div></div>'
				   },
				   {
					  termosIncludes: [],
					  termosNotIncludes: [],
					  titulo: 'Loja confiável?',
					  descricao: 'A Iluminim está presente no mercado online desde 2010 e possui mais de 400 mil clientes satisfeitos em todo o Brasil. Confira alguns dos selos conquistados: ABCOMM, Ebit Ouro, Trustvox, Site Blindado e mais!'
				   },
				]
 
 
				let duvidas_filtradas = [];
 
				duvidas.forEach(item=> {
 
				   let countIncludes = 0;
				   let countNotIncludes = 0;
 
				   let { termosIncludes, termosNotIncludes } = item;
 
				   termosIncludes.forEach(termo=> {
 
					  if( nome_produto.includes(termo) ){
							countIncludes = countIncludes + 1;
					  }
 
				   });
 
				   if( termosNotIncludes.length > 0 ){
					  termosNotIncludes.forEach(termo=> {
 
							if( nome_produto.includes(termo) ){
							   countNotIncludes = countNotIncludes + 1;
							}
 
					  });
				   }
 
				   if(countNotIncludes == 0){
 
					  if(countIncludes == termosIncludes.length){
							
							duvidas_filtradas.push(item);
 
					  }
 
				   }
 
				});
 
				return duvidas_filtradas;
 
		  },
 
		  gerarHTML(){
 
				let duvidas = this.gerarObjeto();
 
				if(!duvidas) return;
 
				let html = duvidas.map((item, index)=> {
 
				   let id = Date.now();
				   let { titulo, descricao } = item;
 
				   $('body').append(`
					  <div class="modal modal-personalizado fade" id="modal_${id}_${index}">
 
							<div class="modal-dialog" role="document">
 
							   <div class="modal-content">
 
								  <div class="modal-header">
										<h5 class="modal-title" id="exampleModalLongTitle">${titulo}</h5>
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
										</button>
								  </div>
 
								  <div class="modal-body">
										<div class="descricao-duvidas-rapidas">
										   ${descricao}
										</div>
								  </div>
 
								  <div class="modal-footer">
										<button type="button" class="btn btn-secondary btn-custom" data-dismiss="modal">Fechar</button>
								  </div>
 
							   </div>
 
							</div>
 
					  </div>
				   `);
 
				   return `
					  <li class="item-duvida" data-toggle="modal" data-hash="#modal_${id}_${index}" data-target="#modal_${id}_${index}">
							${ titulo }
					  </li>
				   `;
 
				}).join('');
 
				return html;
 
		  },
 
		  renderizar(){
 
				let html = this.gerarHTML();
 
				if(!html) return;
 
				$('#descricao').after(`
				   <div class="descricao-conteudo-accordion duvidas-rapidas">
					  <div class="descricao-titulo duvidas-rapidas-titulo">
							<span class="descricao-icone">${ILUMINIM_UTILS.icones.descricao_produto.duvidas}</span>
							<span>Dúvidas Rápidas</span>
					  </div>
					  <div class="descricao-conteudo duvidas-rapidas-conteudo">
							<ul class="lista-duvidas-rapidas">
							   ${html}
							</ul>
					  </div>
				   </div>
				`);
 
		  }
 
	   }
 
 
	   duvidasRapidas.renderizar();
 
	},
 
	iluminimLEDExplica(){
 
	   let iluminimLEDExplica = {
 
		  gerarObjeto(){
 
				let nome_produto = ILUMINIM_UTILS.produto.nome().toLowerCase();
 
				//termosIncludes: [] //TERMOS QUE PODE ESTÁ INCLUSO
				//termosNotIncludes: [] //TERMOS QUE NÃO PODE ESTÁ INCLUSO
 
				let duvidas = [
				   {
					  termosIncludes: ['fita', 'led'],
					  termosNotIncludes: ['rgb'],
					  titulo: 'Qual a diferença entre a fita led 3528 e 5050:',
					  descricao_resumo: 'Conheças as diferenças entre a Fita LED 3528 e 5050 e as suas principais características.',
					  descricao_completa: `
							A fita LED 3528 possui medida de 8 mm e seu consumo médio é de 5w por metro, o que gera aproximadamente 220 lm/m. Pode ser cortada no tamanho que você desejar e costuma ter espaços para corte a cada três LEDs. Seus LEDs são menores, com cerca de 3,5 mm por 2,8 mm.
							</br>
							</br>
							A fita LED 5050 possui medida de 10 mm de largura e é consideravelmente mais potente em relação ao modelo anterior, pois além de ter LEDs triplos, seus LEDs são maiores, medindo 5 mm por 5 mm. Seu consumo médio é de cerca de 15w por metro, três vezes maior do que a fita LED 3528.
					  `,
				   },
				   {
					  termosIncludes: ['fita', 'led'],
					  termosNotIncludes: ['rgb'],
					  titulo: 'O que é branco frio e branco quente?',
					  descricao_resumo: 'Saiba o que é temperatura de cor e como aplicá-la corretamente em sua casa ou ambiente comercial.',
					  descricao_completa: `
							O branco frio varia de 6.000 K a 6.500 K, e é o tipo de luz mais claro e tem um tom azulado. A luz fria é frequentemente usada em locais de trabalho, como escritórios e armazéns onde predominam cores vivas como branco, azul ou violeta. Também é comumente usado em residências, em cozinhas e corredores.
							</br>
							</br>
							O branco quente varia de 3.500 K a 4.000 K, e tem uma tonalidade amarelada. É ideal para uso residencial — quartos, salas de estar, lounges —, onde recriam ambientes relaxantes. É conhecido como a tonalidade mais amarelada da luz.
					  `,
				   },
 
 
				   {
					  termosIncludes: ['spot', 'trilho'],
					  termosNotIncludes: ['metro'],
					  titulo: 'Como instalar o Spot LED Trilho?',
					  descricao_resumo: 'Aprenda a instalar o Spot LED Trilho na sua residência ou ambiente comercial!',
					  descricao_completa: `
							A instalação é bem simples, basta encaixar os spots no trilho eletrificado e fixá-lo no teto. Atente-se para a posição dos móveis na hora de definir o local de cada lâmpada. O Spot é direcionável, o que possibilita que a luz seja direcionada para os locais que se deseja mais iluminação.
					  `,
				   },
				   {
					  termosIncludes: ['spot', 'trilho'],
					  termosNotIncludes: ['metro'],
					  titulo: 'Como usar o Spot LED Trilho na decoração?',
					  descricao_resumo: 'Saiba como utilizar o Spot LED Trilho na decoração e iluminação de ambientes internos!',
					  descricao_completa: `
							Uma boa dica para deixar o local com ar mais arrumado é usar o trilho eletrificado do mesmo tom do teto, geralmente o branco. Já, se você busca um estilo mais modernou ou industrial, os trilhos e spots pretos podem ser uma boa opção!
					  `,
				   },
 
 
				   {
					  termosIncludes: ['refletor', 'led'],
					  termosNotIncludes: [],
					  titulo: 'O Refletor LED ilumina quantos metros?',
					  descricao_resumo: 'Saiba a distância que a luminosidade dos Refletores de LED alcançam.',
					  descricao_completa: `
							A distância depende do modelo de Refletor e sua tecnologia, porém geralmente seguem este padrão:
							</br>
							</br>
							<ul>
							   <li>10W até 1 metro;</li>
							   <li>20W até 2 metros;</li>
							   <li>30W até 3 metros;</li>
							   <li>50W até 4 metros;</li>
							   <li>100W até 8 metros;</li>
							   <li>150W até 12 metros;</li>
							   <li>200W até 16 metros.</li>
							</ul>
					  `,
				   },
				   {
					  termosIncludes: ['refletor', 'led'],
					  termosNotIncludes: [],
					  titulo: 'O que considerar na compra de um Refletor LED?',
					  descricao_resumo: 'Entenda o que é importante saber na hora de adquirir um refletor.',
					  descricao_completa: `
							Os pontos que deve ser levado em consideração na hora de adquirir um refletor LED são:
							</br>
							</br>
							<ul>
							   <li>escolher o modelo de acordo com a sua necessidade (modelos como Sensor de Presença ou Solar, por exemplo);</li>
							   <li>ter em mente o local que será instalado;</li>
							   <li>quantidade de luz emitida por Watt;</li>
							   <li>fornecedores especializados em soluções de LED (como a Iluminim);</li>
							   <li>evite adquirir refletores de baixa qualidade.</li>
							</ul>
					  `,
				   },
				]
 
 
				let duvidas_filtradas = [];
 
				duvidas.forEach(item=> {
 
				   let countIncludes = 0;
				   let countNotIncludes = 0;
 
				   let { termosIncludes, termosNotIncludes } = item;
 
				   termosIncludes.forEach(termo=> {
 
					  if( nome_produto.includes(termo) ){
							countIncludes = countIncludes + 1;
					  }
 
				   });
 
				   if( termosNotIncludes.length > 0 ){
					  termosNotIncludes.forEach(termo=> {
 
							if( nome_produto.includes(termo) ){
							   countNotIncludes = countNotIncludes + 1;
							}
 
					  });
				   }
 
				   if(countNotIncludes == 0){
 
					  if(countIncludes == termosIncludes.length){
							
							duvidas_filtradas.push(item);
 
					  }
 
				   }
 
				});
 
				return duvidas_filtradas;
 
		  },
 
		  gerarHTML(){
 
				let duvidas = this.gerarObjeto();
 
				if(!duvidas) return;
 
				let html = duvidas.map((item, index)=> {
 
				   let id = Date.now();
				   let { titulo, descricao_completa, descricao_resumo } = item;
 
				   $('body').append(`
					  <div class="modal modal-personalizado fade" id="modal_${id}_${index}">
 
							<div class="modal-dialog" role="document">
 
							   <div class="modal-content">
 
								  <div class="modal-header">
										<h5 class="modal-title" id="exampleModalLongTitle">${titulo}</h5>
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
										</button>
								  </div>
 
								  <div class="modal-body">
										<div class="descricao-iluminim-led-explica">
										   ${descricao_completa}
										</div>
								  </div>
 
								  <div class="modal-footer">
										<button type="button" class="btn btn-secondary btn-custom" data-dismiss="modal">Fechar</button>
								  </div>
 
							   </div>
 
							</div>
 
					  </div>
				   `);
 
				   return `
					  <div class="item-led-explica" data-toggle="modal" data-hash="#modal_${id}_${index}" data-target="#modal_${id}_${index}">
							
							<div class="led-explica-icone"><i class="fas fa-bars"></i></div>
							<div class="led-explica-conteudo">
							   <div class="led-explica-titulo">${ titulo }</div>
							   <div class="led-explica-resumo-descricao">
								  ${ descricao_resumo }
							   </div>
							   <a href="#!">+ Leia mais</a>
							</div>
					  </div>
				   `;
 
				}).join('');
 
				return html;
 
		  },
 
		  renderizar(){
 
				let html = this.gerarHTML();
 
				if(!html) return;
 
				$('#descricao').after(`
				   <div class="descricao-conteudo-accordion iluminim-led-explica">
					  <div class="descricao-titulo iluminim-led-explica-titulo">
							<span class="descricao-icone"><i class="fas fa-bars"></i></span>
							<span>Iluminim LED Explica</span>
							<a href="https://blog.iluminim.com.br/" target="_blank" rel="noopener">+ Veja outros conteúdos</a>
					  </div>
					  <div class="descricao-conteudo iluminim-led-explica-conteudo">
							<div class="lista-iluminim-led-explica">
							   ${html}
							</div>
					  </div>
				   </div>
				`);
 
		  }
 
	   }
 
 
	   iluminimLEDExplica.renderizar();
 
	},
 
	doacoesRealizadas(){
 
	   $('#descricao').after(`
		  <div class="descricao-conteudo-accordion doacoes-realizadas">
				<div class="descricao-titulo descricao-titulo-cuidado-maximo-com-a-sua-encomenda">
				   <span class="descricao-icone">${ILUMINIM_UTILS.icones.descricao_produto.doacoes}</span>
				   <span>Doações - 8.464 doações já realizadas</span>
				</div>
				<div class="descricao-conteudo">
				   <div class="conteudo-doacoes">
					  <span>Veja as causas que apoiamos</span>
					  <ul class="lista-doacoes">
							<li><a target="_blank" rel="noopener" href="https://www.santacasasp.org.br/portal/site">Hospital Santa Casa de São Paulo</a></li>
							<li><a target="_blank" rel="noopener" href="https://www.cufa.org.br/">CUFA - Central Única das Favelas</a></li>
							<li><a target="_blank" rel="noopener" href="https://www.aldeiasinfantis.org.br/">Aldeias Infantis SOS Brasil</a></li>
							<li><a target="_blank" rel="noopener" href="https://polen.com.br/instituto-do-cancer-infantil">Instituto do Câncer Infantil</a></li>
							<li><a target="_blank" rel="noopener" href="http://www.neac.org.br/www.neac.org.br/index.html">NEAC - Núcleo Especial de Atenção à Criança</a></li>
							<li><a target="_blank" rel="noopener" href="https://polen.com.br/sos-amazonia">SOS Amazônia</a></li>
					  </ul>
				   </div>
				</div>
		  </div>
	   `);
 
	},
 
	textosAbaixoBotaoComprar(){
 
	   const textosAbaixoBotaoComprar = {
 
		  objeto: {
 
			 ultimasUnidades: ['R-600WBF', 'XL-5050AZ-KIT2','VLC-4-5WBQ-SC-E27','SMD-Q7WBF-PT','RSPM-50W-SENSOR-BF','RSPM-10W-SENSOR-BF','RS-0801','RS-0541','RS-0380','R-50WRGB','PS-R25WBF-PT','PS-QRE25WBQ-PT','PS-QRE20WBN-PT','PS-QRE20WBF-PT','PS-QRE12WBQ-PT','PS-QRE12WBQ','PS-50W','PS-100W','POSE-30WBF','POE-9708','PL-6-5WBQ-70','PG-RT60WBF-30X120','PG-RT36WBQ-30X60-PT','PG-Q25WBF-RO','PF-AS1-2M','PE-TUBO-CONC-E27','PE-PEROLA-BNC-MINI-PF','P-CAGE-PRETO','PAR20-7WBF-IP54','MR11-GU10-4WBF','ML-USB-AM','LY-8730M-BC-BC','L-U12WBQ','LB-LT-G80-5W','GD-FD3601BF','D-RAB1WBF-PT','DR-50W','D-QABRE-PAR20-AZ','D-QABRE-GU10-VE','D-QABRE-GU10-RO','D-QABRE-GU10-AZ','COB-Q3WBF','BP-2WBQ-BR-2','ARA-RT6WBQ','ARA-4WAB-BN','333','26568','24288','1010','VLV-2WBQ-E14-CC-110V','T5C-60-9W-L-BF','STB-12-BQ','SL-93127L-C6','SL-5834-H8-CLEAR','PS-RT60WBN-30X120','PS-RT36WBQ-30X60-MARROM','PS-RT18WBF-10X60-PT','PS-QRE25WBF-PT','PG-R18WBQ-MARROM','PG-R18WBF-CZ','PE-REGGIO-P-CAR','PE-PEROLA-GT-DUO-PF','PE-CHAMO-BR','PE-BARI-P-CAR','LY-8762M-PT-DR','LJC-W30-6500K','D-QABRE-PAR20-TUR','D-AB5WBF-BRAZ','BULBO-15WBQ-R','BS-2S-E27','BOLINHA-1W-AM','ARA-R15WBF','AHD-9008N','1905','1902','XL-5050AZ-KIT1','XL-5050AZ','SMD-Q7WBQ-PT','RS-0215','R-50WBF-SENSOR','PS-R25WBQ-MARROM','PS-QRE25WBN-PT','PS-QRE12WBF-PT','PS-Q3WBN','PE-PEROLA-LIBRA-PF','PE-CP5-COLOR-E27','BOLINHA-3W-VE','5473','YM-B110','XL-5050VM-KIT3','T5C-30-6W-L-BN','SMD-R5WBQ-PT','R-200WRGB','PS-RT24WBN-30X60','PS-R12WBF','PSM-200WBF-FOTOELETRICO','PE-STOVE-130MM','PE-REGGIO-G-PAL','PE-PER-BNC-PF','PE-GEN-BR','NE-50VM-110V','MR11-GU10-3-8BQ-DIM','LY-8762L-BC-BC','L-U18WBQ','LM-OSLO-PT','D-QAB5WBQ-PT','D-QAB5WBF-VM','CB-FL-2-5-PT-100M','U7-15W','RS-0601','R-20WRGB','POST-50WBF','PG-Q25WBF-VM','PE-TRI-18W','PE-TNG-24W','LY-8788M-BC-AZ','F-S-W','ABJ-OSLO-P-PAL','SL-93779-C9-CHP','QCFL4-CP-USB','PS-R12WBQ-MARROM','PG-Q25WBF-MARROM','PE-RAGNAR-CAR','PE-CAGE-500MM-COF','PAR20-4-8W-BN-IP54','LV-A19-DEF-6W','FITA-AUT-5M','D-QAB1WBF-AZ','ARA-RT3WBQ-BR','ARA-R15WBQ','3503-EN','2020','STP-18-BQ','RS-01001VD-BELGICA','R-10WBF-SENSOR','PG-R12WBQ-PT','PE-BJF-TAB','FILTRO-4T-CB','D-QABRE-PAR20-CZ','TY-MB0410','SOQ-T10','R-200WBF-PREMIUM','PS-Q6WBF','PE-BJF-PAL','D-AB5WBQ-PTBR','821','PG-RT30WBQ-10X120-MARROM','LV-3D-E27','EXT-3T-3M-PT','D-AB5WBF-PTBR','CC-P4-1F-2M','ABAJUR-DINOSSAURO','XL-3528BM-KIT3','T1-30A','PS-R3WBQ-MARROM','PS-Q6WBF-MARROM','PS-Q12WBF-MARROM','PE-PEROLA-ARC-DUO-PF','LV-D95-4W','T10-9LEDS','SOR-300WBF','PS-QRE12WBN-PT','PSM-100WBF','D-AB5WBQ-RO','1818','PE-YMIS-PAL','CB-FL-1-5-VM-100M','101HD','PS-R36WBN','PE-MINI-BARI-TAB','DPS-E40','D-AB5WBQ-VMBR','C6-H11','ABJ-CLASSIC-P-PAL','XL-5050VE','T5C-60-9W-L-BQ','STROBO-108LEDS-RGB','STM-7W-BQ-SOB','PS-R18WBN-PT-PREMIUM','PG-Q18WBN-MARROM','CP-SF','ABAJUR-BR-VE','1904','RW-30WBF','R-20WBQ','PS-RT36WBQ-15X120-PT','PS-R24WBF-SB','PS-Q12WBF-SB','PE-POLIG-CONC-E27','PS-RT36WBF-15X120','PG-Q6WBN','PAR20-7WVE','L-U80WBF','POSE-150WBF','PE-SOQ-PR-015','PE-GLOBO-CAR','PAR38-14WBF','SOBD-2W','PS-RT48WBN-30X120','MOL-VM','DJ-7WBF','ARA-8WBF-PT','STM-7WBF-SOB','PE-RAGNAR-TAB','PE-011-E27','24160','PE-GLOBO-PAL','PE-016-E27','NR-3WBQ-CZ','EXT-3T-5M-PT','D-QAB7WBF-CZ','DL-PT','DJ-9WVE','CB-FL-4-VD-100M','ARA-RT3WBQ-PT','T10-CREE-10LEDS-VE','PS-Q24WBQ-SB','CE-RGB-4P-1T6-PRETA','MTX-100WBF','L-PCB-RGB','C4-PM-5050RGB-10MM','1901','TL-2-B','PE-013-E27','SMD-R7WBF-PT','RGB-1000MM-B','PS-R6WBN-PT','PS-R25WBN-PT','C6-H4','D-QABRE-AR70-PT','XS-A50W-6500K','STROBO-108LEDS','SOQ-E27-RABICHO','RS-0550','RGB-5000MM-W','PS-RT36WBQ-30X60','PS-R6WBF-MARROM','PS-R18WBN-SB','PS-QRE20WBQ','PS-Q36WBQ-40X40-PT','PG-RT30WBN-10X120','PE-VID-ARIZ-AMB','PE-RANA-PF','PE-BARI-P-PAL','PE-006-CP5-E27','LUX-POWER-2688AHD','LT-120VE','EXT-3T-3M-BR','D-QABRE-PAR20-VE','D-QABRE-PAR20-RO','D-QABRE-PAR20-AM','D-QABRE-GU10-TUR','D-QABRE-GU10-AM','D-QAB5WBF-CZ','CD2020003-1','CB-FL-2-5-VD-20M','CB-FL-1-5-VM-30M','BOLINHA-1W-LAR','BA15-22LEDS-1POLO-VM','B5P-12','ARA-AR3WBQ','25340','202','1429-EN','1311','XS-A30W-6500K','XDT60-150CM','T-PCB2-RGB','T5C-60-9W-L-BN','STP-18-BN','ST64-3W','SL-5834-H5-CLEAR','SL-5677L-C8','RW-150WBF','RS-01001AM-BELGICA','R-400WRGB','QA26M','PS-Q6WBN-PT','PSM-150WBF','PG-RT36WBQ-30X60-MARROM','PG-RT36WBQ-30X60','PG-RT18WBQ-10X60-MARROM','PG-R6WBF-MARROM','PG-R18WBN-PT','PE-ZUR-BR','PAR20-4-8W-BQ-IP54','ML-USB-VE','LY-8762M-BC-DR','LY-8736M-PT-PT','GKD-150W','D-AC12WBQ','ARA-15X20','12V-15A','XL-5050VE-KIT2','T5C-90-14W-L-BN','STP-18-BF','SL-93128S-C4','SL-5834-H3-CLEAR','RSAZ-50WBF','QCFL4-CL-USB','PS-RT48WBN-30X120-PT','PS-R25WBF-MARROM','PL-6WBQ-50','PG-Q25WBF-CZ','PE-REGGIO-P-PAL','PE-MINI-BARI-PAL','PE-MINI-BARI-CAR','D-AB5WBQ-VM','BP-RT3WBQ-BR','BP-2WBQ','TORPEDO-6LEDS-31MM','SL-93779-C9','RS-0602','PS-RT48WBQ-30X120','PS-Q3WBQ-MARROM','PL-6WBQ-70','PG-R25WBF-MARROM','PG-Q18WBF-VM','PE-REGGIO-G-TAB','LY-8809BM-PT','LP-31828','25327','1438-ES','1438-EP','013BR','XL-5050RGB-KIT2','XL-3528AZ-KIT2','SOR-80WBF','SOR-200WBF','RS-0220N','PG-Q18WBQ','PE-REGGIO-P-TAB','PE-REGGIO-G-CAR','NR-3WBF-VM','LY-8809BM-BC','LB-4W-C-E27','D-AB7WBQ-BRCZ','D-AB5WBQ-PT','CP-50WBF','CB-FL-2-5-VD-100M','ARA-8WBQ-PT','ARA-4WBQ-PT','ABJ-OSLO-P-CAR','ABJ-CLASSIC-P-CAR','311','VLV-2WBQ-E27-SC','RS-0840','RS-0610','RS-0230N','PS-R6WBQ-MARROM','PS-R3WBF-VE','PS-R3WBF-MARROM','PS-Q42WBF-40X40','PG-R6WBQ-MARROM','PG-R25WBF-CZ','PE-LOKI-PAL','PE-CHAPEU-CONC-E27','PE-CAGE-500MM-PF','PE-CAGE-300MM-COF','F-12V-2A','CC-01001','ABAJUR-14LEDS-VE','QCFL4-CP','PS-Q6WBQ-MARROM','PSM-100WBF-FOTOELETRICO','PE-YMIS-TAB','PE-PEROLA-CONSTELACAO-PF','PE-BJF-CAR','NQ-3WBQ-CZ','G125-5W-FUM','D-QABRE-MR11-PT','25328','1909','SOQ-BAY15D','SL-5949L-H1-CHR','RS-0104','PG-R18WBF-MARROM','PE-HASH-3X-PF','LJC-W200-6500K','F-S','D-QABRE-GU10-PT','CR-Q24W','CC-P4-1F-3M','CB-FL-4-BR-100M','BULBO-6WVE','XS-A50W-3000K','XL-5050VM-KIT2','VLC-3WBQ-E14-CC','STP-7-BN','PS-QRE25WBF','PG-Q36WBF-40X40-PT','MOL-BR','DPS-E20','D-AB3WBF-PT','ABAJUR-UNICORNIO','SMD-Q3WBF','QCFL4-PP','PS-R18WBF-CZ','PS-Q3WBF-MARROM','PS-Q36WBN-40X40-PT','PS-Q25WBN-PT','PE-HASH-3X-COF','LT-60AZ','D-QAB1WBF-CZ','DJ-9WBQ-PT','BULBO-9W-REP','BULBO-6WRO','T5-120-18W-L-BF','R-20WVE','QR54','LY-8762L-PT-DR','ARA-8WBF','812','STB-7W-BQ-SOB','RS-02001CB-BOLA','R-20WBF','PS-Q32WBN-40X40','PE-BARI-P-TAB','DPS-E15','C6-HB4','ABAJUR-MENINA','4048','PS-R12WBF-PT','PS-Q12WBQ-MARROM','PE-RAGNAR-PAL','EXT-3T-5M-BR','209','1853','TL-1-5-W','T5C-120-18W-L-BF','PE-LOKI-TAB','D-QABRE-GU10-CZ','CD2020025','ARA-12WBQ-BR','RSAZ-50WRO','R-100WBF-PREMIUM','QA27M','PS-R6WBF-CZ','PG-Q6WBQ-PT','PG-Q25WBQ-VM','MOL-AM','G125-4W-LOVE','CB-FL-4-VM-100M','ABAJUR-BR-AZ','XL-3528RGB-KIT1','STP-30-BQ','RS-0227PT','PS-R18WBF-MARROM','PG-Q18WBQ-VM','PE-YMIS-CAR','PE-002-E27','CB-FL-4-PT-100M','CB-FL-1-5-VD-100M','VEDA-ROSCA-50M','RSAZ-50WAZ-12V','PS-R25WBF-PT-PREMIUM','D-QAB3WBQ-CZ','AR111-GU10-BF2','1900','1355-E','1311-E5','112','VLC-2WBQ-E14-CC-110V','RS-0227N','PE-GLOBO-TAB','PE-012-E27','NR-3WBF-CZ','XL-5050BF','XL-3528AZ-KIT1','RSAZ-50WVM-12V','MOL-AZ','HM-34980','FILTRO-5T-CB-USB','FILTRO-5T-CB','111','SMD-R7WBQ','PS-R18WBF-PT','PE-LOKI-CAR','NQ-3WBF-CZ','GKD-100W','RGB-2000MM-B','PAR38-14WBN','BOLINHA-2W-FIL-VM','ABAJUR-PANDA','25922','LT-60VE','G125-4W','D-COB3WBQ','SOR-30WBF','RS-0230PT','PAR20-7WBQ','D-AB3WBF-CZ','ABAJUR-GUITARRA','PG-R25WBQ-MARROM','PG-R12WBQ-MARROM','PG-R12WBF-CZ','F-12V-6A','AR111-GU10-BQ-DIM','XL-3528VM-KIT2','PS-Q18WBQ-SB','1407-ES','XL-3528VE','XL-3528RGB','PS-R18WBQ-PT-PREMIUM','PS-Q36WBF-40X40-PT','PE-017-E27','D-COB006WBF','RS-0225N','RS-02001VM-BOLA','RS-01001VM-BELGICA','PS-RT36WBQ-15X120','INTER-BO-BR','ARA-RISCHI-6WBQ-BR','VEDA-ROSCA-10M','TL-1-W','LV-2D-E27','HBD-001','BP-2WBF','BOLINHA-2W-FIL-AZ','AMP-RGB','25330','1427-EN','STB-7W-BF-SOB','RS-0225PT','LT-60AMB','LJC-W20-6500K','GD-FD2401BN','D-QAB7WBF-PT','D-QAB3WBF-VE','DJ-3WVE','T10-5LEDS','PG-R18WBF-PT','DJ-12WBQ-PT','BULBO-9WBN','BOLINHA-2W-FIL-VE','1908','XL-3528VE-KIT2','PS-R18WBQ-PT','PG-R25WBQ-PT','EI-20-B','DJ-5WBQ','D-COB5WBQ','D-AB3WBQ-CZ','STROBO-15WBF','PSM-150WBF-FOTOELETRICO','PE-008-E27','LT-120AMB','FILTRO-8T-CB','BU-3WBQ','ARA-8WBF-BR','ARA-5WBQ-BR','ABRACA-4-5-NT-300','1410-EN','1409-ESN','PG-R6WBF-CZ','PE-ZUR-PF','PE-015-E27','PAR30-9-8WBN','L-CUBE','D-QAB3WBF-CZ','ABAJUR-FOGUETE','1854','R-30WRGB','LP-33334','D-QAB7WBQ-CZ','XL-5050BF-KIT1','STP-30-BN','R-10WVE','PG-R18WBN-PT-PREMIUM','PG-R12WBF-PT','BULBO-6WVM','ABAJUR-24LEDS','STB-20-BF','RW-100WBQ','RS-0220PT','PG-R6WBF-PT','PG-Q12WBN-PT','PE-SOQ-AL-015','G125-4W-HOME','CFL-4V-1T-5050RGB','CE-RGB-4P-30CM','AR111-GU10-BQ2','XL-3528BF-KIT2','R-10WRGB','NQ-3WBF','BSE40L','ABAJUR-BR-RO','T-1VM','PS-Q12WBF-CZ','G95-5W-FUM','ABAJUR-FRANK','5474','RW-50WBF','RW-20WBQ','NR-3WBF-PT','LV-L80-2-5W','LP-33365','D-AB5WBF-VE','25329','1112','PG-Q12WBQ-PT','LT-240BN','LINEAR-60CM-18WBF','CFC-2V-5050-10MM','013PR','SOQ-PLUG-E27','RGB-2000MM-W','R-30WBQ','NQ-3WBQ','GD-FD1201BN','XL-3528VE-KIT3','XL-3528RGB-KIT2','QA21M','L-U9WBF','L-PCB-10','4049','PS-R18WBN-PT','PE-CORDA-1-E27','L-TWIST','27025','XL-5050BQ-KIT1','PE-SOQ-BR-015','LC-9W','G95-4W','ARA-Q6WBQ','ALTAPOTENCIA-100WBF','12V-20A','TL-2-W','PS-Q12WBQ-PT','LB-LT-G95-4W','D-QAB3WBQ','DJ-7WVE','XL-5050BQ-KIT2','INTER-BO-CZ','ARA-Q6WBQ-PT-2','XL-5050BQ-KIT3','T45-4W','SOQ-E27-PR','PG-RT60WBQ-30X120','IP03CK','LB-5WBQ','1499-ESN','XL-3528VM-KIT3','PS-R3WBQ-PT','PS-R3WBQ','PG-Q32WBN-40X40','LV-G95-DEF-6W','ARA-BO12WBQ-BR','1851','G9B-5WBF-110V','C6-H1','SOLA-2WBF-BR','PG-Q25WBF','PE-006-E27','ARA-RISCHI-6WBQ-PT','XL-3528BF-KIT1','T5C-30-6W-L-BQ','LB-LT-2W','D-COB5WVE','25278','SMD-SENSOR-3WBQ','PAR20-8WW','CAC-2V-2T-3528','XL-3528VM-KIT1','RS-02001BR-BOLA','ABAJUR-8LEDS','1497-EN','PS-Q25WBF-PT','PCB-2V-10MM-CRUZ','D-QAB7WBQ-PT','VLC-SC-4-8WBQ-DIM','SOR-60WBF','31067','PG-R18WBQ-PT','FILTRO-10T-CB','PE-007-E27-MINI','PE-005-E27','PS-Q12WBF-PT','D-QAB7WBF','CP-10WBQ','BNC-CAMERA','D-COB7WBF','XL-3528VE-KIT1','ST64-5W-FUM','LJC-W400-6500K','D-QAB7WBQ','CC-4P-5050RGB-10MM','ABRACA-3-5-NT-150','RW-10WBQ','PS-R25WBQ-PT','PS-Q6WBF-PT','EI-20-W','CR-R30W','ARA-2WBQ','XL-3528AM','PE-003-E27','24707','PS-Q3WBQ-PT','CONTROL-WIRELESS-RGB','CFL-2V-5050-P4-F','PE-009-E27-MINI','CT-3528BF-8MM','BULBO-6WLR','PE-008-E27-MINI','PCB-2V-8MM-CRUZ','BOLINHA-3W-VM','M-2T4','XL-5050BF-KIT2','RGB-5000MM-B','RE-7-5WBF','PS-Q3WBN-PT','PE-010-E27-MINI','CN-01040PT','PE-005-E27-MINI','VLV-2WBQ-E14-SC-220V','PS-R6WBF-PT','LAMP-CAM','25276','RS-0060','5050-SMD-BF','PS-R6WBQ-PT','PS-R12WBQ-PT','F-C-10','F-12V-3A','EL-19-W','PS-Q3WBF-PT','DJ-12WVE','SOQ-VINTAGE-OU','BOLINHA-1W-VM','STB-10-BF','SOQ-PE27-BR','CONTROLADOR-CONECTOR-BRANCO','RS-02001PT-BOLA','CP-50WBQ','ARA-8WBQ-BR','SOLA-2WBF','SOQ-PE27-PT','PG-RT18WBQ-10X60','PG-Q32WBQ-40X40','PG-R25WBQ','ARA-CB-6WBQ-BR','VLL-3WBQ-E27-SC','LV-CORA-4W','ARA-3WBQ','XL-3528BF-KIT3','PE-007-E27','TL-1-5-B','SOQ-VINTAGE-PR','QA20M','PG-Q36WBF-40X40','SOQ-VINTAGE-PRATA','PG-Q6WBF-PT','D-QAB5WBQ','PG-R25WBF-PT','FILTRO-3T-CB','DR-10W','M-1T1','F-C-8','CC-2P-3528-8MM','PS-R3WBF','PS-Q32WBQ-40X40','HM-34973','C6-HB3','BULBO-5WRGB','1021'],
	
			 precoValido: ['XL-5050VM-KIT5','XL-5050VM-KIT3','XL-5050VM-KIT2','XL-5050VM-KIT15','XL-5050VM-KIT1','XL-5050VE-KIT5','XL-5050VE-KIT25','XL-5050VE-KIT15','XL-5050RGB-KIT30','XL-5050RGB-KIT3','XL-5050RGB-KIT25','XL-5050RGB-KIT2','XL-5050RGB-KIT10','XL-5050RGB-KIT1','XL-5050BQ-KIT30','XL-5050BQ-KIT3','XL-5050BQ-KIT25','XL-5050BQ-KIT20','XL-5050BQ-KIT2','XL-5050BQ-KIT1','XL-5050BM-KIT5','XL-5050BM-KIT3','XL-5050BM-KIT25','XL-5050BM-KIT20','XL-5050BM-KIT2','XL-5050BM-KIT15','XL-5050BF-KIT5','XL-5050BF-KIT30','XL-5050BF-KIT3','XL-5050BF-KIT20','XL-5050BF-KIT2','XL-5050BF-KIT15','XL-5050BF-KIT100-110V','XL-5050BF-KIT10','XL-5050BF-KIT1','XL-5050AZ-KIT5','XL-3528VM-KIT5','XL-3528VM-KIT3','XL-3528VM-KIT2','XL-3528VM-KIT1','XL-3528VE-KIT5','XL-3528VE-KIT25','XL-3528VE-KIT20','XL-3528VE-KIT100-110V','XL-3528RGB-KIT5','XL-3528RGB-KIT3','XL-3528RGB-KIT25','XL-3528RGB-KIT20','XL-3528RGB-KIT15','XL-3528RGB-KIT100-110V','XL-3528RGB-KIT1','XL-3528BQ-KIT3','XL-3528BQ-KIT25','XL-3528BQ-KIT2','XL-3528BQ-KIT100-110V','XL-3528BQ-KIT10','XL-3528BQ-KIT1','XL-3528BM-KIT5','XL-3528BM-KIT30','XL-3528BM-KIT3','XL-3528BM-KIT2','XL-3528BM-KIT10','XL-3528BF-KIT15','XL-3528BF-KIT100-220V','XL-3528BF-KIT10','XL-3528BF-KIT1','XL-3528AZ-KIT2','XL-3528AZ-KIT1','TL-01010PT-KIT4','TL-01010PT-KIT2','TL-01010BR-KIT2','STP-10-BQ-KIT10','STP-10-BN-KIT12','STB-10-BQ-KIT5','STB-10-BQ-KIT12','SOQ-T8-KIT50','SOQ-T8-KIT5','SOQ-T8-KIT20','SOQ-T8-KIT12','SOQ-T8-KIT10','SMD-R7WBQ-KIT5','SMD-R7WBQ-KIT12','SMD-R7WBQ-KIT10','SMD-R7WBF-KIT5','SMD-R7WBF-KIT12','SMD-R7WBF-KIT10','SMD-R6-5WBQ-KIT5','SMD-R5WBQ-KIT5','SMD-R5WBQ-KIT20','SMD-R5WBN-KIT12','SMD-R5WBF-KIT12','SMD-R3WBQ-KIT5','SMD-R3WBQ-KIT20','SMD-R3WBQ-KIT10','SMD-Q9WBF-KIT20','SMD-Q9WBF-KIT12','SMD-Q9WBF-KIT10','SMD-Q7WBQ-KIT20','SMD-Q7WBQ-KIT12','SMD-Q7WBQ-KIT10','SMD-Q7WBF-KIT5','SMD-Q7WBF-KIT20','SMD-Q7WBF-KIT12','SMD-Q6-5WBQ-KIT10','SMD-Q6-5WBF-KIT10','SMD-Q5WBQ-KIT20','SMD-Q5WBQ-KIT10','SMD-Q5WBN-KIT5','SMD-Q5WBN-KIT20','SMD-Q5WBF-KIT5','SMD-Q5WBF-KIT12','SMD-Q3WBQ-KIT5','SMD-Q3WBQ-KIT12','SMD-Q3WBF-PT-KIT10','SMD-Q3WBF-KIT5','SMD-Q3WBF-KIT20','SMD-Q3WBF-KIT12','SMD-Q3WBF-KIT10','SMD-Q12WBN-KIT20','SMD-Q12WBN-KIT12','SMD-Q12WBF-KIT5','SL-E27-KIT5','SL-E27-KIT10','RSPM-50WVE-KIT5','RSPM-50WBQ-KIT5','RSPM-50WBQ-KIT10','RSPM-50WBF-KIT50','RSPM-50WBF-KIT20','RSPM-400WBF-KIT50','RSPM-30WVE-KIT10','RSPM-30WBQ-KIT5','RSPM-20WVE-KIT10','RSPM-20WBF-KIT50','RSPM-20WBF-KIT20','RSPM-20WBF-KIT10','RSPM-200WBF-KIT5','RSPM-200WBF-KIT20','RSPM-200WBF-KIT10','RSPM-10WBQ-KIT20','RSPM-10WBQ-KIT10','RSPM-10WBF-KIT20','RSPM-100WVE-KIT5','RSPM-100WVE-KIT10','RS-02001PT-BOLA-KIT4','RS-02001PT-BOLA-KIT2','RS-01001VM-BELGICA-KIT2','RS-01001PT-BELGICA-KIT6','RS-01001PT-BELGICA-KIT4','RS-01001CB-BELGICA-KIT4','RS-01001AM-BELGICA-KIT6','RS-01001AM-BELGICA-KIT2','R-50WBF-KIT50','R-50WBF-KIT20','R-50WBF-KIT10','R-400WBF-KIT20','R-30WVE-KIT5','R-30WVE-KIT10','R-30WBF-KIT5','R-30WBF-KIT20','R-300WBF-KIT50','R-300WBF-KIT10','R-20WBF-KIT5','R-20WBF-KIT10','R-200WBF-KIT5','R-200WBF-KIT10','R-10WBF-KIT5','R-10WBF-KIT10','R-100WVE-KIT5','PS-RT48WBF-30X120-KIT20','PS-RT48WBF-30X120-KIT10','PS-R6WBQ-KIT5','PS-R6WBQ-KIT20','PS-R6WBQ-KIT10','PS-R6WBF-KIT5','PS-R6WBF-KIT20','PS-R6WBF-KIT10','PS-R3WBF-KIT5','PS-R3WBF-KIT20','PS-R3WBF-KIT10','PS-R25WBQ-KIT20','PS-R25WBQ-KIT10','PS-R25WBF-KIT5','PS-R25WBF-KIT20','PS-R25WBF-KIT10','PS-R18WBQ-KIT5','PS-R18WBQ-KIT10','PS-R18WBF-KIT20','PS-R12WBQ-KIT20','PS-R12WBQ-KIT10','PS-R12WBF-KIT5','PS-R12WBF-KIT20','PS-R12WBF-KIT10','PS-Q6WBQ-KIT20','PS-Q6WBQ-KIT12','PS-Q6WBF-KIT12','PS-Q48WBF-62X62-KIT20','PS-Q48WBF-62X62-KIT12','PS-Q48WBF-62X62-KIT10','PS-Q48WBF-60X60-KIT5','PS-Q48WBF-60X60-KIT10','PS-Q3WBQ-KIT5','PS-Q3WBQ-KIT20','PS-Q3WBQ-KIT10','PS-Q3WBF-KIT5','PS-Q3WBF-KIT20','PS-Q3WBF-KIT10','PS-Q36WBN-40X40-KIT5','PS-Q36WBF-SB-KIT5','PS-Q36WBF-SB-KIT12','PS-Q36WBF-40X40-KIT5','PS-Q36WBF-40X40-KIT10','PS-Q25WBQ-KIT20','PS-Q25WBQ-KIT10','PS-Q25WBN-KIT5','PS-Q25WBN-KIT12','PS-Q25WBN-KIT10','PS-Q25WBF-KIT10','PS-Q18WBQ-KIT12','PS-Q18WBN-KIT5','PS-Q18WBN-KIT20','PS-Q18WBN-KIT10','PS-Q18WBF-KIT5','PS-Q18WBF-KIT10','PS-Q12WBQ-KIT5','PS-Q12WBQ-KIT20','PS-Q12WBF-KIT5','PS-Q12WBF-KIT20','PS-Q12WBF-KIT10','POST-50WBF-KIT5','POST-50WBF-KIT12','POST-100WBF-KIT5','POST-100WBF-KIT10','POSE-50WBF-KIT5','POSE-30WBF-KIT10','PG-RT72WBF-30X120-KIT5','PG-RT60WBF-30X120-KIT5','PG-RT48WBN-30X120-KIT20','PG-RT48WBF-30X120-PT-KIT10','PG-RT36WBN-15X120-PT-KIT5','PG-R6WBQ-KIT5','PG-R6WBF-PT-KIT5','PG-R6WBF-PT-KIT10','PG-R6WBF-KIT5','PG-R6WBF-KIT20','PG-R6WBF-KIT10','PG-R32WBF-KIT5','PG-R25WBQ-PT-KIT5','PG-R25WBQ-KIT5','PG-R25WBN-PT-KIT5','PG-R25WBN-KIT5','PG-R25WBF-KIT5','PG-R25WBF-KIT10','PG-R18WBQ-PT-KIT5','PG-R18WBQ-PT-KIT10','PG-R18WBQ-KIT5','PG-R18WBN-PT-KIT5','PG-R18WBN-PT-KIT10','PG-R18WBN-KIT5','PG-R18WBN-KIT10','PG-R18WBF-PT-KIT5','PG-R18WBF-PT-KIT12','PG-R18WBF-KIT12','PG-R18WBF-KIT10','PG-R12WBQ-PT-KIT5','PG-R12WBQ-PT-KIT10','PG-R12WBQ-KIT10','PG-R12WBN-PT-KIT5','PG-R12WBN-PT-KIT10','PG-R12WBF-PT-KIT5','PG-Q6WBQ-PT-KIT5','PG-Q6WBQ-PT-KIT20','PG-Q6WBQ-PT-KIT10','PG-Q6WBQ-KIT5','PG-Q6WBQ-KIT20','PG-Q6WBQ-KIT10','PG-Q6WBN-KIT5','PG-Q6WBN-KIT20','PG-Q6WBN-KIT10','PG-Q6WBF-PT-KIT5','PG-Q6WBF-PT-KIT10','PG-Q6WBF-KIT20','PG-Q6WBF-KIT10','PG-Q48WBF-60X60-KIT5','PG-Q36WBN-40X40-KIT5','PG-Q36WBN-40X40-KIT12','PG-Q25WBQ-PT-KIT5','PG-Q25WBQ-PT-KIT12','PG-Q25WBQ-KIT5','PG-Q25WBN-KIT12','PG-Q25WBF-RO-KIT5','PG-Q25WBF-PT-KIT5','PG-Q25WBF-KIT5','PG-Q18WBQ-KIT50','PG-Q18WBN-PT-KIT5','PG-Q18WBN-PT-KIT10','PG-Q18WBN-KIT12','PG-Q18WBN-KIT10','PG-Q18WBF-PT-KIT12','PG-Q18WBF-PT-KIT10','PG-Q18WBF-KIT5','PG-Q18WBF-KIT12','PG-Q18WBF-KIT10','PG-Q12WBQ-PT-KIT5','PG-Q12WBQ-PT-KIT12','PG-Q12WBQ-PT-KIT10','PG-Q12WBQ-KIT5','PG-Q12WBN-PT-KIT5','PG-Q12WBN-PT-KIT12','PG-Q12WBN-KIT5','PG-Q12WBN-KIT20','PG-Q12WBF-PT-KIT5','PG-Q12WBF-PT-KIT12','PG-Q12WBF-PT-KIT10','PG-Q12WBF-KIT50','PG-Q12WBF-KIT12','NR-3WBQ-KIT5','NR-3WBQ-KIT12','NR-3WBQ-KIT10','NR-3WBF-KIT5','NR-3WBF-KIT10','NQ-3WBQ-KIT12','NQ-3WBF-KIT5','NQ-3WBF-KIT10','MNG-RGB110V-KIT100','MNG-AZ220V-KIT100','LV-D95-4W-KIT5','LUM-60BF-KIT5','LUM-60BF-KIT10','LUM-30BF-KIT50','LUM-30BF-KIT5','LUM-30BF-KIT10','LUM-240BF-KIT5','LUM-240BF-KIT12','LUM-120BQ-KIT12','LT-60BQ-KIT5','LT-60BQ-KIT20','LT-60BN-KIT50','LT-60BN-KIT5','LT-60BN-KIT20','LT-60BN-KIT12','LT-60BN-KIT10','LT-60BF-KIT5','LT-60BF-KIT12','LT-60BF-KIT10','LT-240BF-KIT50','LT-240BF-KIT20','LT-240BF-KIT12','LT-120BQ-KIT5','LT-120BQ-KIT20','LT-120BQ-KIT12','LT-120BQ-KIT10','LT-120BN-KIT50','LT-120BN-KIT5','LT-120BN-KIT20','LT-120BN-KIT12','LT-120BF-KIT5','LT-120BF-KIT10','LJC-W50-6500K-KIT10','LJC-W30-6500K-KIT10','LJC-W100-6500K-KIT5','L-U9WBF-KIT5','L-U9WBF-KIT10','L-U7WBF-KIT5','L-U18WBF-KIT5','L-U12WBF-KIT5','L-U12WBF-KIT10','KIT-TL-2-SP-20WBQ','KIT-TL-2-SP-20WBF','KIT-TL-2-SB-10WBQ','KIT-TL-1-SP-20WBQ','KIT-TL-1-SB-10WBQ','KIT-TL-1-5-SB-10WBQ','GU10-6-5WBQ-KIT5','GU10-6-5WBQ-KIT12','GU10-6-5WBQ-KIT10','GU10-6-5WBF-KIT50','GU10-6-5WBF-KIT5','GU10-6-5WBF-KIT12','GU10-5WBQ-KIT50','GU10-5WBQ-KIT5','GU10-5WBQ-KIT12','GU10-5WBQ-KIT10','GU10-5WBF-KIT5','GU10-5WBF-KIT12','GU10-5WBF-KIT10','G9B-5WBQ-220V-KIT5','G9B-5WBQ-220V-KIT12','G9B-5WBQ-220V-KIT10','G9B-5WBQ-110V-KIT5','G9B-5WBQ-110V-KIT20','G9B-5WBQ-110V-KIT10','G9B-5WBF-220V-KIT5','G9B-5WBF-220V-KIT10','G9B-5WBF-110V-KIT5','G9B-3WBQ-220V-KIT50','G9B-3WBQ-220V-KIT5','G9B-3WBQ-220V-KIT20','G9B-3WBQ-220V-KIT12','G9B-3WBQ-220V-KIT10','G9B-3WBQ-110V-KIT5','G9B-3WBQ-110V-KIT12','G9B-3WBQ-110V-KIT10','G9B-3WBF-220V-KIT5','G9B-3WBF-220V-KIT20','G9B-3WBF-110V-KIT50','G9B-3WBF-110V-KIT5','ER-5050-KIT5','ER-5050-KIT20','ER-5050-KIT10','ER-3528RGB-KIT5','ER-3528RGB-KIT20','ER-3528RGB-KIT10','ER-3528-KIT5','ER-3528-KIT20','ER-3528-KIT10','EL-5050RGB-KIT5','EL-5050RGB-KIT10','EL-5050-KIT5','EL-5050-KIT10','EL-3528RGB-KIT5','EL-3528RGB-KIT20','EL-3528RGB-KIT10','EL-3528-KIT5','EL-3528-KIT20','EL-3528-KIT10','EL-17-B-KIT6','EL-17-B-KIT4','EL-17-B-KIT2','EI-20-W-KIT6','EI-20-W-KIT4','EI-20-W-KIT2','DJ-5WBQ-KIT5','DJ-5WBF-KIT10','DJ-3WBQ-KIT5','DJ-3WBQ-KIT20','DJ-3WBQ-KIT10','DJ-3WBF-KIT5','DJ-3WBF-KIT10','D-QAB5WBQ-KIT5','D-QAB5WBQ-KIT12','D-QAB5WBQ-KIT10','D-QAB3WBF-KIT5','D-QAB3WBF-KIT10','D-COBS4WBQ-KIT2','D-COB5WVE-KIT5','D-COB5WVE-KIT20','D-COB5WVE-KIT12','D-COB5WBF-KIT5','D-COB5WBF-KIT40','D-COB5WBF-KIT2','D-COB5WBF-KIT10','D-COB3WVE-KIT5','D-COB3WVE-KIT12','D-COB3WBF-KIT5','D-COB3WBF-KIT4','D-COB3WBF-KIT20','D-COB3WBF-KIT2','D-AB7WBQ-PT-KIT12','D-AB7WBQ-PT-KIT10','D-AB7WBF-PT-KIT12','D-AB7WBF-PT-KIT10','D-AB5WBQ-KIT5','D-AB5WBQ-KIT10','D-AB5WBF-KIT5','D-AB5WBF-KIT12','D-AB5WBF-KIT10','D-AB3WBQ-KIT5','D-AB3WBF-KIT5','D-AB3WBF-KIT30','D-AB3WBF-KIT12','CONECTOR-RGB-5VIAS-KIT5','CONECTOR-RGB-4VIAS-KIT5','COB-R3WBQ-KIT5','COB-R3WBQ-KIT10','COB-Q5WBF-KIT5','COB-Q5WBF-KIT12','COB-Q5WBF-KIT10','COB-Q3WBF-KIT5','COB-Q3WBF-KIT12','CN-01040VM-KIT2','CN-01040PT-KIT2','CN-01040AM-KIT4','CN-01040AM-KIT2','CFIO-3V-KIT10','CFIO-2V-KIT10','BULBO-9WBQ-KIT50','BULBO-9WBQ-KIT5','BULBO-9WBQ-KIT20','BULBO-9WBQ-KIT12','BULBO-9WBQ-KIT10','BULBO-9WBF-KIT5','BULBO-9WBF-KIT20','BULBO-9WBF-KIT10','BULBO-7WBQ-KIT50','BULBO-7WBQ-KIT5','BULBO-7WBQ-KIT20','BULBO-7WBQ-KIT12','BULBO-7WBQ-KIT10','BULBO-7WBF-KIT5','BULBO-7WBF-KIT10','BULBO-5WBQ-KIT50','BULBO-5WBQ-KIT5','BULBO-5WBQ-KIT12','BULBO-5WBQ-KIT10','BULBO-5WBF-KIT50','BULBO-5WBF-KIT5','BULBO-5WBF-KIT12','BULBO-5WBF-KIT10','BULBO-15WBQ-KIT5','BULBO-15WBQ-KIT20','BULBO-15WBQ-KIT10','BULBO-15WBF-KIT50','BULBO-15WBF-KIT5','BULBO-15WBF-KIT20','BULBO-15WBF-KIT12','BULBO-12WBQ-KIT50','BULBO-12WBQ-KIT20','BULBO-12WBQ-KIT12','BULBO-12WBQ-KIT10','BULBO-12WBF-KIT5','BULBO-12WBF-KIT20','BULBO-12WBF-KIT12','BULBO-12WBF-KIT10','BULBO-10WBQ-KIT5','BULBO-10WBQ-KIT12','BULBO-10WBQ-KIT10','BULBO-10WBF-KIT5','BULBO-10WBF-KIT20','BULBO-10WBF-KIT10','BSE27L-KIT50','BSE27L-KIT5','BSE27L-KIT12','BSE27L-KIT10','BOLINHA-1W-VM-KIT5','BOLINHA-1W-VM-KIT10','BOLINHA-1W-VE-KIT5','BOLINHA-1W-VE-KIT10','BOLINHA-1W-AZ-KIT5','BOLINHA-1W-AZ-KIT10','BOLINHA-1W-AM-KIT5','BOLINHA-1W-AM-KIT10','ALTAPOTENCIA-70WBF-KIT5','ALTAPOTENCIA-70WBF-KIT10','ALTAPOTENCIA-30WBF-KIT5','ALTAPOTENCIA-30WBF-KIT10','ALTAPOTENCIA-20WBF-KIT5','ABRACA-T8-KIT50','ABRACA-T8-KIT100','ABRACA-T8-KIT10','5050-SMD-3LBQ-KIT20','5050-SMD-3LBF-KIT20','25923-KIT2','25919-KIT2','25114-KIT2','25113-KIT5','25113-KIT2','24707-KIT10','24080-KIT5','23597-KIT50','23597-KIT5','23597-KIT2','1499-ESN-KIT4','1499-ESN-KIT2','1408-ES-KIT2','1021-KIT10','1015-KIT5','1015-KIT10','1000-EN-KIT30','1000-EN-KIT10'],
	
			 lancamentos: ['PE-YMIS-PAL','PE-REGGIO-P-CAR','PE-LOKI-CAR','PE-YMIS-TAB','PE-CR-RT-36W-40X40','LUSTRE-DUQUESA-PT','LUSTRE-DUQUESA-BR','PE-YMIS-CAR','PE-BARI-P-CAR','PE-MINI-BARI-TAB','PE-RAGNAR-TAB','PE-LOKI-PAL','PE-RAGNAR-PAL','PE-REGGIO-G-CAR','PE-RAGNAR-CAR','PE-GLOBO-TAB','PE-MINI-BARI-PAL','ARA-BARI-MINI-TAB','PE-REGGIO-G-PAL','PE-REGGIO-G-TAB','ARA-BARI-MINI-PAL','PE-CHAMO-PF','P-5050','PEND-G01','PE-PER-ARC-PF','PE-GEN-PF','PE-NAT-QD','PE-HASH-3X-PF','PE-RANA-PF','PE-RT-7W-RG','PE-PER-BNC-PF','PE-ZUR-PF','PE-015-E27','PE-016-E27','PE-014-E27','PE-017-E27','SMD-R3WBF-PT','SMD-Q7WBF-PT','PG-R25WBF-MARROM','PS-R6WBF-MARROM','SMD-Q5WBQ-PT','PS-R18WBF-MARROM','ARA-BARI-MINI-CAR','PE-GLOBO-CAR','PS-Q12WBQ-MARROM','PS-R18WBQ-MARROM','PS-R3WBQ-MARROM','PS-R6WBQ-MARROM','PS-Q3WBQ-MARROM','BULBO-7WAM','BULBO-7WLA','PS-RT60WBN-30X120','PS-RT60WBF-30X120','LV-ESP-E27','PG-RT36WBF-10X120-PT','PG-RT36WBQ-10X120-PT','PG-RT36WBQ-10X120','PS-QRE12WBQ','PS-QRE36WBF','PS-QRE25WBN','PS-QRE36WBN','PS-QRE36WBQ','RS-0227PT','RS-0230PT','G95-5W-FUM','RS-0230N','PG-R18WBQ-MARROM','PG-R18WBF-MARROM','PE-TUBO-CONC-E27','PG-RT18WBQ-10X60-MARROM','LT-120ROXO','PS-RT36WBQ-30X60-MARROM','PG-R6WBF-MARROM','PS-RT18WBQ-10X60-MARROM','PG-RT48WBF-30X120-MARROM','PG-RT18WBF-10X60-MARROM','PG-R25WBQ-MARROM','G125-4W-LOVE','PS-RT30WBQ-10X120-MARROM','BULBO-9WRGB','PS-Q36WBQ-40X40-MARROM','PG-RT30WBF-10X120-MARROM','PG-R12WBF-MARROM','PE-POLIG-CONC-E27','PE-CHAPEU-CONC-E27','PE-BJF-TAB','PE-BJF-PAL','P-4040','VLC-SC-4-8WBQ-DIM','PG-Q30WBN-40X40','VLL-3WBQ-E14-SC','LY-8207AM-BC','111','112','LY-8736M-PT-PT','202','821','LY-8730M-BC-BC','1228','812','1311-E1','LY-8762L-PT-DR','ABJ-CLASSIC-P-CAR','31069','LY-8762L-BC-DR','ABJ-GAIOLA-P-CAR','ABJ-GAIOLA-P-PAL','ABRACA-7-NT','ARA-RISCHI-6WBQ-PT','ARA-RISCHI-6WBQ-BR','ABRACA-2-5-NT-4','ARA-6WBF-PT','ABRACA-2-5-NT-3','PG-R36WBF','CP-SF','PE-PEROLA-BNC-MINI-PF','LV-G95-DEF-6W','MOL-AM','MR11-GU10-3-8BQ-DIM','P-NEVADA-40-CR','MR16-7WBN','R-20WRGB','PE-BORBO-COLOR','PE-BORBO-BQ','P-3030','PE-CAGE-500MM-COF','PAR20-4-8W-BN-IP54','LY-8207BM-BC','LY-8788M-BC-RS','PE-CI-AZUL','PE-TNG-24W','PE-TRI-18W','PE-GEN-BR','PE-ZUR-BR','LY-8762M-BC-BC','LY-8762M-PT-DR','CD202022-1','CD2020502-1D','SL-5677L-C8','LY-8762M-BC-DR','PG-RT36WBF-30X120','PF-TW-RD-BR-REPT','PF-TW-QD-BR-REPT','SL-5753-H1-CHR','SL-93128L-C6','7612-50x50','7613','7615-40x40','SMD-Q5WBQ-PACK5','PS-R18WBN-PT-PREMIUM','PS-R25WBQ-PT-PREMIUM','PF-AC2-2M','PF-AR2-2M','R-100WBF-PREMIUM','PS-Q32WBF-40X40','PG-Q32WBF-40X40','PG-Q32WBQ-40X40','PS-Q32WBQ-40X40','R-150WBF-PREMIUM','SL-93127S-C4-CHP','MR11-GU10-4WBN','PS-QRE20WBQ-PT','PS-QRE25WBN-PT','PS-QRE20WBF-PT','PS-QRE36WBF-40X40-PT','D-QABRE-GU10','STP-30-BN','RS-01001VD-BELGICA','RSPM-150W-SENSOR-BF','CB-FL-4-VD-100M','CB-FL-4-VM-100M','CB-FL-4-PT-100M','CB-FL-4-BR-100M','CB-FL-1-5-BR-100M','CB-FL-2-5-PT-100M','CB-FL-1-5-VM-100M','CB-FL-2-5-VD-100M','D-QABRE-AR70-PT','D-QABRE-GU10-AM','D-QABRE-PAR20-CZ','D-QABRE-PAR20-MR','D-QABRE-PAR20-PT','D-QABRE-GU10-AZ','D-QABRE-PAR20-TUR','D-QABRE-GU10-RO','D-QABRE-PAR20-RO','PG-Q18W-WIFI','ARA-4W-DUO','CB-FL-4-VM-30M','CB-FL-2-5-BR-30M','CB-FL-1-5-PT-20M','CB-FL-1-5-BR-50M','CB-FL-2-5-BR-50M','CB-FL-1-5-BR-30M','CB-FL-4-PT-20M','CB-FL-4-BR-20M','CB-FL-2-5-BR-10M','CB-FL-2-5-VD-10M','CB-FL-4-PT-10M','CB-FL-4-VD-10M','CB-FL-2-5-PT-20M','CB-FL-1-5-VD-30M','CB-FL-4-VD-20M','CB-FL-4-VD-50M','QCFL4-CA-USB','1438-EP','ABJ-OSLO-P-CAR','ABJ-OSLO-P-PAL','OU-2009V-T','OU-2009V-CO','OU-2009V-CH','OU-2009V-BR','OU-2002-PT','OU-2002-CZ','OU-2002-BR','OU-2003-PT','OU-2003-CZ','OU-2006V-BR','OU-2008A-BR','FE-2P-10A','PF-CR-CR-36W-40x40','PE-REGGIO-P-PAL','PE-LOKI-TAB','PEND-B01','PE-BARI-P-TAB','PE-BARI-P-PAL','PE-CHAMP-CORDA','PF-CR-32W-30X30','PE-MINI-BARI-CAR','PE-GLOBO-PAL','PE-HASH-3X-COF','PE-NAT-RD','PE-STOVE-130MM','PE-TENESSE-PF','PE-VID-ARIZ-AMB','PEND-W01','PE-013-E27','PE-012-E27','PS-Q12WBF-MARROM','SMD-R3WBQ-PT','SMD-R5WBQ-PT','SMD-Q7WBQ-PT','SMD-Q3WBF-PT','PS-Q18WBF-MARROM','SMD-R7WBF-PT','PS-R3WBF-MARROM','PG-Q25WBF-MARROM','SMD-Q3WBQ-PT','PS-R25WBF-MARROM','PS-Q3WBF-MARROM','BULBO-10W-SMART','PS-Q6WBF-MARROM','PS-R12WBQ-MARROM','LV-3D-E27','PS-R12WBF-MARROM','PS-Q6WBQ-MARROM','PE-REGGIO-P-TAB','BULBO-7WVD','R-50WRGB','BULBO-7WAZ','BULBO-7WVM','PE-BJF-CAR','R-500WBF-PREMIUM','R-100WRGB','R-400WBF-PREMIUM','R-300WBF-PREMIUM','LV-2D-E27','PG-RT36WBF-10X120','PG-RT36WBN-10X120-PT','PG-RT36WBN-10X120','PS-QRE12WBN-PT','PS-QRE20WBQ','PS-QRE20WBN','PS-QRE12WBF','PS-QRE25WBF','RS-0225N','RS-0227N','RS-0225PT','G125-5W-FUM','RS-0220N','RS-0220PT','PG-RT36WBQ-30X60-MARROM','P130-4W-FUM','PS-Q25WBQ-MARROM','PG-RT48WBQ-30X120-MARROM','PG-Q12WBQ-MARROM','PG-RT30WBQ-10X120-MARROM','PG-Q12WBF-MARROM','PS-RT30WBF-10X120-MARROM','PS-RT36WBF-30X60-MARROM','PS-Q25WBF-MARROM','PS-RT48WBF-30X120-MARROM','PS-RT48WBQ-30X120-MARROM','PS-R25WBQ-MARROM','PG-RT36WBF-30X60-MARROM','PG-R6WBQ-MARROM','G125-4W-HOME','PS-RT18WBF-10X60-MARROM','PS-Q36WBF-40X40-MARROM','PG-R12WBQ-MARROM','SMD-R7WBQ-PT','VLL-3WBQ-E27-SC','LY-8207AL-BC','LY-8207BS-BC','2020','333','386','209','311','ABJ-CLASSIC-P-PAL','12V-10A-PF','ABRACA-2-5-200-PT','3503-EN','3502-EN','ABRACA-4-5-NT','ABRACA-3-5-NT','ABRACA-3-5-NT-2','ABRACA-3-5-PT','ABRACA-4-5-PT','BULBO-18WBF','ARA-4WBQ-PT','ARA-8WBQ-PT','ARA-8WBF-PT','CD2020005-1','CD2020003-1','PE-PEROLA-CONSTELACAO-PF','PE-PEROLA-LIBRA-PF','PE-PEROLA-GT-DUO-PF','LB-LT-G80-5W','HD-500GB','E14-5WBQ','EXT-3T-5M-BR','LB-5WBQ','EXT-3T-5M-PT','PE-PEROLA-ARC-DUO-PF','L-CUBE','MOL-AZ','MOL-BR','MOL-VM','R-10WRGB','PE-CAGE-500MM-PF','P-CAGE-PRETO','MR16-7WBQ-DIM','PE-CAGE-300MM-PF','MR16-5WRGB','R-30WRGB','PE-CAGE-300MM-COF','PE-CHAMO-BR','BULBO-15WBF-PACK3','LY-8788M-BC-AZ','PAR20-4-8W-BQ-IP54','PAR20-7WBF-IP54','PE-CORDA-1-E27','PE-CORDA-2-E27','LY-8762L-BC-BC','LY-8809BM-BC','LY-8809BM-PT','SL-5647-L5-CHP','SL-5647-L5-CLEAR','CD202024-1D','CD202020-1D','CD2020104','CD2020108-1D','PE-RT-7W-CHR','PE-RT-7W-CHR-2','PE-RT-7W-G','PG-R18WBF-PT-PREMIUM','PG-R18WBN-PT-PREMIUM','PG-R18WBQ-PT-PREMIUM','SL-5834-H3-CLEAR','SL-5677M-C5','SL-5872-H10-COP','SL-93127S-C4','SL-5834-H8-CLEAR','SL-5834-H5-CLEAR','SL-93127L-C6','SL-5949L-H1-CHR','SL-93128S-C4','PS-R18WBQ-PT-PREMIUM','SL-93779-C9','VEDA-ROSCA-10M','SMART-PLUG-WIFI-16A','VEDA-ROSCA-50M','GT-01','PS-R25WBN-PT-PREMIUM','PF-AS1-2M','XL-3528BQ-240LEDS','PS-R18WBN-SB','PS-Q18WBN-SB','PS-Q32WBN-40X40','SOLA-2WBF-BR','PG-Q32WBN-40X40','R-200WBF-PREMIUM','SL-93779-C9-CHP','XL-09','R-20WBF-PREMIUM','R-50WBF-PREMIUM','R-30WBF-PREMIUM','TY-MB0410','LB-4W-C-E27','PS-QRE12WBF-PT','PS-QRE12WBQ-PT','PS-QRE20WBN-PT','VLV-C-4W-SC','VLV-C-4W-CC','PS-QRE25WBQ-PT','PS-QRE25WBF-PT','PS-QRE36WBQ-40X40-PT','PS-QRE36WBN-40X40-PT','D-QABRE-AR70','QCFL4-PP-USB','SMD-R12WBQ','RS-02001AM-BOLA','VLC-2WBQ-E14-CC-110V','VLC-2WBQ-E14-SC-110V','PG-Q25WBQ-MARROM','CB-FL-2-5-BR-100M','CB-FL-2-5-VM-100M','CB-FL-1-5-PT-100M','CB-FL-1-5-VD-100M','D-QABRE-MR11-PT','D-QABRE-PAR20-VE','D-QABRE-GU10-PT','D-QABRE-GU10-MR','D-QABRE-GU10-VE','D-QABRE-PAR20-AM','D-QABRE-PAR20-AZ','D-QABRE-GU10-TUR','PS-R18W-WIFI','D-QABRE-GU10-CZ','LY-8020M-BC','CB-FL-4-VM-50M','CB-FL-2-5-VD-20M','CB-FL-4-VD-30M','CB-FL-1-5-PT-50M','CB-FL-1-5-VM-30M','CB-FL-4-VM-20M','CB-FL-4-PT-30M','CB-FL-2-5-VM-30M','CB-FL-4-BR-50M','CB-FL-4-PT-50M','CB-FL-2-5-PT-30M','CB-FL-1-5-BR-20M','CB-FL-4-BR-30M','CB-FL-2-5-VD-50M','CB-FL-2-5-VM-50M','CB-FL-1-5-VM-50M','CB-FL-1-5-VD-20M','CB-FL-4-VM-10M','CB-FL-1-5-PT-10M','CB-FL-2-5-BR-20M','CB-FL-2-5-VM-20M','CB-FL-1-5-VM-10M','CB-FL-2-5-PT-10M','CB-FL-2-5-VM-10M','CB-FL-1-5-VD-10M','CB-FL-4-BR-10M','CB-FL-1-5-PT-30M','CB-FL-1-5-BR-10M','CB-FL-1-5-VM-20M','CB-FL-2-5-PT-50M','CB-FL-2-5-VD-30M','CB-FL-1-5-VD-50M','SOPT-011','QCFL4-CP-USB','QCFL4-CP','QCFL4-PP','QCFL4-CL-USB','CD2020025','OU-2004-PT','OU-2003-BR','OU-2006V-T','OU-2004-CZ','OU-2004-BR','OU-2008A-PT','OU-2008A-CZ','CD-AM-3-4-50M','FE-3P-20A'],
	
			 compreAntesQueAcabe: ['RSPM-200WBF-KIT20','RSPM-200WBF','RSPM-200WBF-KIT50','RSPM-200WBF-KIT5','PG-Q18WBF-KIT10','PS-Q25WBF','PS-Q25WBF-KIT20','RSPM-300WBF','PG-Q25WBF','PG-Q18WBF','PS-Q18WBF','LUM-120BF-KIT20','PG-Q25WBF-KIT5','R-200WBF-KIT20','PG-RT48WBQ-30X120','PS-Q48WBF-62X62-KIT20','RSPM-100WBF-KIT20','PS-Q25WBF-KIT10','R-200WBF-KIT50','PS-Q18WBF-KIT10','RSPM-300WBF-KIT20','LUM-120BF','XL-5050BQ-KIT5','R-200WBF','RSPM-50WBF','PS-RT36WBF-15X120','LT-240BF-KIT10','RSPM-100WBF-KIT50','PS-Q25WBF-KIT5','LUM-240BF-KIT50','LT-240BF-2','SMD-Q7WBQ','R-200WBF-KIT10','BULBO-9WBF-R','LT-120BF-KIT50','PS-Q25WBQ','PG-Q36WBF-40X40','PS-Q48WBF-60X60','LUM-120BF-KIT10','PG-Q48WBF-60X60','LUM-240BF','R-100WBF','PG-Q36WBN-40X40','LUM-240BF-KIT10','RSPM-400WBF-KIT10','PS-RT36WBF-10X120','PS-RT36WBN-10X120','PG-Q12WBF','D-COB7WBQ','PS-Q18WBN','PS-Q48WBF-62X62','PG-Q25WBF-KIT20','SMD-Q7WBF','PS-Q48WBF-60X60-KIT20','PS-Q18WBF-KIT12','PS-Q48WBF-60X60-KIT10','XL-5050RGB','STP-24-BQ','PG-Q48WBN-60X60','PS-Q25WBN-KIT10','R-100WBF-KIT10','R-400WBF-KIT20','PG-R25WBF','RSPM-500WBF','PG-Q45WBQ-60X60','PS-Q18WBQ','PG-Q12WBF-KIT10','R-300WBF-KIT10','XL-3528RGB-KIT5','PS-Q48WBF-62X62-KIT12','PG-Q25WBN','SMD-Q5WBQ-KIT10','RSPM-50WBF-KIT50','TL-2-B','PG-Q48WBF-60X60-KIT5','POST-200WBF','BULBO-15WBF','R-100WBF-KIT5','RSPM-600WBF','D-COB3WBQ','R-100WBF-KIT20','RSPM-50WBF-KIT20','XL-3528BF','PS-R36WBF-SB','PS-Q32WBN-SB','PG-R25WBF-KIT10','812','23597-KIT10','PS-RT30WBF-10X120','SMD-R5WBF-KIT12','LT-240BF','TL-1-5-B','ALTAPOTENCIA-70WBF-KIT10','D-QAB3WBQ','D-QAB7WBF','PS-RT48WBN-30X120','PS-R18WBF-KIT10','R-50WBF-KIT10','RSPM-500WBF-KIT5','RSPM-500WBF-KIT10','D-QAB7WBQ','LT-120BN-KIT50','SMD-Q5WBF','PG-R18WBF-KIT10','PS-Q25WBN-KIT12','PS-R25WBF-KIT10','PG-R25WBN','4165-DR','PG-Q12WBN','PS-RT60WBN-30X120','PS-Q36WBN-40X40-KIT20','XL-3528BQ','BULBO-15WBF-PACK3','PS-R18WBF','PG-R18WBF','LT-120BF','ARA-6WBQ-BR','LUM-60BF','DP-25W','PS-R25WBF','PS-Q48WBF-60X60-KIT5','DJ-5WBQ','PS-RT24WBN-30X60','R-10WBF-KIT20','PG-Q25WBQ-KIT5','DJ-6WBQ-PT','PS-Q18WBF-SB','PS-Q25WBQ-KIT5','SMD-R3WBF','XL-3528BQ-KIT100-110V','ALTAPOTENCIA-20WBF-KIT5','XL-3528BM-KIT15','LT-240BF-KIT12','R-50WVE-PADRAO','PS-Q36WBN-40X40','PG-RT48WBN-30X120','POSE-50WBF-KIT12','SOR-200WBF','XL-5050BF-KIT100-110V','PG-Q36WBQ-40X40','SMD-R5WBF-KIT10','T5-60-9W-L-BF','F-12V-5A','PS-Q25WBF-PT','PG-R6WBN','GKD-300W','PG-Q25WBF-PT-KIT10','SMD-Q5WBQ','PG-Q18WBN-PT','SOR-40WBF','PS-Q12WBF-KIT10','POST-100WBF-KIT10','STB-24-BN','T5-120-18W-L-BF','QA19M','BULBO-15WBF-KIT20','PS-Q6WBN','PS-Q12WBQ','PS-Q12WBF-KIT5','TL-2-W','SMD-Q3WBQ-KIT12','R-200WVE','PSM-100WBF','D-QABRE-PAR20','PG-Q36WBF-40X40-PT','SMD-R9WBF','BULBO-12WBF-KIT50','G9B-5WBQ-220V','RSPM-100WBQ','PE-BARI-P-PAL','PS-Q18WBN-KIT12','RSPM-50WVE-KIT10','STP-18-BQ','ALTAPOTENCIA-80WBF','LB-LT-G95-4W','PS-Q36WBF-40X40-KIT10','ALTAPOTENCIA-20WBF-KIT10','LT-120BN-KIT20','NE-50A-220V','STP-30-BF-PADRAO','ARA-4WBQ-PT','PG-Q25WBQ-KIT20','DJ-12WBQ','PAR20-7WBQ','PS-Q36WBF-SB','CB-FL-2-5-VM-100M','PG-R6WBQ','SL-E27','PG-RT18WBF-10X60','ARA-15WBF','PS-Q32WBF-40X40','PG-Q25WBN-PT','PS-Q18WBQ-KIT10','ARA-6WBF-PT','STP-10-BN-KIT10','G95-4W','LAMP-CAM','ARA-R24WBF','BULBO-5WBQ-KIT50','PS-Q48WBN-60X60-KIT10','AR70-GU10-3K','TL-1-W','LT-240BF-KIT5','1427-EN','NE-50BQ-220V','PS-Q36WBF-SB-KIT10','PE-NAT-RD','PS-RT36WBQ-15X120-PT','PS-Q36WBN-40X40-KIT5','23597-KIT5','RSPM-400WBF-KIT5','XL-3528BM-KIT10','R-300WBF-PREMIUM','MNG-BF220V-KIT100','PG-Q48WBF-60X60-KIT20','XL-3528BM-KIT20','PS-Q25WBQ-PT','RSPM-50WBQ','ARA-8WBQ','XL-3528RGB-KIT3','7612-50x50','PS-R32WBF-SB','TL15W-3STB-18-BN','RSPM-10WBF-KIT5','PS-Q6WBQ-KIT20','LY-8762M-BC-BC','PS-RT36WBN-30X60-PT','PS-Q48WBQ-60X60','PG-Q48WBQ-60X60','RSPM-200WBF-KIT10','RSPM-100WBF','RSPM-100WBF-KIT5','RSPM-100WBF-KIT10','RSPM-300WBF-KIT10','PS-Q48WBN-62X62','PG-Q25WBF-KIT10','PG-Q18WBF-KIT12','PS-Q18WBF-KIT20','PG-Q18WBF-KIT5','XL-5050RGB-KIT5','PG-Q25WBF-KIT12','PS-Q18WBF-KIT5','PQ6640BF','XL-3528BQ-KIT5','RSPM-50WBF-KIT5','RSPM-300WBF-KIT5','PS-Q25WBF-KIT12','R-300WBF','PS-Q48WBF-62X62-KIT10','LUM-240BF-KIT20','XL-5050BF-KIT5','R-400WBF','R-50WBF-KIT50','PS-RT36WBN-15X120','ALTAPOTENCIA-50WBF','LT-240BF-KIT20','PS-Q25WBN','PG-R18WBN','PS-Q25WBN-KIT20','LT-120BF-KIT20','RSPM-50WBF-KIT10','POST-150WBF','PS-Q36WBF-40X40','PG-RT48WBN-30X120-KIT20','PG-Q18WBQ','R-300WBF-KIT20','R-50WBQ','SMD-Q5WBQ-PACK5','RSPM-400WBF-KIT50','LUM-120BF-KIT5','BULBO-9WBF-PACK6','PG-Q48WBF-60X60-PT','PS-Q36WBQ-40X40','PS-Q12WBN','UFO-100W','R-200WBF-KIT5','PG-R12WBF','PG-RT36WBQ-30X60','PS-Q12WBF','RSPM-30WBF','PG-Q25WBQ','PS-RT48WBF-30X120-KIT20','LY-8762M-BC-DR','R-400WBF-KIT10','XL-5050BQ','SMD-Q5WBQ-KIT12','PS-RT48WBF-30X120','R-100WBF-KIT50','PS-Q25WBQ-KIT10','PS-Q25WBQ-KIT20','SMD-R5WBQ-KIT12','PG-Q18WBN','SL-5647-L5-CHP','STP-7-BF','SMD-Q5WBF-KIT10','SMD-R7WBF','R-50WBF','PS-Q18WBN-KIT20','D-COB5WBQ','LUM-120BF-KIT12','SMD-Q5WBQ-PT','GKD-150W','R-500WBF','PS-Q48WBN-60X60-KIT20','PS-RT30WBQ-10X120','PS-R18WBF-KIT20','XL-5050BF','PS-Q24WBF-SB','SMD-Q5WBF-KIT12','LUM-240BF-KIT5','PG-Q25WBF-PT','PS-Q48WBF-62X62-KIT5','PG-R36WBF','PS-Q18WBN-KIT10','PS-Q24WBN-SB','T5C-30-6W-L-BF','LT-60BF-KIT50','LT-240BF-KIT50','PG-Q12WBF-KIT12','LY-8762L-BC-DR','ARA-RT8WBQ-PT','R-200WBQ','SMD-R5WBF','PS-R25WBN','RSPM-100WVE','XL-5050BM-KIT15','PG-R18WBQ','R-400WBF-KIT5','RSPM-30WVE-KIT20','RSPM-30WBF-KIT5','DJ-3WBQ','STB-24-BQ','12V-3A','LT-120BF-KIT10','7615-40x40','PG-Q6WBF','PS-RT48WBQ-30X120','12V-5A','ALTAPOTENCIA-30WBF','SOBD-12W','XL-5050BQ-KIT25','RSPM-10WVE','R-20WVE','PG-Q36WBN-40X40-PT','PS-QRE36WBN','RSPM-400WBF','SMD-Q7WBN','ALTAPOTENCIA-30WBF-KIT10','ALTAPOTENCIA-100WBF','D-COB7WVE','PG-Q18WBN-KIT10','PS-Q48WBN-60X60','ALTAPOTENCIA-20WBF','POST-100WBF-KIT5','PS-RT48WBN-30X120-PT','ST64-4W','PG-Q12WBF-KIT5','PS-R25WBF-KIT20','BULBO-15WBF-KIT10','RSPM-300WBF-KIT50','XL-3528BF-KIT5','F-12V-2A','SMD-R7WBQ','PS-Q12WBF-KIT20','PS-RT36WBQ-15X120','PG-Q25WBN-KIT5','LP-33365','PS-RT36WBF-30X60','R-300WBF-KIT50','PG-R6WBQ-PT','GU10-4-5WBQ','R-100WRGB','PG-Q12WBQ','RSPM-50WVE','PS-R18WBQ-KIT20','F-12V-3A','RSPM-30WBF-KIT20','PS-RT18WBN-10X60','R-10WBQ','LUSTRE-DUQUESA-BR','TL2W-4STB-18-BQ','SOBD-2W','ALTAPOTENCIA-70WBF','D-QAB5WBF-KIT12','STP-20-BQ','PS-Q6WBF','TL15W-3STB-18-BF','LUM-60BQ','PG-Q25WBN-KIT10','SMD-Q5WBN','XL-5050BQ-KIT30','R-50WBF-KIT5','PS-QRE36WBQ','24080-KIT10','TL-1-5-W','DJ-5WBQ-KIT10','PG-Q25WBQ-KIT10','UFO-200W','HM-34966','LY-8207AL-BC','PG-Q25WBF-PT-KIT5','LT-120BN','PG-RT36WBF-30X60-PT','PS-Q45WBQ-62X62','ALTAPOTENCIA-40WBF','AMP-LED-FE','PG-Q25WBF-PT-KIT12','RSPM-20WBF','SMD-R3WBQ-KIT20','RSPM-30WBF-KIT10','PS-Q18WBF-PT','PE-CAGE-300MM-PF','SMD-R5WBQ','LUM-120BN','PG-RT30WBF-10X120','PS-RT48WBF-30X120-KIT5','PS-RT48WBF-30X120-PT','R-50WBF-KIT20','RS-01001PT-BELGICA','PS-RT36WBQ-10X120','GU10-6-5WBQ-KIT10','PG-Q36WBF-60X60','PS-RT36WBQ-30X60','PG-Q30WBN-40X40','PS-Q18WBN-KIT5','SOR-100WBF','PS-Q18WBQ-KIT5','BULBO-9WBQ-KIT20','XL-5050BM-KIT5','ARA-12WBQ-PT','BULBO-15WBF-KIT5','PS-RT18WBF-10X60','ARA-RISCHI-6WBQ-PT','PS-Q25WBN-KIT5','PG-RT48WBQ-30X120-PT','STP-10-BQ-KIT10','DJ-5WBF-KIT10','PS-R18WBF-SB','PS-Q48WBF-60X60-KIT12','STB-12-BQ','PG-RT18WBN-10X60','STB-20-BF','SMD-R9WBQ','LP-33334','QR51','PG-R18WBF-KIT5','PG-Q18WBN-KIT5','STP-18-BF','SMD-Q3WBQ','R-30WBF-KIT10','ARA-8WBQ-BR','VLF-4W-E14-CC','PS-150W','PS-RT30WBF-15X120-CZ','STP-10-BN-KIT12','STB-7-BF','PG-Q6WBQ-PT','RSAZ-50WBF','R-30WBF','SMD-R7WBN','D-AB5WBF','ARA-RISCHI-6WBQ-BR','POST-50WBF-KIT12','ARA-10WBF','ARA-5WBQ-PT','SOPT-011','QA23M','PG-R25WBF-KIT5','PS-QRE25WBN','PG-RT60WBQ-30X120','ARA-12WBQ-BR','DJ-12WVE','PG-Q48WBF-60X60-KIT10','LJC-W400-6500K','ARA-8WBF','D-QAB5WBQ-PT','D-AB5WBF-KIT10','ARA-6WRGB','23597-KIT50','HBD-001','PG-Q32WBQ-40X40','HWT-04','QR50','STP-10-BQ','ALTAPOTENCIA-80WBF-KIT5','12V-10A','SMD-R5WBQ-KIT10','PS-R24WBN-SB','PS-QRE12WBF','QA27M','SMD-Q9WBQ','LT-120BF-KIT12','NE-50BF-110V','PSM-100WBF-FOTOELETRICO','STB-12-BF','SMD-Q5WBQ-KIT5','BP-2WBQ','PAR20-7WBN','ARA-BARI-MINI-TAB','R-30WBQ'],
	
		  },
 
		  html: {
 
			 ultimasUnidades: `<div class="texto-ultimas-unidades"><strong>últimas unidades</strong></div>`,
	
			 precoValido: `<div class="texto-preco-valido-limitado">Preço válido para o dia <strong>${new Date().toLocaleDateString()}</strong></div>`,
	
			 lancamentos: `<div class="texto-compre-antes-que-acabe"><strong>Lançamento</strong></div>`,
	
			 compreAntesQueAcabe: `<div class="texto-ultimas-unidades"><strong>Compre antes que acabe</strong></div>`
	
		  },
 
		  gerarHTML(){
 
			 let skuProdutoAcessado = ILUMINIM_UTILS.produto.sku();
 
			 let htmls = [];
 
			 for(let prop in this.objeto){
 
				if(this.objeto[prop].includes(skuProdutoAcessado)){
 
				   //htmls.push(this.html[prop]);
				   htmls = [this.html[prop]];
 
				}
 
			 }
 
 
			 if(htmls.length == 0) return false;
 
			 return `
				<div class="informacoes-produto">
				   ${htmls.join('')}
				</div>
			 `;
 
		  }, 
 
		  renderizar(){
 
			 let html = this.gerarHTML();
 
			 if(!html) return;
		  
			 $('.produto .principal .acoes-produto .comprar > a').after(html);
 
		  }
 
	   }
 
	   textosAbaixoBotaoComprar.renderizar();
	  
	},
 
	adicionarTextOfertaRecomendadaModal(){
 
	   /*      $('.produto .breadcrumbs ul.lista-custom-breadcrumbs').append(`
		  <li class="oferta-recomendada">
				<a href="#!" data-toggle="modal" data-target="#modal_oferta_recomendada" class="oferta-recomendada-conteudo">
				   <div class="oferta-recomendada-conteudo-texto-oferta"></div>
				   <div class="oferta-recomendada-conteudo-texto-recomendada">COMPRE ANTES QUE ACABE!</div>
				</a>
		  </li>
	   `);*/
 
	   $('.produto .breadcrumbs ul.lista-custom-breadcrumbs').append(`
		  <li class="oferta-recomendada">
				<a href="#!" class="oferta-recomendada-conteudo">
				   <div class="oferta-recomendada-conteudo-texto-oferta"></div>
				   <div class="oferta-recomendada-conteudo-texto-recomendada">COMPRE ANTES QUE ACABE!</div>
				</a>
		  </li>
	   `);
 
	   $(document).on('click', '.oferta-recomendada .oferta-recomendada-conteudo', function(e){
			 $('.acoes-produto.disponivel a.botao.botao-comprar.principal.grande').first()[0].click();
	   });
 
 
	   $('body').append(`
		  <div class="modal modal-personalizado fade" id="modal_oferta_recomendada">
 
				<div class="modal-dialog" role="document">
 
				   <div class="modal-content">
 
					  <div class="modal-header">
							<h5 class="modal-title" id="exampleModalLongTitle">Oferta Recomendada</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
					  </div>
 
					  <div class="modal-body">
 
							A Iluminim comercializa as melhores opções em LED.
							</br>
							</br>
							A oferta que você está vendo em destaque é a combinação de alguns fatores:
							</br>
							</br>
							<ul>
							   <li>valor do frete</li>
							   <li>prazo de entrega</li>
							   <li>o preço do produto</li>
							</ul>
							</br>
							Isso acontece para que você tenha sempre a melhor opção de compra em um só lugar.
 
					  </div>
 
					  <div class="modal-footer">
							<button type="button" class="btn btn-secondary btn-custom" data-dismiss="modal">Fechar</button>
					  </div>
 
				   </div>
 
				</div>
 
		  </div>
	   `);
	},
 
	compareOsModelos(){
 
	 const CompareOsModelos = {
 
		 gerarObjeto(){
 
			 let objeto = [
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q42WBQ-40X40', 'PS-Q42WBQ-40X40'],
					 produtos: [
					 {
						 nome: 'Luminária Plafon 40x40 42w LED Sobrepor Branco Quente',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/29010601/ab48ea5142.jpg',
						 link: '/luminaria-plafon-40x40-42w-led-sobrepor-branco-quente',
						 comparacaoValues: ['Fácil Instalação', '14 Meses', 'Sobrepor', '3,8 CM', 'Bivolt'],
					 },
					 {
						 nome: 'Luminária Plafon 40x40 42W LED Embutir Branco Quente Borda Branca',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/14649101/84d289f8bc.jpg',
						 link: '/luminaria-plafon-40x40-42w-led-embutir-branco-quente-borda-branca',
						 comparacaoValues: ['Slim', '14 Meses', 'Embutir', '1,3 CM', 'Bivolt'],
					 }
					 ]
				 },
			 
				 /*{
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					 aplicacoes: ['RSPM-10WBF', 'R-10WBF'],
					 produtos: [
					 {
						 nome: 'Refletor Holofote MicroLED Slim 10W Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/1000x1000/257/257163/produto/26482453/d4589d7898.jpg',
						 link: '/refletor-holofoe-micro-led-slim-10w-branco-frio',
						 comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Refletor MicroLED Ultra Thin 10W Branco Frio Black Type',
						 imagem: 'https://cdn.awsli.com.br/1000x1000/257/257163/produto/24684967/3d8a2e772c.jpg',
						 link: '/refletor-micro-led-ultra-thin-10w-branco-frio-preto',
						 comparacaoValues: ['Custo-benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					 }
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					 aplicacoes: ['RSPM-20WBF', 'LJC-W20-6500K', 'R-20WBF', 'XS-A20W-6500K'],
					 produtos: [
					 {
						 nome: 'Refletor Holofote MicroLED Slim 20W Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/27107826/0492d64ad9.jpg',
						 link: '/refletor-holofote-micro-led-slim-20w-branco-frio',
						 comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Mini Refletor Holofote LED SMD 20W Branco Frio IP67',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/51230287/66b0c068d9.jpg',
						 link: '/mini-refletor-holofote-led-smd-20w-branco-frio-ip67',
						 comparacaoValues: ['Compacto', '6 Meses', 'IP67', '> 0.98', '120°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Refletor MicroLED Ultra Thin 20W Branco Frio Black Type',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/24685222/c03e498658.jpg',
						 link: '/refletor-microled-ultra-thin-20w-branco-frio-preto',
						 comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Refletor Holofote MicroLED 20W Multifocal Branco Frio Preto',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/39698568/ea016cdad1.jpg',
						 link: '/refletor-holofote-microled-20w-multifocal-branco-frio-preto',
						 comparacaoValues: ['Durabilidade', '6 Meses', 'IP66', '-', '120°', '50.000 Horas', 'Bivolt'],
					 }
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					 aplicacoes: ['RSPM-30WBF', 'LJC-W30-6500K', 'R-30WBF', 'XS-A30W-6500K'],
					 produtos: [
					 {
						 nome: 'Refletor Holofote MicroLED Slim 30W Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/27730580/2069c40987.jpg',
						 link: '/refletor-holofote-microled-slim-30w-branco-frio-ip66',
						 comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Mini Refletor Holofote LED SMD 30W Branco Frio IP67',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/39010352/aa34211c42.jpg',
						 link: '/mini-refletor-holofote-led-smd-30w-branco-frio-ip67',
						 comparacaoValues: ['Compacto', '6 Meses', 'IP67', '> 0.98', '120°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Refletor MicroLED Ultra Thin 30W Branco Frio Black Type',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/24685856/24b5b4e7ee.jpg',
						 link: '/refletor-microled-ultra-thin-30w-branco-frio-preto',
						 comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Refletor Holofote MicroLED 30W Multifocal Branco Frio Preto',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/39697619/320605522b.jpg',
						 link: '/refletor-holofote-microled-30w-multifocal-branco-frio-preto',
						 comparacaoValues: ['Durabilidade', '6 Meses', 'IP66', '-', '120°', '50.000 Horas', 'Bivolt'],
					 }
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					 aplicacoes: ['RSPM-50WBF', 'LJC-W50-6500K', 'R-50WBF', 'XS-A50W-6500K', 'RI-50WBF'],
					 produtos: [
					 {
						 nome: 'Refletor Holofote MicroLED Slim 50w Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/RSPM-50WBF-19-05-2020v2.png',
						 link: '/refletor-holofote-microled-slim-50w-branco-frio-ip66',
						 comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Mini Refletor Holofote LED SMD 50w Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/LJC-W50-6500K-ps-produto-18-05-2020.png',
						 link: '/mini-refletor-holofote-led-smd-50w-branco-frio-ip67',
						 comparacaoValues: ['Compacto', '6 Meses', 'IP67', '> 0.98', '120°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Refletor MicroLED Ultra Thin 50w Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/R-50WVE-ps-produto-18-05-2020.png',
						 link: '/refletor-microled-ultra-thin-50w-branco-frio-preto',
						 comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Refletor Holofote MicroLED 50W Multifocal Branco Frio Preto',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/27783440/ddee109400.jpg',
						 link: '/refletor-holofote-microled-50w-multifocal-branco-frio-preto',
						 comparacaoValues: ['Durabilidade', '6 Meses', 'IP66', '-', '120°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Refletor LED Industrial Modular 50w Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/RI-50WBF-ps-produto-18-05-2020.png',
						 link: '/refletor-led-industrial-modular-50w-branco-frio',
						 comparacaoValues: ['Desempenho', '6 Meses', 'IP68', '> 0.95', '120°', '50.000 Horas', 'Bivolt'],
					 },
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					 aplicacoes: ['RSPM-100WBF', 'LJC-W100-6500K', 'R-100WBF'],
					 produtos: [
					 {
						 nome: 'Refletor Holofote MicroLED Slim 100W Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/18-06-20-comparar-modelo2-RSPM-100WBF.png',
						 link: '/refletor-holofote-microled-100w-branco-frio',
						 comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Mini Refletor Holofote LED SMD 100W Branco Frio IP67',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/18-06-20-comparar-modelo1-LJC-W100-6500K.png',
						 link: '/mini-refletor-holofote-led-smd-100w-branco-frio-ip67',
						 comparacaoValues: ['Compacto', '6 Meses', 'IP67', '> 0.98', '120°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Refletor MicroLED Ultra Thin 100W Branco Frio Black Type',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/18-06-20-comparar-modelo3-R-100WBF.png',
						 link: '/refletor-microled-ultra-thin-100w-branco-frio-preto',
						 comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					 },
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					 aplicacoes: ['RSPM-200WBF', 'LJC-W200-6500K', 'R-200WBF'],
					 produtos: [
					 {
						 nome: 'Refletor Holofote MicroLED Slim 200W Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/18-06-20-comparar-modelo2-RSPM-200WBF.png',
						 link: '/refletor-micro-led-slim-200w-branco-frio',
						 comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Mini Refletor Holofote LED SMD 200W Branco Frio IP67',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/18-06-20-comparar-modelo1-LJC-W200-6500K.png',
						 link: '/mini-refletor-holofote-led-smd-200w-branco-frio-ip67',
						 comparacaoValues: ['Compacto', '6 Meses', 'IP67', '> 0.98', '120°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Refletor MicroLED Ultra Thin 200W Branco Frio Black Type',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/18-06-20-comparar-modelo3-R-200WBFv1.png',
						 link: '/refletor-microled-ultra-thin-200w-branco-frio-preto',
						 comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					 },
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					 aplicacoes: ['RSPM-300WBF', 'LJC-W300-6500K', 'R-300WBF'],
					 produtos: [
					 {
						 nome: 'Refletor Holofote MicroLED Slim 300W Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/RSPM-300WBF-22-06-2020.png',
						 link: '/refletor-holofote-micro-led-slim-300w-branco-frio',
						 comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Mini Refletor Holofote LED SMD 300W Branco Frio IP67',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/LJC-W300-22-06-2020.png',
						 link: '/mini-refletor-holofote-led-smd-300w-branco-frio-ip67',
						 comparacaoValues: ['Compacto', '6 Meses', 'IP67', '> 0.98', '120°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Refletor MicroLED SMD Ultra Thin 300W Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/R-300WBF-22-06-2020.png',
						 link: '/refletor-microled-smd-ultra-thin-300w-branco-frio',
						 comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					 aplicacoes: ['RSPM-400WBF', 'LJC-W400-6500K', 'R-400WBF'],
					 produtos: [
					 {
						 nome: 'Refletor MicroLED SMD Ultra Thin 400W Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/RSPM-400WBF-22-06-2020-v2.png',
						 link: '/refletor-holofote-microled-slim-400w-branco-frio',
						 comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Mini Refletor Holofote LED SMD 400W Branco Frio IP67',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/LJC-W400-22-06-2020-v2.png',
						 link: '/mini-refletor-holofote-led-smd-400w-branco-frio-ip67',
						 comparacaoValues: ['Compacto', '6 Meses', 'IP67', '> 0.98', '120°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Refletor MicroLED SMD Ultra Thin 400W Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/R-400WBF-22-06-2020-v2.png',
						 link: '/refletor-microled-smd-ultra-thin-400w-branco-frio',
						 comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					 },
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Ângulo de Iluminação', 'Vida Útil', 'Voltagem'],
					 aplicacoes: ['RSPM-500WBF', 'R-500WBF'],
					 produtos: [
					 {
						 nome: 'Refletor Holofote MicroLED Slim 500W Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/RSPM-500W-22-06-2020.png',
						 link: '/refletor-holofote-microled-slim-500w-branco-frio',
						 comparacaoValues: ['Preço', '6 Meses', 'IP66', '> 0.80', '180°', '50.000 Horas', 'Bivolt'],
					 },
					 {
						 nome: 'Refletor MicroLED SMD Ultra Thin 500W Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/R-500W-22-06-2020.png',
						 link: '/refletor-microled-smd-ultra-thin-500w-branco-frio',
						 comparacaoValues: ['Custo-Benefício', '6 Meses', 'IP65', '-', '120°', '25.000 Horas', 'Bivolt'],
					 },
					 ]
				 },*/
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-R12WBF', 'PS-R12WBF'],
					 produtos: [
					 {
						 comparacaoValues: ['Fácil Instalação', '14 meses', 'Sobrepor', '4 CM', 'BIVOLT'],
						 imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046527/0bde5ea9fa.jpg",
						 link: "/luminaria-plafon-12w-led-sobrepor-branco-frio-redondo",
						 nome: "Luminária Plafon 12w LED Sobrepor Branco Frio",
					 },
					 {
						 comparacaoValues: ['Slim', '14 meses', 'EMBUTIR', '1,3 CM', 'BIVOLT'],
						 imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046498/8329e7a64e.jpg",
						 link: "/luminaria-plafon-12w-led-embutir-branco-frio-redondo",
						 nome: "Luminária Plafon 12w LED Embutir Branco Frio",
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-R12WBQ', 'PS-R12WBQ'],
					 produtos: [
					 {
						 comparacaoValues: ['Fácil Instalação', '14 meses', 'Sobrepor', '4 CM', 'BIVOLT'],
						 imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046527/0bde5ea9fa.jpg",
						 link: "/luminaria-plafon-12w-led-sobrepor-branco-quente-redondo",
						 nome: "Luminária Plafon 12w LED Sobrepor Branco Quente",
					 },
					 {
						 comparacaoValues: ['Slim', '14 meses', 'EMBUTIR', '1,3 CM', 'BIVOLT'],
						 imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046498/8329e7a64e.jpg",
						 link: "/luminaria-plafon-12w-led-embutir-branco-quente-redondo",
						 nome: "Luminária Plafon 12w LED Embutir Branco Quente",
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-R12WBN', 'PS-R12WBN'],
					 produtos: [
					 {
						 comparacaoValues: ['Fácil Instalação', '14 meses', 'Sobrepor', '4 CM', 'BIVOLT'],
						 imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046527/0bde5ea9fa.jpg",
						 link: "/luminaria-plafon-12w-led-sobrepor-branco-neutro-redondo",
						 nome: "Luminária Plafon 12w LED Sobrepor Branco Neutro",
					 },
					 {
						 comparacaoValues: ['Slim', '14 meses', 'EMBUTIR', '1,3 CM', 'BIVOLT'],
						 imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046498/8329e7a64e.jpg",
						 link: "/luminaria-plafon-12w-led-embutir-branco-neutro-redondo",
						 nome: "Luminária Plafon 12w LED Embutir Branco Neutro",
					 },
					 ]
				 },
				 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-R18WBF', 'PS-R18WBF'],
					 produtos: [
					 {
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 CM', 'BIVOLT'],
						 imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046510/056a4d6a4f.jpg",
						 link: "/luminaria-plafon-18w-led-sobrepor-branco-frio-redondo",
						 nome: "Luminária Plafon 18w LED Sobrepor Branco Frio",
					 },
					 {
						 comparacaoValues: ['Slim', '3 Anos', 'EMBUTIR', '1,3 CM', 'BIVOLT'],
						 imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046506/cc3d91040e.jpg",
						 link: "/luminaria-plafon-18w-led-embutir-branco-frio-redondo",
						 nome: "Luminária Plafon 18w LED Embutir Branco Frio",
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-R18WBQ', 'PS-R18WBQ'],
					 produtos: [
					 {
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 CM', 'BIVOLT'],
						 imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046511/0bd5d321d6.jpg",
						 link: "/luminaria-plafon-18w-led-sobrepor-branco-quente-redondo",
						 nome: "Luminária Plafon 18w LED Sobrepor Branco Quente",
					 },
					 {
						 comparacaoValues: ['Slim', '3 Anos', 'EMBUTIR', '1,3 CM', 'BIVOLT'],
						 imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046506/cc3d91040e.jpg",
						 link: "/luminaria-plafon-18w-led-embutir-branco-quente-redondo",
						 nome: "Luminária Plafon 18w LED Embutir Branco Quente",
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-R18WBN', 'PS-R18WBN'],
					 produtos: [
					 {
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 CM', 'BIVOLT'],
						 imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046510/056a4d6a4f.jpg",
						 link: "/luminaria-plafon-18w-led-sobrepor-branco-neutro-redondo",
						 nome: "Luminária Plafon 18w LED Sobrepor Branco Quente",
					 },
					 {
						 comparacaoValues: ['Slim', '3 Anos', 'EMBUTIR', '1,3 CM', 'BIVOLT'],
						 imagem: "https://cdn.awsli.com.br/100x100/257/257163/produto/8046506/cc3d91040e.jpg",
						 link: "/luminaria-plafon-18w-led-embutir-branco-neutro-redondo",
						 nome: "Luminária Plafon 18w LED Embutir Branco Neutro",
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-R25WBF', 'PS-R25WBF'],
					 produtos: [
					 {
						 nome: 'Luminária Plafon 25w LED Sobrepor Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046519/044c56d504.jpg',
						 link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-redondo',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'Luminária Plafon 25w LED Embutir Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046506/cc3d91040e.jpg',
						 link: '/luminaria-plafon-25w-led-embutir-branco-frio-redondo',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '2 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-R25WBQ', 'PS-R25WBQ'],
					 produtos: [
					 {
						 nome: 'Luminária Plafon 25w LED Sobrepor Branco Quente',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046519/044c56d504.jpg',
						 link: '/luminaria-plafon-25w-led-sobrepor-branco-quente-redondo',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'Luminária Plafon 25w LED Embutir Branco Quente',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046506/cc3d91040e.jpg',
						 link: '/luminaria-plafon-25w-led-embutir-branco-quente-redondo',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '2 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-R25WBN', 'PS-R25WBN'],
					 produtos: [
					 {
						 nome: 'Luminária Plafon 25w LED Sobrepor Branco Neutro',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046519/044c56d504.jpg',
						 link: '/luminaria-plafon-25w-led-sobrepor-branco-neutro-redondo',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'Luminária Plafon 25w LED Embutir Branco Neutro',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046506/cc3d91040e.jpg',
						 link: '/luminaria-plafon-25w-led-embutir-branco-neutro-redondo',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '2 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q12WBF', 'PS-Q12WBF'],
					 produtos: [
					 {
						 nome: 'LUMINÁRIA PLAFON 12W LED SOBREPOR BRANCO FRIO',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046500/0e7822280f.jpg',
						 link: '/luminaria-plafon-12w-led-sobrepor-branco-frio-quadrado',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'LUMINÁRIA PLAFON 12W LED EMBUTIR BRANCO FRIO',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046496/0c9b985b0e.jpg',
						 link: '/luminaria-plafon-12w-led-embutir-branco-frio-quadrado',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q12WBN', 'PS-Q12WBN'],
					 produtos: [
					 {
						 nome: 'LUMINÁRIA PLAFON 12W LED SOBREPOR BRANCO NEUTRO',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046500/0e7822280f.jpg',
						 link: '/luminaria-plafon-12w-led-sobrepor-branco-neutro-quadrado',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'LUMINÁRIA PLAFON 12W LED EMBUTIR BRANCO NEUTRO',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046496/0c9b985b0e.jpg',
						 link: '/luminaria-plafon-12w-led-embutir-neutro-quadrado',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q12WBQ', 'PS-Q12WBQ'],
					 produtos: [
					 {
						 nome: 'LUMINÁRIA PLAFON 12W LED SOBREPOR BRANCO QUENTE',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046500/0e7822280f.jpg',
						 link: '/luminaria-plafon-12w-led-sobrepor-branco-quente-quadrado',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'LUMINÁRIA PLAFON 12W LED EMBUTIR BRANCO QUENTE',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046496/0c9b985b0e.jpg',
						 link: '/luminaria-plafon-12w-led-embutir-branco-quente-quadrado',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },               
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q18WBF', 'PS-Q18WBF'],
					 produtos: [
					 {
						 nome: 'Luminária Plafon 18w LED Sobrepor Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046508/e4c5157979.jpg',
						 link: '/luminaria-plafon-18w-led-sobrepor-branco-frio-quadrado',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'Luminária Plafon 18w LED Embutir Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046504/a794fc0e6b.jpg',
						 link: '/luminaria-plafon-18w-led-embutir-branco-frio-quadrado',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q18WBQ', 'PS-Q18WBQ'],
					 produtos: [
					 {
						 nome: 'Luminária Plafon 18w LED Sobrepor Branco Quente',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046508/e4c5157979.jpg',
						 link: '/luminaria-plafon-18w-led-sobrepor-branco-quente-quadrado',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'Luminária Plafon 18w LED Embutir Branco Quente',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046504/a794fc0e6b.jpg',
						 link: '/luminaria-plafon-18w-led-embutir-branco-quente-quadrado',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q18WBN', 'PS-Q18WBN'],
					 produtos: [
					 {
						 nome: 'Luminária Plafon 18w LED Sobrepor Branco Neutro',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046508/e4c5157979.jpg',
						 link: '/luminaria-plafon-18w-led-sobrepor-branco-neutro-quadrado',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'Luminária Plafon 18w LED Embutir Branco Neutro',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046504/a794fc0e6b.jpg',
						 link: '/luminaria-plafon-18w-led-embutir-branco-neutro-quadrado',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q25WBF', 'PS-Q25WBF'],
					 produtos: [
					 {
						 nome: 'Luminária Plafon 25w LED Sobrepor Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046517/e329b96685.jpg',
						 link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'Luminária Plafon 25w LED Embutir Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046513/48c5b1982b.jpg',
						 link: '/luminaria-plafon-25w-led-embutir-branco-frio-quadrado',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 { 
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q25WBQ', 'PS-Q25WBQ'],
					 produtos: [
					 {
						 nome: 'Luminária Plafon 25w LED Sobrepor Branco Quente',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046517/e329b96685.jpg',
						 link: '/luminaria-plafon-25w-led-sobrepor-branco-quente-quadrado',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'Luminária Plafon 25w LED Embutir Branco Quente',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046513/48c5b1982b.jpg',
						 link: '/luminaria-plafon-25w-led-embutir-branco-quente-quadrado',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q25WBN', 'PS-Q25WBN'],
					 produtos: [
					 {
						 nome: 'Luminária Plafon 25w LED Sobrepor Branco Neutro',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046517/e329b96685.jpg',
						 link: '/luminaria-plafon-25w-led-sobrepor-branco-neutro-quadrado',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'Luminária Plafon 25w LED Embutir Branco Neutro',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046513/48c5b1982b.jpg',
						 link: '/luminaria-plafon-25w-led-embutir-branco-neutro-quadrado',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PS-Q48WBF', 'PG-Q48WBF'],
					 produtos: [
					 {
						 nome: 'Luminária Plafon 48W LED Sobrepor Branco Frio Borda Branca',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/20755316/8bb46a4362.jpg',
						 link: '#!',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'Luminária Plafon 48W LED Embutir Branco Frio Borda Branca',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/12615355/5ec9f9ed58.jpg',
						 link: '#!',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 { 
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q45WBF', 'PS-Q45WBF'],
					 produtos: [
					 {
						 nome: 'Luminária Plafon 45W LED Sobrepor Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/80775223/0b17a4b95f.jpg',
						 link: '#!',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'Luminária Plafon 45W LED Embutir Branco Frio',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/83486398/5b2506bb9b.jpg',
						 link: '#!',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 { 
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q45WBQ', 'PS-Q45WBQ'],
					 produtos: [
					 {
						 nome: 'Luminária Plafon 60x60 45W LED Sobrepor Branco Quente',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/80775223/0b17a4b95f.jpg',
						 link: '/luminaria-plafon-60x60-45w-led-sobrepor-branco-quente',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'Luminária Plafon 62x62 45W LED Embutir Branco Quente',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/83486398/5b2506bb9b.jpg',
						 link: '/luminaria-plafon-62x62-45w-led-embutir-branco-quente',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q45WBN', 'PS-Q45WBN'],
					 produtos: [
					 {
						 nome: 'LUMINÁRIA PLAFON 6W LED SOBREPOR BRANCO QUENTE',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/80775223/0b17a4b95f.jpg',
						 link: '/luminaria-plafon-60x60-45w-led-sobrepor-branco-neutro',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 cm', 'Bivolt'],
					 },
					 {
						 nome: 'LUMINÁRIA PLAFON 6W LED EMBUTIR BRANCO QUENTE',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/83486398/5b2506bb9b.jpg',
						 link: '/luminaria-plafon-62x62-45w-led-embutir-branco-neutro',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q6WBQ', 'PS-Q6WBQ'],
					 produtos: [
					 {
						 nome: 'LUMINÁRIA PLAFON 6W LED SOBREPOR BRANCO QUENTE',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/11847246/59da432a6e.jpg',
						 link: '/luminaria-plafon-6w-led-sobrepor-branco-quente',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '4 cm', 'Bivolt'],
					 },
					 {
						 nome: 'LUMINÁRIA PLAFON 6W LED EMBUTIR BRANCO QUENTE',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046522/11f768cc17.jpg',
						 link: '/luminaria-plafon-6w-led-embutir-branco-quente-quadrado',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-R6WBQ', 'PS-R6WBQ'],
					 produtos: [
					 {
						 nome: 'LUMINÁRIA PLAFON 6W LED SOBREPOR BRANCO QUENTE',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/8046526/e66d903401.jpg',
						 link: '/luminaria-plafon-6w-led-sobrepor-branco-quente-redondo',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 cm', 'Bivolt'],
					 },
					 {
						 nome: 'LUMINÁRIA PLAFON 6W LED EMBUTIR BRANCO QUENTE',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046524/a3eae1f208.jpg',
						 link: '/luminaria-plafon-6w-led-embutir-branco-quente-redondo',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q6WBF', 'PS-Q6WBF'],
					 produtos: [
					 {
						 nome: 'LUMINÁRIA PLAFON 6W LED SOBREPOR BRANCO FRIO',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046525/7d5bab532f.jpg',
						 link: '/luminaria-plafon-6w-led-sobrepor-branco-frio-quadrado',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 cm', 'Bivolt'],
					 },
					 {
						 nome: 'LUMINÁRIA PLAFON 6W LED EMBUTIR BRANCO FRIO',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046521/02f7b77de8.jpg',
						 link: '/luminaria-plafon-6w-led-embutir-branco-frio-quadrado',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-R6WBF', 'PS-R6WBF'],
					 produtos: [
					 {
						 nome: 'LUMINÁRIA PLAFON 6W LED SOBREPOR BRANCO FRIO',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046527/0bde5ea9fa.jpg',
						 link: '/luminaria-plafon-6w-led-sobrepor-branco-frio-redondo',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 cm', 'Bivolt'],
					 },
					 {
						 nome: 'LUMINÁRIA PLAFON 6W LED EMBUTIR BRANCO FRIO',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/8046523/1a26444c1b.jpg',
						 link: '/luminaria-plafon-6w-led-embutir-branco-frio-redondo',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-Q6WBN', 'PS-Q6WBN'],
					 produtos: [
					 {
						 nome: 'LUMINÁRIA PLAFON 6W LED SOBREPOR BRANCO NEUTRO',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/38359454/071d1b2643.jpg',
						 link: '/luminaria-plafon-6w-led-sobrepor-quadrado-branco-neutro',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 cm', 'Bivolt'],
					 },
					 {
						 nome: 'LUMINÁRIA PLAFON 6W LED EMBUTIR BRANCO NEUTRO',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/28319683/90fecb25bd.jpg',
						 link: '/luminaria-plafon-6w-led-embutir-branco-neutro-quadrado',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Modelo', 'Profundidade', 'Voltagem'],
					 aplicacoes: ['PG-R6WBN', 'PS-R6WBN'],
					 produtos: [
					 {
						 nome: 'LUMINÁRIA PLAFON 6W LED SOBREPOR BRANCO NEUTRO',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/38359066/184219a74e.jpg',
						 link: '/luminaria-plafon-6w-led-sobrepor-branco-neutro',
						 comparacaoValues: ['Fácil Instalação', '3 Anos', 'Sobrepor', '3 cm', 'Bivolt'],
					 },
					 {
						 nome: 'LUMINÁRIA PLAFON 6W LED EMBUTIR BRANCO NEUTRO',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/28320220/911cde57c0.jpg',
						 link: '/luminaria-plafon-6w-led-embutir-branco-neutro-redonda',
						 comparacaoValues: ['Slim', '3 Anos', 'Embutir', '1,3 cm', 'Bivolt'],
					 },
					 ]
				 },
				 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					 aplicacoes: ['XL-3528RGB', 'XL-5050RGB'],
					 produtos: [
					 {
						 nome: 'FITA LED RGB COLORIDA 3528 5 METROS 24W',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/15605205/5c2cb84e47.jpg',
						 link: '/fita-led-rgb-colorida-3528-5-metros-24w',
						 comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					 },
					 {
						 nome: 'FITA LED RGB COLORIDA 5050 5 METROS 72W',
						 imagem: 'https://cdn.awsli.com.br/100x100/257/257163/produto/15605205/5c2cb84e47.jpg',
						 link: '/fita-led-rgb-colorida-5050-5-metros-72w-ip65',
						 comparacaoValues: ['Desempenho', '14 Meses', 'IP65', '72W',  'SMD 5050', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					 aplicacoes: ['XL-3528BQ', 'XL-5050BQ'],
					 produtos: [
					 {
						 nome: 'FITA LED BRANCO QUENTE 3528 5 METROS 24W',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/28273664/2a39a722a8.jpg',
						 link: '/fita-led-branco-quente-3528-5-metros-24w',
						 comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					 },
					 {
						 nome: 'FITA LED BRANCO QUENTE 5050 5 METROS 72W',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/28273664/2a39a722a8.jpg',
						 link: '/fita-led-branco-quente-5050-5-metros-72w',
						 comparacaoValues: ['Desempenho', '14 Meses', 'IP20', '72W',  'SMD 5050', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					 aplicacoes: ['XL-3528AZ', 'XL-5050AZ'],
					 produtos: [
					 {
						 nome: 'Fita LED Azul 3528 5 metros 24W IP65',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/19664195/426fcffd85.jpg',
						 link: '/fita-led-azul-3528-5-metros-24w-ip65',
						 comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					 },
					 {
						 nome: 'Fita LED Azul 5050 5 metros 72W IP65',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/19664195/426fcffd85.jpg',
						 link: '/fita-led-azul-5050-5-metros-72w-ip65',
						 comparacaoValues: ['Desempenho', '14 Meses', 'IP20', '72W',  'SMD 5050', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					 aplicacoes: ['XL-3528BF', 'XL-5050BF'],
					 produtos: [
					 {
						 nome: 'Fita LED Branco Frio 3528 5 metros 24W',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/15444902/829975f893.jpg',
						 link: '/fita-led-branco-frio-3528-5-metros-24w',
						 comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					 },
					 {
						 nome: 'Fita LED Branco Frio 5050 5 metros 72W IP65',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/15444902/829975f893.jpg',
						 link: '/fita-led-branco-frio-5050-5-metros-72w-ip65',
						 comparacaoValues: ['Desempenho', '14 Meses', 'IP20', '72W',  'SMD 5050', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					 aplicacoes: ['XL-3528BM', 'XL-5050BM'],
					 produtos: [
					 {
						 nome: 'Fita LED Branco Morno 3528 5 metros 24W IP65',
						 imagem: 'https://cdn.awsli.com.br/800x800/257/257163/produto/15604609/98d677f8dd.jpg',
						 link: '/fita-led-branco-morno-3528-5-metros-24w-ip65',
						 comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					 },
					 {
						 nome: 'Fita LED Branco Morno 5050 5 metros 72W IP65',
						 imagem: 'https://cdn.awsli.com.br/800x800/257/257163/produto/15604609/98d677f8dd.jpg',
						 link: '/fita-led-branco-morno-5050-5-metros-72w-ip65',
						 comparacaoValues: ['Desempenho', '14 Meses', 'IP20', '72W',  'SMD 5050', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					 aplicacoes: ['XL-3528RO', 'XL-5050RO'],
					 produtos: [
					 {
						 nome: 'Fita LED Rosa 3528 5 metros 24W IP65',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/31140979/bb89adebaf.jpg',
						 link: '/fita-led-rosa-3528-5-metros-24w-ip65',
						 comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					 },
					 {
						 nome: 'Fita LED Rosa 5050 5 metros 72W IP65',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/31140979/bb89adebaf.jpg',
						 link: '/fita-led-rosa-5050-5-metros-72w-ip65',
						 comparacaoValues: ['Desempenho', '14 Meses', 'IP20', '72W',  'SMD 5050', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					 aplicacoes: ['XL-3528VM', 'XL-5050VM'],
					 produtos: [
					 {
						 nome: 'Fita LED Vermelha 3528 5 metros 24W IP65',
						 imagem: 'https://cdn.awsli.com.br/800x800/257/257163/produto/19664285/2ff95fafb4.jpg',
						 link: '/fita-led-vermelha-3528-5-metros-72w-ip65',
						 comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					 },
					 {
						 nome: 'Fita LED Vermelha 5050 5 metros 72W IP65',
						 imagem: 'https://cdn.awsli.com.br/800x800/257/257163/produto/19664285/2ff95fafb4.jpg',
						 link: '/fita-led-vermelha-5050-5-metros-72w-ip65',
						 comparacaoValues: ['Desempenho', '14 Meses', 'IP20', '72W',  'SMD 5050', 'Bivolt'],
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Vantagem', 'Garantia', 'Índice de Proteção', 'Fator Potência', 'Modelo', 'Voltagem'],
					 aplicacoes: ['XL-3528VE', 'XL-5050VE'],
					 produtos: [
					 {
						 nome: 'Fita LED Verde 3528 5 metros 24W IP65',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/19664004/0d1205e7f2.jpg',
						 link: '/fita-led-verde-3528-5-metros-24w-ip65',
						 comparacaoValues: ['Custo-benefício', '14 Meses', 'IP20', '24W', 'SMD 3528', 'Bivolt'],
					 },
					 {
						 nome: 'Fita LED Verde 5050 5 metros 72W IP65',
						 imagem: 'https://cdn.awsli.com.br/600x450/257/257163/produto/19664004/0d1205e7f2.jpg',
						 link: '/fita-led-verde-5050-5-metros-72w-ip6',
						 comparacaoValues: ['Desempenho', '14 Meses', 'IP20', '72W',  'SMD 5050', 'Bivolt'],
					 },
					 ]
				 },
			 
				 /*{
					 comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					 aplicacoes: ['SMD-Q3WBF', 'COB-Q3WBF'],
					 produtos: [
					 {
						 comparacaoValues: ['3w', '210 Lúmens', '55º', '25.000 horas', '7,5 X 7,5 X 4 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/30457670/83c1f5e767.jpg",
						 link: "/spot-led-smd-3w-quadrado-branco-frio",
						 nome: "SPOT LED SMD 3W QUADRADO BRANCO FRIO",
					 },
					 {
						 comparacaoValues: ['3w', '270 Lúmens', '120º', '50.000 horas', '9,5 X 9,5 X 4,2 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/12587062/e6eff9c00f.jpg",
						 link: "/spot-led-3w-cob-embutir-quadrado-branco-frio-base-branca",
						 nome: "SPOT LED 3W COB EMBUTIR QUADRADO BRANCO FRIO BASE BRANCA",
					 },
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					 aplicacoes: ['SMD-Q3WBQ', 'COB-Q3WBQ'],
					 produtos: [
					 {
						 comparacaoValues: ['3w', '210 Lúmens', '55º', '25.000 horas', '7,5 X 7,5 X 4 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/30457670/83c1f5e767.jpg",
						 link: "/spot-led-smd-3w-quadrado-branco-quente",
						 nome: "SPOT LED SMD 3W QUADRADO BRANCO QUENTE",
					 },
					 {
						 comparacaoValues: ['3w', '270 Lúmens', '120º', '50.000 horas', '9,5 X 9,5 X 4,2 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/12587062/e6eff9c00f.jpg",
						 link: "/spot-led-3w-cob-embutir-quadrado-branco-quente-base-branca",
						 nome: "Spot LED 3W COB Embutir Quadrado Branco Quente Base Branca",
					 },
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					 aplicacoes: ['SMD-R3WBF', 'COB-R3WBF'],
					 produtos: [
					 {
						 comparacaoValues: ['3w', '210 Lúmens', '55º', '25.000 horas', '7,5 X 7,5 X 4 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/30457369/4350d495e5.jpg",
						 link: "/spot-led-smd-3w-redondo-branco-frio",
						 nome: "SPOT LED SMD 3W REDONDO BRANCO FRIO",
					 },
					 {
						 comparacaoValues: ['3w', '270 Lúmens', '120º', '50.000 horas', '9,5 X 9,5 X 4,2 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/12491415/f1d14be73d.jpg",
						 link: "/spot-led-3w-cob-embutir-redondo-branco-frio-base-branca",
						 nome: "SPOT LED 3W COB EMBUTIR REDONDO BRANCO FRIO BASE BRANCA",
					 },
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					 aplicacoes: ['SMD-R3WBQ', 'COB-R3WBQ'],
					 produtos: [
					 {
						 comparacaoValues: ['3w', '210 Lúmens', '55º', '25.000 horas', '7,5 X 7,5 X 4 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/30457369/4350d495e5.jpg",
						 link: "/spot-led-smd-3w-redondo-branco-quente",
						 nome: "SPOT LED SMD 3W REDONDO BRANCO QUENTE",
					 },
					 {
						 comparacaoValues: ['3w', '270 Lúmens', '120º', '50.000 horas', '9,5 X 9,5 X 4,2 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/12491415/f1d14be73d.jpg",
						 link: "/spot-led-3w-cob-embutir-redondo-branco-quente-base-branca",
						 nome: "SPOT LED 3W COB EMBUTIR REDONDO BRANCO QUENTE BASE BRANCA",
					 },
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					 aplicacoes: ['SMD-Q5WBF', 'COB-Q5WBF'],
					 produtos: [
					 {
						 comparacaoValues: ['5w', '350 Lúmens', '55º', '25.000 horas', '8,6 X 8,6 X 2,5 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/30457089/882b65244e.jpg",
						 link: "/spot-led-smd-5w-quadrado-branco-frio",
						 nome: "SPOT LED SMD 5W QUADRADO BRANCO FRIO",
					 },
					 {
						 comparacaoValues: ['5w', '450 Lúmens', '35º', '50.000 horas', '9 X 9 X 5 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/12493992/8485c55252.jpg",
						 link: "/spot-led-5w-cob-embutir-quadrado-branco-frio-base-branca",
						 nome: "SPOT LED 5W COB EMBUTIR QUADRADO BRANCO FRIO BASE BRANCA",
					 },
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					 aplicacoes: ['SMD-Q5WBF', 'COB-Q5WBF', 'D-QAB5WB'],
					 produtos: [
					 {
						 comparacaoValues: ['5w', '350 Lúmens', '55º', '25.000 horas', '8,6 X 8,6 X 2,5 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/30457089/882b65244e.jpg",
						 link: "/spot-led-smd-5w-quadrado-branco-quente",
						 nome: "SPOT LED SMD 5W QUADRADO BRANCO QUENTE",
					 },
					 {
						 comparacaoValues: ['5w', '450 Lúmens', '35º', '50.000 horas', '9 X 9 X 5 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/15069434/70b8c3d4af.jpg",
						 link: "/spot-led-5w-cob-embutir-quadrado-branco-quente-base-branca",
						 nome: "Spot LED 5W COB Embutir Quadrado Branco Quente Base Branca",
					 },
					 {
						 comparacaoValues: ['5w', '475 Lúmens', '120º', '50.000 horas', '10,8 X 10,8 X 4 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/9595287/2c9cbb9d92.jpg",
						 link: "/spot-5w-dicroica-led-base-branca",
						 nome: "Spot 5W Dicróica LED Direcionavel Base Branca",
					 }
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					 aplicacoes: ['SMD-R5WBQ', 'COB-R5WBQ'],
					 produtos: [
					 {
						 comparacaoValues: ['5w', '350 Lúmens', '55º', '25.000 horas', '8,6 X 8,6 X 2,5 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/800x800/257/257163/produto/30457002/6fc736cb0b.jpg",
						 link: "/spot-led-smd-5w-redondo-branco-quente",
						 nome: "Spot LED SMD 5W Redondo Branco Quente",
					 },
					 {
						 comparacaoValues: ['5w', '450 Lúmens', '35º', '50.000 horas', '9 X 9 X 5 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/12412147/2d877643ea.jpg",
						 link: "/spot-led-5w-cob-embutir-redondo-branco-quente-base-branca",
						 nome: "Spot LED 5W COB Embutir Redondo Branco Quente Base Branca",
					 }
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					 aplicacoes: ['SMD-R5WBF', 'COB-R5WBF'],
					 produtos: [
					 {
						 comparacaoValues: ['5w', '350 Lúmens', '55º', '25.000 horas', '8,6 X 8,6 X 2,5 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/800x800/257/257163/produto/30457002/6fc736cb0b.jpg",
						 link: "/spot-led-smd-5w-redondo-branco-frio",
						 nome: "Spot LED SMD 5W Redondo Branco Frio",
					 },
					 {
						 comparacaoValues: ['5w', '450 Lúmens', '35º', '50.000 horas', '9 X 9 X 5 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/12412147/2d877643ea.jpg",
						 link: "/spot-led-5w-cob-embutir-redondo-branco-frio-base-branca",
						 nome: "Spot LED 5W COB Embutir Redondo Branco Frio Base Branca",
					 }
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					 aplicacoes: ['SMD-Q7WBF', 'COB-Q7WBF'],
					 produtos: [
					 {
						 comparacaoValues: ['7w', '630 Lúmens', '55º', '25.000 horas', '9 x 9 x 4,5 cm', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/43072722/e53be8a200.jpg",
						 link: "/spot-led-smd-7w-quadrado-branco-frio",
						 nome: "SPOT LED SMD 7W QUADRADO BRANCO FRIO",
					 },
					 {
						 comparacaoValues: ['7w', '630 Lúmens', '30º', '50.000 horas', '10 x 10 x 5,3 cm', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/15069569/a251cae05c.jpg",
						 link: "/spot-led-7w-cob-embutir-quadrado-branco-frio-base-branca",
						 nome: "SPOT LED 7W COB EMBUTIR QUADRADO BRANCO FRIO BASE BRANCA",
					 },
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					 aplicacoes: ['SMD-Q7WBQ', 'COB-Q7WBQ', 'D-QAB7WB'],
					 produtos: [
					 {
						 comparacaoValues: ['7w', '630 Lúmens', '55º', '25.000 horas', '9 x 9 x 4,5 cm', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/43072722/e53be8a200.jpg",
						 link: "/spot-led-smd-7w-quadrado-branco-quente",
						 nome: "SPOT LED SMD 7W QUADRADO BRANCO QUENTE",
					 },
					 {
						 comparacaoValues: ['7w', '630 Lúmens', '30º', '50.000 horas', '10 x 10 x 5,3 cm', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/15069569/a251cae05c.jpg",
						 link: "/spot-led-7w-cob-embutir-quadrado-branco-quente-base-branca",
						 nome: "SPOT LED 7W COB EMBUTIR QUADRADO BRANCO QUENTE BASE BRANCA",
					 },
					 {
						 comparacaoValues: ['7w', '490 Lúmens', '30º', '25.000 horas', '10,8 X 10,8 X 4 CM', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/9595289/752ea9e01a.jpg",
						 link: "/spot-7w-dicroica-led-base-branca",
						 nome: "Spot 7W Dicróica LED Direcionavel Base Branca",
					 }
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					 aplicacoes: ['SMD-R7WBF', 'COB-R7WBF'],
					 produtos: [
					 {
						 comparacaoValues: ['7w', '630 Lúmens', '55º', '25.000 horas', '9 x 9 x 4,5 cm', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/41610089/57f265c152.jpg",
						 link: "/spot-led-smd-7w-redondo-branco-frio",
						 nome: "SPOT LED SMD 7W REDONDO BRANCO FRIO",
					 },
					 {
						 comparacaoValues: ['7w', '630 Lúmens', '30º', '50.000 horas', '10 x 10 x 5,3 cm', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/15069525/3783defc2c.jpg",
						 link: "/spot-led-7w-cob-embutir-redondo-branco-frio-base-branca",
						 nome: "Spot LED 7W COB Embutir Redondo Branco Frio Base Branca",
					 },
					 ]
				 },*/
			 
				 /*{
					 comparacao: ['Potência', 'Fluxo Luminoso', 'Ângulo de Luz', 'Vida Útil', 'Dimensão (Compr. X Larg. X Alt.)', 'Voltagem'],
					 aplicacoes: ['SMD-R7WBQ', 'COB-R7WBQ'],
					 //naoAplicar: ['SMD-R7WBF-PT'],
					 produtos: [
					 {
						 comparacaoValues: ['7w', '630 Lúmens', '55º', '25.000 horas', '9 x 9 x 4,5 cm', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/600x450/257/257163/produto/41610089/57f265c152.jpg",
						 link: "/spot-led-smd-7w-redondo-branco-quente",
						 nome: "Spot LED SMD 7W Redondo Branco Quente",
					 },
					 {
						 comparacaoValues: ['7w', '630 Lúmens', '30º', '50.000 horas', '10 x 10 x 5,3 cm', 'Bivolt Automático'],
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/15069525/3783defc2c.jpg",
						 link: "/spot-led-7w-cob-embutir-redondo-branco-quente-base-branca",
						 nome: "Spot LED 7W COB Embutir Redondo Branco Quente Base Branca",
					 },
					 ]
				 },*/
			 
				 {
					 comparacao: ['Área de abrangência', 'Autonomia', 'Luminaria', 'Modelo', 'Luz'],
					 aplicacoes: ['23597', '24080', '27025', '25684', '25113', '25114', '25923', '25922', '24707', '24530', '24777', '25919', '24699', '25682', '25685', '25593', '26568', '25328'],
					 produtos: [
					 {
						 comparacaoValues: ['25m²', '3/6h', 'Móvel', 'Slim', 'Fixa'],
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/16905459/72e5f39103.jpg",
						 link: "/luminaria-de-emergencia-30-leds-slim",
						 nome: "Luminária de Emergência 30 LEDs | Slim",
					 },
					 {
						 comparacaoValues: ['450m²', '3h', 'Móvel', '2 Farois', 'Direcionavel'],
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/26997410/a20be0c9ce.jpg",
						 link: "/luminaria-de-emergencia-led-2200-lumens-2-farois",
						 nome: "Luminária de Emergência LED 2.200 Lúmens | 2 Faróis",
					 },
					 {
						 comparacaoValues: ['120m²', '3h', 'Móvel | Fixa', '2 Farois | Premium', 'Fixa'],
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/41252542/e4048b1722.jpg",
						 link: "/luminaria-de-emergencia-400-lumens-premium",
						 nome: "Luminária de Emergência 400 Lúmens | Premium",
					 },
					 ]
				 },
			 
				 {
					 comparacao: ['Ângulo de iluminação', 'Potência', 'Vida útil', 'Modelo'],
					 aplicacoes: ['LT-', 'LUM-', 'T5C-30-'],
					 produtos: [
					 {
						 comparacaoValues: ['120º', '9W', '50.000 Horas', 'Tubular T8'], //LT-60BF
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/8046561/a8bee3584e.jpg",
						 link: "/lampada-led-tubular-t8-9w",
						 nome: "Lampada LED Tubular T8 9w - 60cm - Branco Frio | Inmetro",
					 },
					 {
						 comparacaoValues: ['120º', '9W', '40.000 Horas', 'Tubular T8 Com Calha'], //LTC-60-9W-L-BF
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/16243221/29cb0812cc.jpg",
						 link: "/lampada-led-tubular-t8-9w-60cm-com-calha-branco-frio",
						 nome: "Lampada LED Tubular T8 9w 60cm c/ Calha - Branco Frio",
					 },
					 {
						 comparacaoValues: ['120º', '9W', '35.000 Horas', 'Ultra LED Tubular T5'], // T5C-60-9W-L-BF
						 imagem: "https://cdn.awsli.com.br/300x300/257/257163/produto/42501063/cfd9341cab.jpg",
						 link: "/lampada-led-tubular-t5-9w-60m-c-calha-branco-frio-inmetro",
						 nome: "Lampada LED Tubular T5 9w - 60cm c/ Calha - Branco Frio | Inmetro",
					 },
					 ]
				 },
			 
			 ];
 
			 return objeto;
 
		 },
 
		 gerarHTML(){
 
			 let prodSku = ILUMINIM_UTILS.produto.sku();
 
			 let objeto = this.gerarObjeto();
			 
			 let itemFiltrado = objeto.filter(item=> {
 
				 let produtoFiltrado = item.aplicacoes.filter(sku=> {
 
					 if( ['LT-', 'LUM-', 'T5C-30-'].includes(sku) ){
 
					 if(ILUMINIM_UTILS.produto.nome().includes('Tubular')){
 
						 return item;
 
					 }
 
				 
					 }else {
 
					 if(prodSku == sku || (prodSku.includes(`${sku}-KIT`) || prodSku.includes(`${sku}-60X60`) || prodSku.includes(`${sku}-62X62`)) ){
						 
						 return item;
 
					 }
 
					 }
 
				 });
		 
				 if(produtoFiltrado.length > 0){
					 
					 let naoAplicar = (produtoFiltrado[0].naoAplicar || []).filter(sku=> prodSku.includes(sku));
 
					 if( naoAplicar.length == 0 ){
 
					 return item;
					 
					 }
		 
				 }
			 
			 });
		 
			 if(itemFiltrado.length == 0){
				 return;
			 }
		 
			 let { imagem, comparacao, produtos } = itemFiltrado[0];
 
			 
		 
			 let htmlItems = produtos.map(item=> {
		 
				 let comparacaoValuesHTML = item.comparacaoValues.map(value=> `<div class="caracteristica-item">${value}</div>`).join('');
		 
				 return `
					 <div class="produto-similar ps-produto">
		 
						 <div class="caracteristica-item-img-produto">
							 <a href="${item.link}">
								 <img src="${item.imagem}" alt="${item.nome}" title="${item.nome}"> 
							 </a>
						 
							 <div class="nome-produto">
								 <a href="${item.link}">${item.nome}</a>
							 </div>
						 </div>
						 
						 ${comparacaoValuesHTML}
		 
					 </div>
				 `;
		 
			 }).join('');
		 
			 let comparacaoHTML = comparacao.map(value=> `<div class="caracteristica-item">${value}</div>`).join('');
 
			 return `
				 <div class="descricao-conteudo-accordion compare-os-modelos">
					 <div class="descricao-titulo descricao-titulo-compare-os-modelos">
					 <span class="descricao-icone">${ILUMINIM_UTILS.icones.descricao_produto.compare_modelos}</span>
					 <span>Compare os Modelos</span>
					 </div>
					 <div class="descricao-conteudo">
 
					 <div class="produtos-similares visible-desktop">
							 <div class="acopla-produtos">
								 <div class="produto-similar ps_tabela">
 
								 <div class="caracteristica-item-img-produto">
										 <img src="https://cdn.awsli.com.br/257/257163/arquivos/18-05-2020-icon-ps-tabela.png">
								 </div>
								 
								 ${comparacaoHTML}
 
								 </div>
 
								 ${htmlItems}
							 </div>
					 </div>
 
					 </div>
				 </div>
			 `;
 
		 },
 
		 renderizar(){
 
			 let html = this.gerarHTML();
 
			 $('.descricao-conteudo-accordion[data-referencia="Características Técnicas"]').after(html);
 
		 }
 
		 }
 
	   CompareOsModelos.renderizar();
 
	},
 
	bannerOfertaRelampago(){
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()){
		  return;
	   }
 
	   let OfertaRelampago = {
 
		  gerarObjeto(){
 
				let imagem = ILUMINIM_UTILS.produto.imagem();
				let nome = ILUMINIM_UTILS.produto.nome();
				let precoRiscado =  ILUMINIM_UTILS.produto.precoRiscado();
				let precoPromocional =  ILUMINIM_UTILS.produto.precoPromocional();
				let precoBoleto = ILUMINIM_UTILS.produto.precoBoleto();
				let valorParcelas = ILUMINIM_UTILS.produto.valorParcelas();
				let quantidadeParcelas = ILUMINIM_UTILS.produto.quantidadeParcelas();
 
				return {
				   imagem,
				   nome,
				   precoRiscado,
				   precoPromocional,
				   valorParcelas,
				   quantidadeParcelas,
				   precoBoleto
				};
 
		  },
 
		  gerarHTML(){
 
				let objeto = this.gerarObjeto();
 
				let { imagem, nome, precoRiscado, valorParcelas, quantidadeParcelas, precoPromocional, precoBoleto } = objeto;
 
				return `
				   <div class="banner-oferta-relampago">
					  <div class="banner-oferta-relampago--conteudo-oferta-relampago">
 
							<div class="conteudo-oferta-relampago--info-banner">
							   <div class="info-banner--oferta-relampago"><span>Oferta Relâmpago</span></div>
							   <div class="info-banner--texto-24h">Só por 24H</div>
							</div>
 
							<div class="conteudo-oferta-relampago--info-produto">
							   <div class="info-produto--imagem"><img src="${imagem}"></div>
 
							   <div class="info-produto--infos">
								  <div class="infos--nome-produto">${nome}</div>
 
								  <div class="infos--precos">
										
										<div>
										   DE R$ <b class="precos--preco-riscado">${precoRiscado}</b> por
 
										   ${ precoBoleto ? `
											  <b class="precos--boleto">
													R$ ${precoBoleto}
											  </b> via pix
										   ` : `
											  <b class="precos--boleto">
													R$ ${precoPromocional}
											  </b>
										   ` }
										   
										</div>
 
										<div>
										   
										   ou em até <b class="precos--percelas-quantidade">${quantidadeParcelas || (1+'x')}</b> de 
										   <b class="precos--parcelas-preco">R$ ${valorParcelas || precoPromocional}</b> sem juros
										   
										</div>
 
								  </div>
 
							   </div>
							</div>
 
					  </div>
				   </div>
				`;
 
		  },
 
		  renderizar(){
 
				if( $('.acoes-produto.indisponivel').length > 0 ){
 
				   return;
 
				}
 
				if( window.location.search.includes('oferta-relampago') ){
 
				   let html = this.gerarHTML();
 
				   $('#corpo > .conteiner > .secao-principal').before(html);
 
				}
 
		  }
 
	   }
 
	   OfertaRelampago.renderizar();
 
	},
 
	/*criarLocaisDeAplicacoesDinamicas(){
 
	   let target = $('.produto>.row-fluid:first-child');
 
	   if(ILUMINIM_UTILS.screen.isMobile()){
 
		  target = $('.descricao-conteudo-accordion.cuidado-maximo-com-sua-encomenda');
 
	   }
 
	   target.after(`
 
		  <div id="aplicacao-dinamica-compre-junto">
			 <div class="target"></div>
		  </div>
 
		  <div id="aplicacao-dinamica-compre-junto-espelhado">
			 <div class="target"></div>
		  </div>
 
		  <div id="aplicacao-dinamica-confira-os-kits">
			 <div class="target"></div>
		  </div>
 
		  <div id="aplicacao-dinamica-produtos-para-voce">
			 <div class="target"></div>
		  </div>
 
		  ${ ILUMINIM_UTILS.screen.isMobile() ? `
		  
			 <div id="aplicacao-dinamica-ofertas-especiais">
				<div class="target"></div>
			 </div>
 
		  ` : `` }
		  
	   `);
 
	   if(ILUMINIM_UTILS.screen.isDesktop()){
 
		  $('.descricao-conteudo-accordion.duvidas-rapidas').after(`
			 <div id="aplicacao-dinamica-ofertas-especiais">
				<div class="target"></div>
			 </div>
		  `);
 
	   }
 
	},*/
 
	blocosDinamicosEmAbas(){
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()){
		  return;
	   }
 
	   let target = $('.produto>.row-fluid:first-child');
 
	   target.after(`
		  <div class="blocos-dinamicos-em-abas">
 
			 <div class="blocos-dinamicos-abas">
				
			 </div>
 
			 <div class="blocos-dinamicos-abas-conteudo">
			 
				<div class="bloco-dinamico-aba-conteudo" data-bloco-nome="confira-os-kits">
				   <div id="aplicacao-dinamica-confira-os-kits">
					  <div class="target"></div>
				   </div>
				</div>
 
				<div class="bloco-dinamico-aba-conteudo" data-bloco-nome="compre-junto">
				   <div id="aplicacao-dinamica-compre-junto">
					  <div class="target"></div>
				   </div>
				</div>
 
				<div class="bloco-dinamico-aba-conteudo" data-bloco-nome="produtos-similares">
				   <div id="aplicacao-dinamica-produtos-similares">
					  <div class="target"></div>
				   </div>
				</div>
 
			 </div>
		  </div>
	   `);
 
	   
	   let verificarSeExisteCompreJunto = setInterval(() => {
 
		  if($('div#smartfront__app.smartfrontapps-compre-junto').length > 0){
 
			 $('.blocos-dinamicos-em-abas').addClass('bloco-ativo');
 
			 $('.blocos-dinamicos-abas').append(`
				<div class="bloco-dinamico-aba" data-bloco-nome="compre-junto"><span>Compre Junto Com Desconto</span></div>
			 `);
 
			 $('.blocos-dinamicos-abas .bloco-dinamico-aba[data-bloco-nome="compre-junto"]').click();
 
			 clearInterval(verificarSeExisteCompreJunto);
	   
		  }
			 
	   }, 500);
	   
	   setTimeout(() => {
		  clearInterval(verificarSeExisteCompreJunto);
	   }, 10000);
 
	   
	   let verificarSeExisteKitsProdutos = setInterval(() => {
	   
		  if($('div#smartfront__app.smartfront__smartfrontapps-kits-produtos-iluminim .content--product-application').length >= 4){
				   
			 $('.blocos-dinamicos-em-abas').addClass('bloco-ativo');
 
			 $('.blocos-dinamicos-abas').prepend(`
				<div class="bloco-dinamico-aba" data-bloco-nome="confira-os-kits"><span>Confira os Kits!</span></div>
			 `);
 
			 /*if($('div#smartfront__app.smartfrontapps-compre-junto').length == 0){*/
			 
				$('.blocos-dinamicos-abas .bloco-dinamico-aba[data-bloco-nome="confira-os-kits"]').click();
 
			 /*}*/
 
			 clearInterval(verificarSeExisteKitsProdutos);
	   
		  }
		  
	   }, 500);
	   
	   setTimeout(() => {
			 clearInterval(verificarSeExisteKitsProdutos);
	   }, 10000);
 
 
 
 
 
	   let verificarSeExisteProdutosSimilares = setInterval(() => {
 
 
		  if($('div#smartfront__app.smartfrontapps-compre-junto').length > 0 && $('div#smartfront__app.smartfront__smartfrontapps-kits-produtos-iluminim .content--product-application').length < 4){
 
			 $('.blocos-dinamicos-em-abas').addClass('bloco-ativo');
 
			 $('.blocos-dinamicos-abas').append(`
				<div class="bloco-dinamico-aba" data-bloco-nome="produtos-similares"><span>Produtos Similares</span></div>
			 `);
 
			 //$('.blocos-dinamicos-abas .bloco-dinamico-aba[data-bloco-nome="produtos-similares"]').click();
 
			 clearInterval(verificarSeExisteProdutosSimilares);
 
		  }
		  
	   }, 500);
	   
	   setTimeout(() => {
			 clearInterval(verificarSeExisteProdutosSimilares);
	   }, 10000);
 
 
 
 
	   $(document).on('click', '.blocos-dinamicos-em-abas .blocos-dinamicos-abas .bloco-dinamico-aba', function(){
 
		  let referencia = $(this).attr('data-bloco-nome');
	  
		  $(this).parents('.blocos-dinamicos-abas').find('.bloco-dinamico-aba').removeClass('aba-ativa');
	  
		  $(this).addClass('aba-ativa');
	  
		  $(this).parents('.blocos-dinamicos-abas').siblings('.blocos-dinamicos-abas-conteudo').find('.bloco-dinamico-aba-conteudo').removeClass('aba-conteudo-ativa');
	  
		  $(this).parents('.blocos-dinamicos-abas').siblings('.blocos-dinamicos-abas-conteudo').find(`.bloco-dinamico-aba-conteudo[data-bloco-nome="${referencia}"]`).addClass('aba-conteudo-ativa');
	  
	  });
 
	},
 
	criarLocaisDeAplicacoesDinamicas(){
 
	   let target = $('.produto>.row-fluid:first-child');
 
	   if(ILUMINIM_UTILS.screen.isMobile()){
 
		  target = $('div#comentarios');
 
	   }
 
	   target.after(`
 
		  ${ ILUMINIM_UTILS.screen.isMobile() ? `
		  
			 <div id="aplicacao-dinamica-compre-junto">
				<div class="target"></div>
			 </div>
 
		  ` : `` }
 
		  <div id="aplicacao-dinamica-compre-junto-espelhado">
			 <div class="target"></div>
		  </div>
 
		  ${ ILUMINIM_UTILS.screen.isMobile() ? `
		  
			 <div id="aplicacao-dinamica-confira-os-kits">
				<div class="target"></div>
			 </div>
 
		  ` : `` }
 
		  <div id="aplicacao-dinamica-produtos-para-voce">
			 <div class="target"></div>
		  </div>
 
	   `);
 
	   $('div#comentarios').after(`
			 <div id="aplicacao-dinamica-ofertas-especiais">
				 <div class="target"></div>
			 </div>
		 `);
 
	},
 
	acoesFlutuante(){
 
	   const AcoesFlutuante = {
 
		  renderizarAtalhosFlutuante(){
 
			 if(!ILUMINIM_UTILS.screen.isDesktop()){
				return;
			 }
 
			 $(window).on('load', function(){ 
				
				//ADICIONADA FUNÇÃO WINDOW LOAD PQ O CONDICIONAL DO OUÇA DICA SÓ PODE SER FEITO APÓS ESTÁ VISIVEL.
 
				$('body').append(`
				   <div class="atalhos-flutuante">
					  <div class="atalhos-flutuante-conteudo conteiner">
						 <ul>
							${ ILUMINIM_UTILS.produto.possuiDescricao() ? `
							   <li>
								  <a href="javascript:void(0);" onclick="ILUMINIM_UTILS.scrollTo('.abas-custom #descricao', '-180');">Descrição completa</a>
							   </li>
 
							   <li>
								  <a href="javascript:void(0);"  onclick="ILUMINIM_UTILS.scrollTo('.descricao-titulo.descricao-titulo-caracteristicas-tecnicas', '-180');">Informações técnicas</a>
							   </li>
 
							   <li>
								  <a href="javascript:void(0);" onclick="ILUMINIM_UTILS.scrollTo('div#comentarios', '-180');">Avaliação dos clientes</a>
							   </li>
							` : ``}
 
							<li>
							   <a href="#!" data-target="#ModalInfoPagamento_0" data-toggle="modal">Formas de pagamento</a>
							</li>
 
							${ $('body.produto-com-video').length > 0 ? `
							   <li>
								  <a href="javascript:void(0);" data-target="#modal_play_iluminim_video" data-toggle="modal">Vídeo do Produto</a>
							   </li>
							` : ``}
 
							${ $('body.produto-com-dica').length > 0 ? `
							   <li>
								  <a href="javascript:void(0);" onclick="$('.produto .produto-compartilhar .midia-produto').click()">Ouça a dica</a>
							   </li>
							` : ``}
 
							<li>
							   <a href="javascript:void(0);" onclick="ILUMINIM_UTILS.scrollTo('div#comentarios', '-180');">Dúvidas</a>
							</li>
						 </ul>
					  </div>
				   </div>
				`);
 
			 });
 
		  },
 
		  mostrarAtalhosFlutuante(){
			 
			 $(document).on('click', '.acoes-flutuante .acoes-botao', function(){
 
				$(this).toggleClass('active')
				$('body').toggleClass('atalhos-flutuante-ativo');
 
			 });
 
		  },
 
		  iniciar(){
 
			 this.renderizarAtalhosFlutuante();
			 this.mostrarAtalhosFlutuante();
 
		  }
 
	   }
 
	   AcoesFlutuante.iniciar();
	   
	},
 
	botaoComprarFlutuanteMobile(){
 
	   if(!ILUMINIM_UTILS.screen.isMobile()){
		  return;
	   }
 
	   if( $('.produto .principal .atributos').length > 0 ){
		  return;
	   }
	  
	   $('body').append(`
		  <div class="comprar-flutuante">
			 <div class="comprar-flutuante-conteudo">
 
				<div class="comprar-flutuante-precos"></div>
 
				<div class="comprar-flutuante-botao"></div>
			 
			 </div>
		  </div>
	   `);
 
	   $('.produto .principal .preco-produto').clone().appendTo('.comprar-flutuante-precos');
	   $('.produto .principal .acoes-produto .comprar > a').clone().appendTo('.comprar-flutuante-botao');
	   $('.comprar-flutuante-botao a').attr('onclick', `ga('send', 'event', 'Botão Comprar Flutuante Mobile','click', 'Produto -> ${ILUMINIM_UTILS.produto.sku()}')`);
 
	},
 
	adaptacoesProdutoFlutuante(){
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()){
		  return;
	   }
 
	   const AdaptacoesProdutoFlutuante = {
 
		  removerBotaoFechar(){
			 
			 $('.produto .acoes-flutuante a.close_float').attr('style', 'display: none !important;');
 
		  },
 
		  acoplarElementos(){
 
			 $('body').addClass('adaptacao-produto-flutuante');
 
			 $('.produto .acoes-flutuante .image, .produto .acoes-flutuante .nome-produto').wrapAll(`
				<div class="conteudo-flutuante-1"></div>
			 `);
 
			 $('.produto .acoes-flutuante .acoes-produto').wrapAll(`
				<div class="conteudo-flutuante-2"></div>
			 `);
 
			 $('.produto .acoes-flutuante .conteudo-flutuante-2').append(`
				<div class="botao-voltar-ao-topo">
				   <a href="javascript:void(0);" onclick="ILUMINIM_UTILS.scrollTo(0);">Voltar ao topo</a>
				</div>
			 `);
	   
			 $('.acoes-flutuante .conteudo-flutuante-1, .acoes-flutuante .conteudo-flutuante-2').wrapAll(`
				<div class="acoes-flutuante-conteudo conteiner"></div>
			 `);
 
		  },
 
		  renderizarBotaoMostrarAtalhos(){
 
			 $('.produto .acoes-flutuante .conteudo-flutuante-1').prepend(`
				<div class="acoes-botao">
				   <div class="acoes-botao-icone icone-informacao">
					  ${ILUMINIM_UTILS.icones.info}
				   </div>
				   <div class="acoes-botao-textos">Tudo o que você precisa saber</div>
				   <div class="acoes-botao-icone icone-setinha">
					  <i class="icon-angle-down"></i>
				   </div>
				</div>
			 `);
 
		  },
 
		  iniciar(){
 
			 this.removerBotaoFechar();
			 this.acoplarElementos();
			 this.renderizarBotaoMostrarAtalhos();
			 
		  }
 
	   }
 
	   AdaptacoesProdutoFlutuante.iniciar();
 
	},
 
	reativarProdutoFlutuante(){
		 $('.acoes-flutuante .conteudo-flutuante-1').unwrap();
		 $('.acoes-flutuante .conteudo-flutuante-1 > *:first-child').unwrap();
		 $('.acoes-flutuante .conteudo-flutuante-2 > *:first-child').unwrap();
		 $('.acoes-flutuante .botao-voltar-ao-topo').remove();
		 $('.acoes-flutuante .acoes-botao').remove();
		 $('.produto .acoes-flutuante a.close_float').removeAttr('style');
		 $('body').removeClass('adaptacao-produto-flutuante');
	},
 
	alertaFreteGratis(){
 
	   if(ILUMINIM_UTILS.screen.isMobile()){
		  return;
	   }
 
	   const AlertaFreteGratis = {
 
		  config: {
				frete_gratis: 299.00
		  },
 
		  aoFechar(){
 
				$('.alerta-frete-gratis-iluminim-custom .conteudo--close-popup').on('click', function(){
 
				   $(this).parents('.alerta-frete-gratis-iluminim-custom.informacao-compras').removeClass('open-popup');
 
				   ILUMINIM_UTILS.setarCookie('alertafretegratis', true, 4);
 
				});
				
		  },
 
		  renderizar(){
				
				let valorCarrinhoAtual = $('#cabecalho .carrinho-interno-ajax .carrinho-rodape strong.titulo.cor-principal').text().replace('R$ ', '').replace('.', '').replace(',', '.');
				
				let faltaApenas = AlertaFreteGratis.config.frete_gratis - valorCarrinhoAtual
 
				$('body').prepend(`
				   <div class="alerta-frete-gratis-iluminim-custom informacao-compras">
					  <div class="informacao-compras--conteudo">
							<div class="conteudo--close-popup">×</div>
							<div class="conteudo--bloco-1">
							   <div class="bloco-1--icone">${ILUMINIM_UTILS.icones.caminhao_2}</div>
							   <div class="bloco-1--textos">
								  <div class="textos--texto-1">QUER GANHAR FRETE GRÁTIS?</div>
								  <div class="textos--texto-2">
										Complete R$ ${parseFloat(this.config.frete_gratis).toLocaleString('pt-br', {minimumFractionDigits: 2})} em compras e ganhe Frete Grátis!
								  </div>
							   </div>
							</div>
							<div class="conteudo--bloco-2">
							   <div class="bloco-2--textos">
								  <div class="textos--texto-1">
								  
										${faltaApenas <= 0 ? `
										   <span class="ganhou-frete-gratis">Parabéns você ganhou frete grátis :)<a href="/carrinho/index">Ir ao carrinho de compras</a></span>
										` : `
										   Faltam apenas <b>R$ ${faltaApenas.toFixed(2).replace('.', ',')}</b>continue comprando!
										`}
										
								  </div>
							   </div>
							</div>
					  </div>
				   </div>
				`);
 
				AlertaFreteGratis.aoFechar();
 
		  },
 
		  abrir(){
				$(window).on('load', ()=>{
				   
				   setTimeout(()=>{
					  
					  if(document.cookie.indexOf('alertafretegratis') == -1){
							
							this.renderizar();
 
							setTimeout(()=> {
							   $('.informacao-compras').addClass('open-popup');
							}, 1000);
 
					  }
					  
				   },60000);
				   
				});
		  },
 
	   }
 
	   AlertaFreteGratis.abrir();
 
	},
 
	tagFreteGratis(){
	   
	   var preco = ILUMINIM_UTILS.produto.precoPromocional();
	   var precoFormatado = parseFloat(ILUMINIM_UTILS.formatarPrecoParaPadraoJS(preco))
 
	   if(!isNaN(precoFormatado)){
		  if(precoFormatado >= 299){
			 if($('.tag-frete-gratis').length === 0){
				   $('.pagina-produto .principal .nome-produto').after('<span class="label label-success tag-produto tag-frete-gratis">Frete Grátis</span>');
				}
		  }
	   }
 
	},
 
	adaptarInformacoesFormasDeEnvio(){
 
	   $('form#formCalcularCep').on('submit', function(){
	 
		  ILUMINIM_UTILS.adaptarFormasDeEnvioCarrinhoCheckout();
		  ILUMINIM_UTILS.alteraNomeFormasDeEnvio();
		  
	   });
 
	},
 
	alertaPessoasInteressadas(){
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()){
		  return;
	   }
 
	   const PessoasInteressadasAgora = {
		  geraNumeroRandomico(){
			 let random = function (start,end){
				return Math.floor(Math.random()*(end-start+1)+start);
			}
			return random(195,485);
		  },
 
		  renderizar(){
			 $('<div class="pessoas-visualizando"><b>Gostou?</b> Outras '+ this.geraNumeroRandomico() + ' pessoas estão interessadas neste produto agora! <b>Compre já!</b><span class="btn-fechar">X</span></div>').prependTo('body');
		  },
 
		  botaoFechar(){
			 $(document).on('click', '.btn-fechar', function(){
				$('.pessoas-visualizando').removeClass('box-ativo');
			 });
		  },
 
		  iniciar(){
			 setTimeout(function(){
				$('.pessoas-visualizando').addClass('box-ativo');
				
				setTimeout(function(){
				   $('.pessoas-visualizando').removeClass('box-ativo');
				}, 8000);		
				
			 }, 5000);
		  }
	   }
	   
	   PessoasInteressadasAgora.renderizar();
	   PessoasInteressadasAgora.botaoFechar();
	   PessoasInteressadasAgora.iniciar();
	},
 
	modalContinuarComprando(){
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()){
		  return;
	   }
 
	   const ContinuarComprandoIluminim = {
	 
		  produtos: ['1010', 'ABRACA-T8', 'ABRACA-2-5-NT-3', 'ABRACA-2-5-NT-4', 'ABRACA-3-5-NT-2', 'ABRACA-3-5-NT', 'ABRACA-4-5-NT', 'ABRACA-7-NT', 'ABRACA-2-5-100BR-KIT100', 'ABRACA-T8BR-2', 'ABRACA-2-5-100PT-KIT100', 'ABRACA-T8PT-2', 'ABRACA-2-5-PT', 'ABRACA-2-5-200-PT', 'ABRACA-3-5-PT', 'ABRACA-4-5-PT', '1226', '1227', 'SOQ-E27-PR', '1112', 'BSE27L', '1012', '1311', '1013', '1015', 'BSE40L', '1018', 'SOQ-PLUG-E27', 'BS-2S-E27', 'AMP-RGB', 'AMPLIFICADOR-BRANCO', 'AMP-LED-FE', 'CFP-3528', 'CFP-5050', 'CC-P4-1F-2M-BRANCO', 'CC-P4-1F-2M', 'CC-P4-1F-3M-BRANCO', 'CC-P4-1F-3M', 'CC-P4-1F-4M', 'CC-P4-1F-4M-BRANCO', 'F-C-8', 'F-C-10', 'F-S-W', 'F-S', 'CONECTOR-RGB-4VIAS-KIT5', 'CONECTOR-RGB-5VIAS-KIT5', 'CE-RGB-4P-1T2', 'CE-RGB-4P-1T2-PRETA', 'CE-RGB-4P-1T3', 'CE-RGB-4P-1T3-PRETA', 'CE-RGB-4P-1T4', 'CE-RGB-4P-1T4-PRETA', 'CE-RGB-4P-30CM', 'RGB-1000MM-W', 'RGBW-1000MM-W', 'RGB-2000MM-W', 'RGB-5000MM-W', 'RGB-1000MM-B', 'RGB-2000MM-B', 'RGB-300MM-B', 'RGB-5000MM-B', 'CE-RGB-4P-1T6', 'CE-RGB-4P-1T6-PRETA', 'CB-FL-1-5-BR-100M', 'CB-FL-1-5-PT-100M', 'CB-FL-1-5-VD-100M', 'CB-FL-1-5-VM-100M', 'CB-FL-2-5-BR-100M', 'CB-FL-2-5-PT-100M', 'CB-FL-2-5-VD-100M', 'CB-FL-2-5-VM-100M', 'CB-FL-4-BR-100M', 'CB-FL-4-PT-100M', 'CB-FL-4-VD-100M', 'CB-FL-4-VM-100M', 'CAIXA-CFTV', 'CP-SF', 'CARTAO-100', 'CP-10WBF', 'CP-10WBQ', 'CP-50WBF', 'CP-50WBQ', 'C4-PF-5050RGB-10MM', 'C4-PM-5050RGB-10MM', 'CC-2P-3528-8MM', 'CC-4P-5050RGB-10MM', 'CFIO-2V', 'CFIO-3V', 'EL-19-W', 'EL-17-B', 'EI-20-W', 'EI-20-B', 'EX-18-W', 'EX-16-B', 'T-PCB2-RGB', 'L-PCB2-8', 'T-PCB2-8', 'B5P-12', 'CFL-2V-3528-P4-F', 'CAC-2V-1T-3528', 'CAC-2V-2T-3528', 'CFL-3528-10MM', 'CFL-2V-2T-5050', 'CFL-2V-5050-P4-F', 'CONECT-MACHO-3528RGB', 'CFL-4V-1T-5050RGB', 'CFL-4V-2T-5050RGB', 'CFL-2V-1T-5050', 'CFL-5050-10MM', 'PCB-2V-10MM-CRUZ', 'PCB-4V-10MM-CRUZ-RGB', 'PCB-2V-8MM-CRUZ', 'L-PCB-10', 'L-PCB-RGB', 'L-PCB-8', 'T-PCB-10', 'T-PCB-RGB', 'T-PCB-8', 'BNC-CAMERA', 'T-3AM', 'T-2AZ', 'T-1VM', 'M-1T1', 'M-1T2', 'M-2T2', 'M-2T4', 'CT-3528BF-8MM', 'CT-5050RGB-10MM', '1902', '1811', '1803', '1905', '1806', '1909', '1901', '1824', '1900', '1807', '1906', '1810', '1904', '1802', '1907', '1823', '1805', '1903', '1819', '1818', '1820', '1817', '1406-ES', '1409-ESN', '1499-ESN', '1407-ES', '1408-ES', '1800', '1808', '1821', '1908', '1410-EN', '1429-EN', '1427-EN', '1497-EN', 'CONTROL-RGB', 'CONTROL-MUSIC-RGB', 'CONT-RGB', 'CONT-PWM', 'CONTROL-WIRELESS-RGB', 'CX-5050-3528-RGB', 'CONTROL-FITA-BRANCO', '070006', '070007', '070008', '070009', 'T1-30A', 'T1', 'CONTROL-DIMMER-WIRELESS', 'HD-500GB', 'DPS-E15', 'DPS-E20', 'DPS-E40', 'DP-12W', 'DP-18W', 'DP-25W', 'DP-3W', 'DP-6W', 'DR-10W', 'DR-20W', 'DR-30W', 'CFC-2V-3528-8MM', 'EL-3528', 'EL-3528RGB', 'CFC-2V-5050-10MM', 'EL-5050', 'CFC-4V-5050RGB-10MM', 'EL-5050RGB', 'ER-3528', 'ER-3528RGB', 'ER-5050', 'ES-JES', 'EXT-3T-3M-BR', 'EXT-3T-3M-PT', 'EXT-3T-5M-BR', 'EXT-3T-5M-PT', 'CR-Q27W', 'CR-R18W', 'FILTRO-10T-CB', 'FILTRO-3T-CB', 'FILTRO-3T', 'FILTRO-3T-USB', 'FILTRO-4T', 'FILTRO-4T-CB', 'QCFL4-PP-USB', 'FILTRO-5T', 'FILTRO-5T-CB', 'FILTRO-5T-CB-USB', 'FILTRO-6T', 'FILTRO-6T-CB', 'FILTRO-8T-CB', 'FITA-AUT-10M', 'FITA-AUT-5M', '1000-EN', '2000-EN', '500-EN', 'VEDA-ROSCA-10M', 'VEDA-ROSCA-50M', 'FXS-3528', 'FXS-5050', 'F-12V-10A', 'F-12V-2A', 'F-12V-3A', 'F-12V-5A', 'F-12V-6A', '12V-10A', '12V-15A', '12V-20A', '12V-30A', '12V-3A', '12V-50A', '12V-5A', '24V-10A', '24V-15A', '24V-20A', '24V-30A', '24V-3A', '24V-5A', '1438-EP', '1438-ES', '1801', 'INTER-BO-BR', 'INTER-BO-CZ', 'INTER-BO-MR', 'INTER-BO-PR', 'ABRACA-T8-KIT100', '1021-KIT100', 'ABRACA-T8-KIT10', 'CP-10WBF-KIT10', '1408-ES-KIT10', '1000-EN-KIT10', '1021-KIT10', '1499-ESN-KIT12', '5050-SMD-3LBF-KIT20', '5050-SMD-3LBQ-KIT20', '1499-ESN-KIT2', '1408-ES-KIT2', '1499-ESN-KIT4', 'ABRACA-T8-KIT50', '1021-KIT50', '1021-KIT5', 'CONTROLADOR-CONECTOR-BRANCO', '5050-SMD-BF', '5050-SMD-BQ', '5730-SMD-BQ', 'PF-AR2-2M', 'PF-AS1-2M', 'PF-AC2-2M', '1311-E5', '1955', '1311-E1', '1957', '1853', '1850', '1854', '1856', 'SOQ-PE27-BR', 'SOQ-PE27-PT', 'C-BNC-P4-F', 'DPJ-A15-MACHO', 'C-RCA-P4-M', 'CONECT-P4-F', 'CONECT-P4', 'RXK7', 'QR50', 'QR53', 'QR54', 'QR51', 'QR52M', '5473', 'QA19M', 'QA26M', 'QA21M', 'QA23M', 'QA18M', 'QA25M', 'QA27M', '5474', '5472', 'SL-E27', 'SMART-PLUG-WIFI-16A', '1021', 'SOQ-VINTAGE-BR', 'SOQ-VINTAGE-PRATA', 'SOQ-VINTAGE-OU', 'SOQ-VINTAGE-PR', 'SOQ-E27-RABICHO', 'SOQ-G13', 'SOQ-E27-TOMADA', '1445', '2449', '1020', 'SOQ-BAY15D', '1223', '1322', '1225', '1228', 'SOQ-T8', 'SOQ-T10', 'SOQ-T5', 'SOQ-E27-TRIPLO-2', 'SOQ-E27-TRIPLO', 'SOQ-E27-QUADRUPLO', '1010', '013BR', '013PR', '1355-E', 'TRILHO-TAMPA-BR', 'TRILHO-TAMPA-PR', '1813', '4048', '4049', 'STRING-LIGHT', '101HD', '202HD', 'XL-3528AZ-KIT100-110V', 'XL-3528AZ-KIT100-220V', 'XL-3528AZ-KIT10', 'XL-3528AZ-KIT15', 'XL-3528AZ-KIT1', 'XL-3528AZ-KIT20', 'XL-3528AZ-KIT25', 'XL-3528AZ-KIT2', 'XL-3528AZ-KIT30', 'XL-3528AZ-KIT3', 'XL-3528AZ', 'XL-3528AZ-KIT5', 'XL-5050AZ-KIT100-110V', 'XL-5050AZ-KIT100-220V', 'XL-5050AZ-KIT10', 'XL-5050AZ-KIT15', 'XL-5050AZ-KIT1', 'XL-5050AZ-KIT20', 'XL-5050AZ-KIT25', 'XL-5050AZ-KIT2', 'XL-5050AZ-KIT30', 'XL-5050AZ-KIT3', 'XL-5050AZ', 'XL-5050AZ-KIT5', 'XL-3528BF-KIT100-110V', 'XL-3528BF-KIT100-220V', 'XL-3528BF-KIT10', 'XL-3528BF-KIT15', 'XL-3528BF-KIT1', 'XL-3528BF-KIT20', 'XL-3528BF-KIT25', 'XL-3528BF-KIT2', 'XL-3528BF-KIT30', 'XL-3528BF-KIT3', 'XL-3528BF', 'XL-3528BF-KIT5', 'XL-5050BF-KIT100-110V', 'XL-5050BF-KIT100-220V', 'XL-5050BF-KIT10', 'XL-5050BF-KIT15', 'XL-5050BF-KIT1', 'XL-5050BF-KIT20', 'XL-5050BF-KIT25', 'XL-5050BF-KIT2', 'XL-5050BF-KIT30', 'XL-5050BF-KIT3', 'XL-5050BF', 'XL-5050BF-KIT5', 'XL-3528BM-KIT10', 'XL-3528BM-KIT15', 'XL-3528BM-KIT1', 'XL-3528BM-KIT20', 'XL-3528BM-KIT25', 'XL-3528BM-KIT2', 'XL-3528BM-KIT30', 'XL-3528BM-KIT3', 'XL-3528BM', 'XL-3528BM-KIT5', 'XL-5050BM-KIT10', 'XL-5050BM-KIT15', 'XL-5050BM-KIT1', 'XL-5050BM-KIT20', 'XL-5050BM-KIT25', 'XL-5050BM-KIT2', 'XL-5050BM-KIT30', 'XL-5050BM-KIT3', 'XL-5050BM', 'XL-5050BM-KIT5', 'XL-3528BQ-KIT100-110V', 'XL-3528BQ-KIT100-220V', 'XL-3528BQ-KIT10', 'XL-3528BQ-KIT15', 'XL-3528BQ-KIT1', 'XL-3528BQ-KIT20', 'XL-3528BQ-KIT25', 'XL-3528BQ-KIT2', 'XL-3528BQ-KIT30', 'XL-3528BQ-KIT3', 'XL-3528BQ', 'XL-3528BQ-KIT5', 'XL-5050BQ-KIT100-110V', 'XL-5050BQ-KIT100-220V', 'XL-5050BQ-KIT10', 'XL-5050BQ-KIT15', 'XL-5050BQ-KIT1', 'XL-5050BQ-KIT20', 'XL-5050BQ-KIT25', 'XL-5050BQ-KIT2', 'XL-5050BQ-KIT30', 'XL-5050BQ-KIT3', 'XL-5050BQ', 'XL-5050BQ-KIT5', 'XL-6803-RGB-KIT5', 'XL-5050UV', 'XL-3528RGB-KIT100-110V', 'XL-3528RGB-KIT100-220V', 'XL-3528RGB-KIT10', 'XL-3528RGB-KIT15', 'XL-3528RGB-KIT1', 'XL-3528RGB-KIT20', 'XL-3528RGB-KIT25', 'XL-3528RGB-KIT2', 'XL-3528RGB-KIT30', 'XL-3528RGB-KIT3', 'XL-3528RGB', 'XL-3528RGB-KIT5', 'XL-5050RGB-KIT100-220V', 'XL-5050RGB-KIT10', 'XL-5050RGB-KIT15', 'XL-5050RGB-KIT1', 'XL-5050RGB-KIT20', 'XL-5050RGB-KIT25', 'XL-5050RGB-KIT2', 'XL-5050RGB-KIT30', 'XL-5050RGB-KIT3', 'XL-5050RGB', 'XL-5050RGB-KIT5', 'XL-3528RO-KIT1', 'XL-3528RO-KIT2', 'XL-3528RO', 'XL-5050RO-KIT1', 'XL-5050RO-KIT2', 'XL-5050RO', 'XL-3528VE-KIT100-110V', 'XL-3528VE-KIT100-220V', 'XL-3528VE-KIT10', 'XL-3528VE-KIT15', 'XL-3528VE-KIT1', 'XL-3528VE-KIT20', 'XL-3528VE-KIT25', 'XL-3528VE-KIT2', 'XL-3528VE-KIT30', 'XL-3528VE-KIT3', 'XL-3528VE', 'XL-3528VE-KIT5', 'XL-5050VE-KIT100-110V', 'XL-5050VE-KIT100-220V', 'XL-5050VE-KIT10', 'XL-5050VE-KIT15', 'XL-5050VE-KIT1', 'XL-5050VE-KIT20', 'XL-5050VE-KIT25', 'XL-5050VE-KIT2', 'XL-5050VE-KIT30', 'XL-5050VE-KIT3', 'XL-5050VE', 'XL-5050VE-KIT5', 'XL-3528VM-KIT100-110V', 'XL-3528VM-KIT100-220V', 'XL-3528VM-KIT10', 'XL-3528VM-KIT15', 'XL-3528VM-KIT1', 'XL-3528VM-KIT20', 'XL-3528VM-KIT25', 'XL-3528VM-KIT2', 'XL-3528VM-KIT30', 'XL-3528VM-KIT3', 'XL-3528VM', 'XL-3528VM-KIT5', 'XL-5050VM-KIT100-110V', 'XL-5050VM-KIT100-220V', 'XL-5050VM-KIT10', 'XL-5050VM-KIT15', 'XL-5050VM-KIT1', 'XL-5050VM-KIT20', 'XL-5050VM-KIT25', 'XL-5050VM-KIT2', 'XL-5050VM-KIT30', 'XL-5050VM-KIT3', 'XL-5050VM', 'XL-5050VM-KIT5'],
		  
		  obterDadosProdutosAtual(){
				  
			  let sku = $('.pagina-produto .produto .codigo-produto span[itemprop="sku"]').text();
			  let url = $('.pagina-produto .principal .botao.principal.botao-comprar').attr('href');
			  let imagem = $('.produto img#imagemProduto').attr('src');
			  let nome = $('.pagina-produto .principal .nome-produto').text();
			  let preco = $('.acoes-produto.disponivel strong.preco-promocional.cor-principal.titulo').first().text().trim();
			  
			  return {
				  sku,
				  url,
				  imagem,
				  nome,
				  preco,
			  }
			  
		  },
		  
		  
		  renderizarDadosProdutoAcessado(){
			  
			  let dados = this.obterDadosProdutosAtual();
			  
			  $('#comprar-ajax-status .produto-summary').html(`
				  <div class="produto-summary-imagem"><img src="${dados.imagem}"></div>
				  <div class="produto-summary-info">
					  <div class="produto-summary-nome">${dados.nome}</div>
					  <div class="produto-summary-quantity">Quantidade: 1</div>
					  <div class="produto-summary-preco">${dados.preco}</div>
				  </div>
			  `);
			  
		  },
		  
		  ajustarBotaoComprar(){
			  
			  $('.acoes-produto.disponivel a.botao.botao-comprar.principal.grande').addClass('botao-comprar-ajax');
			  
		  },
		  
		  iniciar(){
			  
			  
			  if(this.produtos.includes(this.obterDadosProdutosAtual().sku)){
				  
				  console.log('Continuar comprando iluminim personalizado aplicado :)');
				  this.renderizarDadosProdutoAcessado();
				  this.ajustarBotaoComprar();
				  
			  }
			  
		  }
		  
	  }
	  
	  ContinuarComprandoIluminim.iniciar();
	},
 
	botaoNaoSeiMeuCEP(){
 
	   $('.produto .principal>.cep form#formCalcularCep .form-inline a').attr('href', 'https://buscacepinter.correios.com.br/app/endereco/index.php').attr('rel', 'noopener');
 
	}, 
 
	autoPreencherCEP(){
 
	   let cep = ILUMINIM_UTILS.pegarCookie('cep');
 
	   if(cep && cep !== 'empty'){
 
		  $('.produto .principal > .cep form#formCalcularCep .input-cep').val(cep);
 
		  $('.produto .principal > .cep form#formCalcularCep .btn').click();
 
	   }
 
	},
 
	seloRoHS(){
 
	   if( 
		  (ILUMINIM_UTILS.produto.nome().includes('Spot LED') && !ILUMINIM_UTILS.produto.nome().includes('Recuado') && !ILUMINIM_UTILS.produto.nome().includes('Trilho')) ||
		  ILUMINIM_UTILS.produto.nome().includes('Tubular')  
	   ){
 
		  $('body').addClass('produto-tag-rohs');
 
	   }
 
	},
 
	produtoTagBaixou(){
 
	   const TagBaixou = {
 
		  produtos: [
			 'RSPM-200WBF-KIT10',
			 'PS-Q25WBF-KIT20',
			 'RSPM-300WBF-KIT10',
			 'PS-Q18WBF-KIT20',
			 'R-200WBF-KIT20',
			 'PG-Q25WBF',
			 'XL-5050RGB-KIT5',
			 'BULBO-9WBF-R',
			 'PG-Q18WBF',
			 'LUM-120BF-KIT20',
			 'RSPM-200WBF',
			 'RSPM-100WBF',
			 'PS-Q18WBF',
			 'SMD-Q7WBQ',
			 'PS-Q25WBF',
			 'LUM-120BF',
			 'BULBO-9WBF-PACK6',
			 'XL-3528BQ-KIT5',
			 'XL-5050BQ-KIT5',
			 'DPJ-A15-MACHO',
		  ],
 
		  gerarHTML(){
 
			 return `
				<div class="produto-preco-baixou">
				   <span class="preco-baixou-icone"><svg width="13" height="12" viewBox="0 0 12 12" fill="#fff"><path fill="inherit" d="M.813 5.647a.5.5 0 01.707 0L5.5 9.628V1.166a.5.5 0 111 0v8.461l3.98-3.98a.5.5 0 01.637-.057l.07.058a.5.5 0 010 .707l-4.833 4.832a.508.508 0 01-.019.018l-.027.022a.379.379 0 01-.044.031l-.03.017a.363.363 0 01-.08.034.398.398 0 01-.08.018.45.45 0 01-.063.006H5.99a.503.503 0 01-.061-.005l.072.005a.502.502 0 01-.151-.023l-.023-.008-.015-.006a.496.496 0 01-.048-.022l-.015-.01-.01-.004a.498.498 0 01-.051-.037l-.017-.015a.232.232 0 01-.025-.022L.813 6.354a.5.5 0 010-.707z"></path></svg></span>
				   <span>baixou</span>
				</div>
			 `;
			 
		  },
 
		  renderizar(){
 
			 //if(!this.produtos.includes(ILUMINIM_UTILS.produto.sku())) return;
 
			 $('body').addClass('produto-tag-baixou');
 
			 let html = this.gerarHTML();
 
			 if($('.principal .acoes-produto .preco-produto .preco-venda').length > 0){
 
				$('.principal .acoes-produto .preco-produto .preco-venda').after(html);
 
			 }
 
		  },
 
		  iniciar(){
			 
			 this.renderizar();
 
		  }
		  
	   }
 
	   TagBaixou.iniciar();
 
	},
 
	bannerProdutoBlack(){ //REMOVER APOS BLACK
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()){
		  return;
	   }
 
	   $('.produto .span6 > .principal').before(`
		  <div class="banner-produto-led-friday">
			 <img src="https://cdn.awsli.com.br/257/257163/arquivos/banner-produto-cronometro-27-12-21.png">
			 <ul class="countdown-target"></ul>
		  </div>
	   `);
 
	   $('.banner-produto-led-friday .countdown-target').yuukCountDown({
		  starttime: '2016/11/12 00:00:00',
		  endtime: '2030/12/30 00:00:00',
	   });
 
	},
 
	blocoProdutoInformacoes(){
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()){
		  return;
	   }
 
	   $('.produto .span6 > .principal').before(`
		  <div class="bloco-produto-informacoes">
 
			 <div class="bloco-cronometro">
 
				<div class="bloco-cronometro-texto">Termina em:</div>
 
				<div class="bloco-cronometro-icone">
				   ${ILUMINIM_UTILS.icones.relogio_2}
				</div>
 
				<div class="bloco-cronometro-numeros">
				   <ul class="countdown-target"></ul>
				</div>
 
			 </div>
 
			 <div class="bloco-texto">Garanta já esse produto led com o melhor preço do mercado!</div>
			 
		  </div>
	   `);
 
	   $('.bloco-produto-informacoes .countdown-target').yuukCountDown({
		  starttime: '2016/11/12 00:00:00',
		  endtime: '2030/12/30 00:00:00',
	   });
 
	},
 
	adaptacaoAcoesProduto(){
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()){
		  return;
	   }
 
	   $('.produto .produto-compartilhar').insertBefore('.produto .conteiner-imagem');
 
	   $('.produto .produto-compartilhar').prepend(`
		  <div class="tag-produto-certificado">
			 <div class="tag-produto-ceritificado-conteudo">
				   <div class="tag-produto-certificado-icone">
					  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" style="enable-background:new 0 0 512 512;width: 18px;height: 20px;" xml:space="preserve" class="" viewBox="17.11 0 180.05 214.27"><g><g xmlns="http://www.w3.org/2000/svg">	<path d="M196.926,55.171c-0.11-5.785-0.215-11.25-0.215-16.537c0-4.142-3.357-7.5-7.5-7.5c-32.075,0-56.496-9.218-76.852-29.01   c-2.912-2.832-7.546-2.831-10.457,0c-20.354,19.792-44.771,29.01-76.844,29.01c-4.142,0-7.5,3.358-7.5,7.5   c0,5.288-0.104,10.755-0.215,16.541c-1.028,53.836-2.436,127.567,87.331,158.682c0.796,0.276,1.626,0.414,2.456,0.414   c0.83,0,1.661-0.138,2.456-0.414C199.36,182.741,197.954,109.008,196.926,55.171z M107.131,198.812   c-76.987-27.967-75.823-89.232-74.79-143.351c0.062-3.248,0.122-6.396,0.164-9.482c30.04-1.268,54.062-10.371,74.626-28.285   c20.566,17.914,44.592,27.018,74.634,28.285c0.042,3.085,0.102,6.231,0.164,9.477C182.961,109.577,184.124,170.844,107.131,198.812   z" fill="#000000" data-original="#000000" style="" class=""></path>	<path d="M132.958,81.082l-36.199,36.197l-15.447-15.447c-2.929-2.928-7.678-2.928-10.606,0c-2.929,2.93-2.929,7.678,0,10.607   l20.75,20.75c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.303-2.196l41.501-41.5   c2.93-2.929,2.93-7.678,0.001-10.606C140.636,78.154,135.887,78.153,132.958,81.082z" fill="#000000" data-original="#000000" style="" class=""></path></g></g></svg>
				   </div>
				   <div class="tag-produto-certificado-texto">Produto Certificado</div>
			 </div>
		  </div>
	   `);
 
	   $('.produto .produto-compartilhar .midia-produto').insertBefore('.produto .produto-compartilhar .tag-produto-certificado');
 
	},
 
	loja360(){
 
	   if(!ILUMINIM_UTILS.screen.isDesktop() || $('.produto-compartilhar .midia-produto').length > 0) return;
 
	   $('.produto .desconto-produto').before(`
		  <div class="loja-360" data-toggle="modal" data-target="#modalLoja360">
			 <div class="loja-360-texto">Loja</div>
			 <div class="loja-360-icon"><img src="https://cdn.awsli.com.br/257/257163/arquivos/icon-360-21-02-2022-v2.png"></div>    
		  </div>
	   `);
 
	   $('body').append(`
		  <div class="modal modal-personalizado fade" id="modalLoja360">
			 <div class="modal-dialog" role="document">
 
				<div class="modal-content">
 
				   <div class="modal-header">
						 <h5 class="modal-title" id="exampleModalLongTitle">Loja 360</h5>
						 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						 <span aria-hidden="true">&times;</span>
						 </button>
				   </div>
 
				   <div class="modal-body">
						 
					  <iframe src="https://www.google.com/maps/embed?pb=!4v1645450999151!6m8!1m7!1sCAoSLEFGMVFpcFBNN082UjFMaW1GMjhfY0xqcDdmWTZmajVOalNNcVFJOUk3MF9V!2m2!1d-30.0553777!2d-51.1633364!3f349.13!4f-9.060000000000002!5f0.7820865974627469" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
 
				   </div>
 
				   <div class="modal-footer">
						 <button type="button" class="btn btn-secondary btn-custom" data-dismiss="modal">Fechar</button>
				   </div>
 
				</div>
 
			 </div>
		  </div>
	   `);
 
	},
 
	reposicionarAplicacoesOptimize(){
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()) return;
 
	   let verificarSeExisteAbas = setInterval(() => {
	   
		  if($('.blocos-dinamicos-em-abas .bloco-dinamico-aba').length > 0){
 
			 clearInterval(verificarSeExisteAbas);
 
			 setTimeout(() => {
			
				$('body').addClass('produto-com-aplicacoes-desvinculadas');
 
				$('.blocos-dinamicos-em-abas .bloco-dinamico-aba').each(function(){
 
				   let blocoNome = $(this).attr('data-bloco-nome');
 
				   $(`.blocos-dinamicos-em-abas .bloco-dinamico-aba-conteudo[data-bloco-nome="${blocoNome}"]`).children().insertBefore('.blocos-dinamicos-em-abas');
 
				});
 
				$('div#aplicacao-dinamica-confira-os-kits').insertBefore('div#aplicacao-dinamica-compre-junto');
 
				$('div#aplicacao-dinamica-produtos-similares .body-app--content.body-app--product-listing').trigger('refresh.owl.carousel');
				$('div#aplicacao-dinamica-confira-os-kits .body-app--content.body-app--product-listing').trigger('refresh.owl.carousel');
 
			 }, 500);
 
		  }
			 
	   }, 500);
	   
	   setTimeout(() => {
			 
		  clearInterval(verificarSeExisteAbas);
			 
	   }, 15000);
 
	},
 
	tarjaFreteGratisOptimize(){
 
	   if(!ILUMINIM_UTILS.screen.isDesktop()) return;
 
	   $('.descrica-tarja').replaceWith(`
		  <div class="descricao-tarja-custom">
			 <div class="descricao-tarja-cronometro">
				<span>Só hoje acaba em:</span>
				<ul class="countdown-target"></ul>
			 </div>
 
			 <div class="descricao-tarja-info">
				<div class="descricao-tarja-info-titulo">
					  <span>Frete expresso grátis</span> para todo brasil!
				</div>
				<div class="descricao-tarja-info-link">
					  <a href="/pagina/condicoes-de-frete-gratis.html">*Consulte o regulamento.</a>
				</div>
			 </div>
		  </div>
	   `);
 
	   $('.descricao-tarja-custom .countdown-target').yuukCountDown({
		  starttime: '2016/11/11 00:00:00',
		  endtime: '2030/12/30 00:00:00'
	   });
 
	},
 
	novoBotaoAddCarrinhoMobileOptimize(){
 
	   if(!ILUMINIM_UTILS.screen.isMobile()) return;
 
	   console.log('@Metodo novoBotaoAddCarrinhoMobileOptimize executado');
 
	   $('.produto-thumbs.thumbs-horizontal').after(`
		  <div class="botao-add-carrinho-custom" onlick="ga('send', 'event', 'Add Carrinho Foto Mobile','click', 'Produto -> ${ILUMINIM_UTILS.produto.sku()}')">
			 <i class="icon-shopping-cart"></i>
			 <span>ADICIONAR AO CARRINHO</span>
		  </div>
	   `);
 
	   $('.botao-add-carrinho-custom').click(function(){
 
		  let hrefToRedirect = $('.produto .span6 > .principal .acoes-produto.disponivel a.botao.botao-comprar').attr('href');
 
		  window.location.href = hrefToRedirect;
 
	   });
 
	},
 
	beneficiosCupons(){
 
		 const beneficiosCupons = {
 
			 configs: {
			 
				 cupons: [
					 {
						 texto: 'Ganhe R$ 20,00 de desconto na sua compra acima de R$ 199,90.',
						 cupom: 'OFERTA20',
					 },
					 {
						 texto: 'Ganhe R$ 30,00 de desconto na sua compra acima de R$ 499,90.',
						 cupom: 'LED30',
					 },
					 {
						 texto: 'Ganhe R$ 50,00 de desconto na sua compra acima de R$ 999,90.',
						 cupom: 'LED50OFF',
					 },
				 ],
 
				 produtos: ['PS-Q48WBF-60X60', 'PS-Q25WBF-KIT5', 'PG-Q18WBF-KIT5', 'RSPM-300WBF', '36506614']
 
			 },
 
			 gerarHTML(objeto){
				 let htmls = objeto.map(item => {
					 let { texto, cupom } = item;
 
					 return `
						 <div class="beneficios-cupons-item">
							 <div class="beneficios-cupons-item-titulo">
								 ${texto}
							 </div>
							 <div class="beneficios-cupons-item-conteudo">
								 <div class="beneficios-cupons-item-conteudo-cupom">
									 <span>CUPOM:</span>
									 <span class="beneficios-cupons-cupom-codigo">${cupom}</span>
								 </div>
								 <div class="beneficios-cupons-item-conteudo-btn-copiar" data-cupom="${cupom}">
									 COPIAR
									 <div class="beneficios-cupons-item-conteudo-btn-copiar-copiado">Copiado!</div>
								 </div>
							 </div>
						 </div>
					 `;
				 }).join('');
 
				 return `
					 <div class="beneficios-cupons">
						 <div class="beneficios-cupons-titulo">
							 <strong>Confira os seus Benefícios!</strong>
						 </div>
 
						 <div class="beneficios-cupons-conteudo">
							 ${htmls}
						 </div>
					 </div>
				 `;
			 },
 
			 onClickBtnCopiar(){
				 $(document).on('click', '.beneficios-cupons-item-conteudo-btn-copiar', function(){
					 let cupom = $(this).attr('data-cupom');
 
					 ILUMINIM_UTILS.copyToClipboard(cupom);
 
					 $(this).addClass('copiado');
		 
					 setTimeout(() => {
						 $(this).removeClass('copiado');
					 }, 3000);
 
				 });
			 },
 
			 renderizar(){
				 let cupons = this.configs.cupons;
				 let produtos = this.configs.produtos;
 
				 if(!produtos.includes(ILUMINIM_UTILS.produto.sku())) return;
 
				 let html = this.gerarHTML(cupons);
 
				 $('.produto .parcelas-produto').before(html);
 
				 this.onClickBtnCopiar();
 
			 },
 
		 }
 
		 beneficiosCupons.renderizar();
 
	},
 
	iniciar(){ //INICIAR SCRIPTS DA PÁGINA;
 
		  ILUMINIM_UTILS.adicionaTextoModalCompraSegura();
		  //ILUMINIM_UTILS.renderizarCategoriasFlutuante();
		  ILUMINIM_UTILS.alterarTituloSairDaPagina();
 
		  TodasAsPaginas.oucaDica();
		  
		  //this.bannerOfertaRelampago();
		  this.moverBreadcrumbs();
		  //this.adicionarIconeBoletoNoValorDoBoleto();
		  this.adicionarBandeirasPagamentoBlocoParcelas();
		  this.adicionarBandeiraBoletoBlocoParcelas();
		  this.blocoComprandoNaIluminim();
		  this.adicionarBlocoPrazosDeEntrega();
		  this.adicionarPorcentagemDesconto();
		  this.adicionarListaDesejos();
		  this.adicionarSelosSeguranca();
		  this.adicionarBlocoParcelas();
		  this.adicionarBlocoDescontoBoletoEconomize();
		  this.visitanteFazerLoginCadastrar();
		  this.cronometroCompreAntesQueAcabe();
		  this.adaptacaoVideoNativo();
		  this.linhaAvaliacao();
		  //this.adicionarProdutoCertificado();
		  //this.adicionarTextoGarantia();
		  //this.adicionarBlocoDuvidasTrustvox(); 
		  //this.seloRoHS();
		  this.produtoTagBaixou();
		  //this.blocoProdutoInformacoes();
		  //this.bannerProdutoBlack(); //REMOVER APOS BLACK
		  
		  this.ajustarDescricao();
 
		  //this.alertaFreteGratis();
		  this.tagFreteGratis();
 
		  this.fecharParcelasFormasPagamento();
		  
		  this.textosAbaixoBotaoComprar();
		  //this.textoUltimasUnidades();
		  //this.precoValidoUltimasUnidades();
	
 
		  this.adicionarTextOfertaRecomendadaModal();
		  this.adaptacaoPaginaProdutoMobile();
		  this.adaptarInformacoesFormasDeEnvio();
		  
		  //this.alertaPessoasInteressadas(); DESATIVADO DIA 10/05/2022
		  this.botaoNaoSeiMeuCEP();
		  this.autoPreencherCEP();
		  //this.modalContinuarComprando();
		  this.adaptacoesProdutoFlutuante();
		  this.botaoComprarFlutuanteMobile();
		  this.adaptacaoAcoesProduto();
		  this.loja360();
		  
		  this.criarLocaisDeAplicacoesDinamicas(); //MANTER NO FINAL
		  this.blocosDinamicosEmAbas(); //MANTER ORDEM
		  this.acoesFlutuante(); //MANTER NO FINAL
		  
 
	}
 
 }
 
 $(document).ready(() => {
 
	PaginaProduto.iniciar();
 
 });
 
 