var PaginaCarrinho = {
    
	alertaFreteGratisPorRegiao(){
 
	   $(window).on('load', () => {
 
		  var minValues = {
			 'Sul': 299.0,
			 'Sudeste': 299.0,
			 'Norte': 299.0,
			 'Nordeste': 399.0,
			 'Centro Oeste': 299.0
		  };
		  
		  var cepRanges = {
			 'AC': [
				   [69900000, 69999999]
			 ],
			 'AL': [
				   [57000000, 57999999]
			 ],
			 'AM': [
				   [69000000, 69299999],
				   [69400000, 69899999]
			 ],
			 'AP': [
				   [68900000, 68999999]
			 ],
			 'BA': [
				   [40000000, 48999999]
			 ],
			 'CE': [
				   [60000000, 63999999]
			 ],
			 'DF': [
				   [70000000, 72799999],
				   [73000000, 73699999]
			 ],
			 'ES': [
				   [29000000, 29999999]
			 ],
			 'GO': [
				   [72800000, 72999999],
				   [73700000, 76799999]
			 ],
			 'MA': [
				   [65000000, 65999999]
			 ],
			 'MG': [
				   [30000000, 39999999]
			 ],
			 'MS': [
				   [79000000, 79999999]
			 ],
			 'MT': [
				   [78000000, 78899999]
			 ],
			 'PA': [
				   [66000000, 68899999]
			 ],
			 'PB': [
				   [58000000, 58999999]
			 ],
			 'PE': [
				   [50000000, 56999999]
			 ],
			 'PI': [
				   [64000000, 64999999]
			 ],
			 'PR': [
				   [80000000, 87999999]
			 ],
			 'RJ': [
				   [20000000, 28999999]
			 ],
			 'RN': [
				   [59000000, 59999999]
			 ],
			 'RO': [
				   [76800000, 76999999]
			 ],
			 'RR': [
				   [69300000, 69399999]
			 ],
			 'RS': [
				   [90000000, 99999999]
			 ],
			 'SC': [
				   [88000000, 89999999]
			 ],
			 'SE': [
				   [49000000, 49999999]
			 ],
			 'SP': [
				   [01000000, 19999999]
			 ],
			 'TO': [
				   [77000000, 77999999]
			 ]
		  };
 
		  var regions = {
			 'Norte': ['AC', 'AM', 'AP', 'PA', 'RO', 'RR', 'TO'],
			 'Nordeste': ['AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE'],
			 'Centro Oeste': ['DF', 'GO', 'MS', 'MT'],
			 'Sudeste': ['ES', 'MG', 'RJ', 'SP'],
			 'Sul': ['RS', 'SC', 'PR']
		  };
 
		  function getMinValue(a) {
			 return minValues[a]
		  }
 
		  function getRegion(c) {
			 var d = null;
			 $.each(regions, function(a, b) {
				   for (var i = 0; i < b.length; i++) {
					  if (c == b[i]) {
						 d = a;
						 return false
					  }
				   }
			 });
			 return d
		  }
 
		  function getUF(e) {
			 var f = null;
			 $.each(cepRanges, function(a, b) {
				   for (var i = 0; i < b.length; i++) {
					  var c = b[i][0];
					  var d = b[i][1];
					  if (e >= c && e <= d) {
						 f = a;
						 return false
					  }
				   }
			 });
			 return f
		  }
 
		  function cleanCep(a) {
			 return a.replace('-', '')
		  }
 
		  function getTotal() {
			 var a = $('.subtotal .titulo').attr('data-subtotal-valor');
			 var b = $('.cupom-sucesso').length;
			 if (b == 0) {
				   return a
			 } else if (b > 0) {
				   var c = $('#cupom_desconto').html();
				   if (!c) {
					  return a
				   }
				   c = c.replace(/^\s+|\s+$/g, '');
				   var d = /%/i.test(c);
				   var e = /R/i.test(c);
				   var f = c.split(' ');
				   if (d) {
					  var g = a - (a * f[0] / 100)
				   } else if (e) {
					  var g = a - parseInt(f[1])
				   }
				   return g
			 }
		  }
 
		  function calculate() {
			 
			 var a = 'Quer Ganhar Frete Grátis? Informe o seu cep e saiba quanto falta para ganhar.';
			 var b = $('#calcularFrete').val() || 0;
			 var c = $('.cupom-sucesso').length;
			 var d = 'frete-gratis falta-cep';
			 var percent = 0;
			 if (b.length == 9) {
				   b = cleanCep(b);
				   var e = getUF(b);
				   var f = getRegion(e);
				   var g = getMinValue(f);
				   var percent = 100 - ((g - getTotal()) / g * 100);
					  
				   if (!g) {
					  a = 'Ops! Não há opção de frete grátis para sua região.'
					  percent = 0;
				   } else {
					  var h = getTotal();
					  if (h < g) {
						 var i = (g - h).toFixed(2).toString().replace('.', ',');
						 d = 'frete-gratis falta-pouco';
						 a = 'FALTAM R$ ' + i + ' em compras pra você GANHAR FRETE GRÁTIS!'
					  } else if (h >= g) {
						 percent = 100;
						 d = 'frete-gratis ganhou-frete';
						 a = 'Parabéns! Você Ganhou Frete Grátis!'
					  }
				   }
			 }
				   
			 var j = `<div class="frete-gratis-por-regiao section-progress-bar">
						 <div class="section-progress-bar--wrap progress-bar">
							   <span>${a}</span>
							   <div class="progress-bar--conteudo ${d}" style="width: ${percent}% !important;"></div>
						 </di>
					  </div>`;
				   
			 //var j = '<div class="alert ' + d + '" role="alert">' + a + '</div>';
			 
			 $('.section-progress-bar').fadeOut();
			 $('.section-progress-bar').remove();
			 $('.finalizar-compra > .caixa-sombreada').before(j);
			 $('.section-progress-bar').fadeIn();
		  }
 
		  if ($("#calcularFrete").is(":hidden")) {
				$("#calcularFrete").parent().closest("tr").removeClass("hidden-phone")
		  }
		  $("#calcularFrete").on('input', function(e) {
				calculate()
		  });
 
		  calculate();
 
	   });
 
	},
 
	mensagemCarrinhoVazio(){
 
	   $('.pagina-carrinho .caixa-destaque').addClass('carrinho-vazio').html(`
		  <div class="caixa-destaque">
				<h1>Você não tem nenhum item no carrinho.</h1>
				<span>Você tem uma conta? Faça login para ver seus itens.</span>
				<br><br>
				<a href="/" class="botao principal btn-voltar-compras btn-custom">Começar a fazer compras</a>
				<a href="/conta/login" class="botao principal login-carrinho btn-custom">Entrar</a>
		  </div>
	   `);
	   
	},
 
	produtoUpSell(){
 
	   const upSell = {
 
		  config: {
				produto: {
				   nome: 'Lâmpada LED Bulbo 9W Residencial Branco Frio Bivolt',
				   link: '/lampada-led-bulbo-9w-residencial-branco-frio-bivolt',
				   imagem: 'https://cdn.awsli.com.br/90x90/257/257163/produto/24762444/53a706d28d.jpg',
				   id: '24762444',
				   preco: '5,65',
				   sku: 'BULBO-9WBF'
				},
	   
				produtosAdicionadoAoCarrinho(){
	   
				   let skus = [];
	   
				   $('.pagina-carrinho:not(.checkout) .tabela-carrinho tr[data-produto-id]').each(function(){
	   
					  let sku = $(this).find('.produto-info ul > li:first-child strong').text().trim();
				   
					  skus.push(sku);
				   
				   });
	   
				   return skus;
				}
		  },
	   
		  gerarHTML(){
	   
				return `
				   <div class="iluminim-upsell-produto">
					  <div class="conteudo-upsell">
					  
							<div class="upsell-produto-imagem"><img src="${this.config.produto.imagem}"></div>
	   
							<div class="upsell-produto-informacoes">
							   <div class="upsell-produto-nome">Aproveite por mais R$ ${this.config.produto.preco} ${this.config.produto.nome}!</div>
	   
							   <div class="upsell-acoes">
								  <div class="upsell-acoes-titulo">Deseja adicionar em seu pedido?</div>
								  <div class="upsell-inputs-radios">
										<div>
										   <input type="radio" id="input-radio-sim" data-produto-id="${this.config.produto.id}" name="radio-group">
										   <label for="input-radio-sim">Sim</label>
										</div>
										<div>
										   <input type="radio" id="input-radio-nao" name="radio-group">
										   <label for="input-radio-nao">Não</label>
										</div>
								  </div>
							   </div>
							</div>
					  
					  </div>
				   </div>
				`;
	   
		  },
	   
		  aoMarcarInputRadioSim(){
	   
				$('#input-radio-sim').on('change', function(){
	   
				   let checked = $(this)[0].checked;
				   let id = $(this).attr('data-produto-id');
	   
				   if(checked){
	   
					  $.get(`/carrinho/produto/${id}/adicionar/1`, response=> {
	   
							$(this).parents('.upsell-acoes').html('<div class="upsell-acoes-titulo" style="margin-right:0!important;">Produto adicionado ao carrinnho :)</div>');
							window.location.reload()
	   
					  });
	   
				   }
	   
				});
				
		  },
	   
		  renderizar(){
			 if($('.pagina-carrinho:not(.checkout)').length > 0){
	
				if(!this.config.produtosAdicionadoAoCarrinho().includes(this.config.produto.sku)){
	
					  let html = this.gerarHTML();
	
					  $('.pagina-carrinho .finalizar-compra > .caixa-sombreada').after(html);
	
					  this.aoMarcarInputRadioSim();
	
				}
	
			 }
		  }
	   
	   }
	   
	   upSell.renderizar();
 
	},
 
	selosDeSegurancaCarrinho(){
 
	   //$('.finalizar-compra .acao-editar .selo-ssl').remove();
	   
	   /*$('.tabela-carrinho > tbody').append*/$('.finalizar-compra .acao-editar .selo-ssl').html(`
		  <div class="selos-de-seguranca-carrinho">
				<ul class="lista-selos-de-seguranca">
				   <li>${ILUMINIM_UTILS.icones.selo.site_sincero}</li>
				   <li>${ILUMINIM_UTILS.icones.selo.abcomm}</li>
				   <li>${ILUMINIM_UTILS.icones.selo.ebit_diamante}</li>
				   <!--<li>${ILUMINIM_UTILS.icones.selo.ebit}</li>-->
				   <li>${ILUMINIM_UTILS.icones.selo.mp}</li>
				   <li>${ILUMINIM_UTILS.icones.selo.site_blindado}</li>
				   <li>${ILUMINIM_UTILS.icones.selo.site_protegido}</li>
				</ul>
		  </div>
	   `);
 
	},
 
	ajusteCarrinhoMobile(){
 
	   if(!ILUMINIM_UTILS.screen.isMobile()){
		  return;
	   }
 
	   $('.tabela-carrinho .bg-dark').removeClass('hidden-phone');
 
	   $('.tabela-carrinho .subtotal').parents('tr.bg-dark').addClass('tr-subtotal');
 
	   $('.tabela-carrinho tr.bg-dark form.form-horizontal[action*="carrinho/cupom/validar"]').parents('tr.bg-dark').addClass('tr-cupom-desconto');
	   
	},
 
	carrinhoV2(){
 
	   $('.pagina-carrinho:not(.carrinho-checkout) .tabela-carrinho > tbody > tr[data-produto-id]').last().addClass('last-tr-product');
 
	   $('.pagina-carrinho .finalizar-compra > .caixa-sombreada').append(`
		  <div class="carrinho-customizado">
 
			 <div class="carrinho-customizado-conteudo-valor-subtotal"></div>
 
			 <div class="carrinho-customizado-conteudo-frete"></div>
 
			 <div class="carrinho-customizado-conteudo-envios"></div>
 
			 <div class="carrinho-customizado-conteudo-cupom-desconto"></div>
 
			 <div class="carrinho-customizado-conteudo-valor-total"></div>
 
			 <div class="carrinho-customizado-conteudo-botoes"></div>
 
		  </div>
	   `);
 
 
	   $('.tabela-carrinho .subtotal').appendTo('.carrinho-customizado .carrinho-customizado-conteudo-valor-subtotal');
 
	   $('.tabela-carrinho form#formCalcularFrete').appendTo('.carrinho-customizado .carrinho-customizado-conteudo-frete');
 
	   $('.tabela-carrinho .formas-envio').appendTo('.carrinho-customizado .carrinho-customizado-conteudo-envios');
 
	   $('.tabela-carrinho form.form-horizontal[action*="/carrinho/cupom/validar"], .tabela-carrinho tr.bg-dark.possui-cupom td > div').appendTo('.carrinho-customizado .carrinho-customizado-conteudo-cupom-desconto');
 
	   $('.tabela-carrinho .bg-dark td.line-18').appendTo('.carrinho-customizado .carrinho-customizado-conteudo-valor-total');
 
	   $('.finalizar-compra form[action*="/checkout/redirect/"]').appendTo('.carrinho-customizado .carrinho-customizado-conteudo-botoes');
 
	},
 
	adaptarInformacoesFormasDeEnvio(){
 
	   ILUMINIM_UTILS.adaptarFormasDeEnvioCarrinhoCheckout();
	   ILUMINIM_UTILS.alteraNomeFormasDeEnvio();
 
	   $('form#formCalcularFrete').on('submit', function(){
	 
		  ILUMINIM_UTILS.adaptarFormasDeEnvioCarrinhoCheckout();
		  ILUMINIM_UTILS.alteraNomeFormasDeEnvio();
	  
	   });
 
	},
 
	adaptacaoFuncionalidadeCupomPush(){
 
	   if($('table.table.tabela-carrinho tr[data-produto-id]').length == 0) return;
 
	   let valorSubTotal = parseFloat($('.subtotal .titulo[data-subtotal-valor]').attr('data-subtotal-valor'));
 
	   if(valorSubTotal > 199.90) return;
 
	   $('body').append(`
		  <div class="modal modal-personalizado fade" id="modal_valor_nao_atingido">
			 <div class="modal-dialog" role="document">
				<div class="modal-content">
				   <div class="modal-header">
					  <h5 class="modal-title">Valor mínimo não atingido</h5>
					  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						 <span aria-hidden="true">×</span>
					  </button>
				   </div>
 
				   <div class="modal-body">
					  
				   <div class="resultado">
						 <div class="resultado-icone"><svg width="60" height="60" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="exclamation-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-exclamation-circle fa-w-16"><path fill="currentColor" d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" class=""></path></svg></div>
						 <div class="resultado-texto texto-1">Valor mínimo para uso do cupom não foi atingido: <strong>R$ 199,90</strong> </div>
						 <div class="resultado-texto texto-2">CUPOM: <strong>MEUCARRINHO</strong></div>
				   </div>
 
				   </div>
 
				   <div class="modal-footer">
					  <button type="button" class="btn btn-secondary btn-custom" data-dismiss="modal">Fechar</button>
				   </div>
				</div>
			 </div>
		  </div>
	   `);
	
	   $('body').addClass('ajuste-valor-nao-atingido');
 
	   $(document).on('click', 'body.ajuste-valor-nao-atingido .tsG0HQh7bcmTha7pyanx-v-bottom', event => {
		  
		  $('#modal_valor_nao_atingido').modal('show');
		  
	   });
 
	},
 
	iniciar(){ //INICIAR SCRIPTS DA PÁGINA;
	   
	   this.adaptarInformacoesFormasDeEnvio();
	   this.mensagemCarrinhoVazio();
	   this.selosDeSegurancaCarrinho();
	   this.alertaFreteGratisPorRegiao();
	   this.adaptacaoFuncionalidadeCupomPush();
	   this.produtoUpSell();
	   //this.carrinhoV2();
	   this.ajusteCarrinhoMobile();
 
	}
 
 }
 
 $(document).ready(() => {
	
	PaginaCarrinho.iniciar();
 
 });