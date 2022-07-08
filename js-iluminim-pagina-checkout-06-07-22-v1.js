const PaginaCheckout = {
    
	adaptarInformacoesFormasDeEnvio(){
 
	   $('input#id_cep').on('change', function(){
	 
		  ILUMINIM_UTILS.adaptarFormasDeEnvioCarrinhoCheckout();
		  ILUMINIM_UTILS.alteraNomeFormasDeEnvio();
	  
	   });
 
	   ILUMINIM_UTILS.adaptarFormasDeEnvioCarrinhoCheckout();
	   ILUMINIM_UTILS.alteraNomeFormasDeEnvio();
 
	},
 
		selosDeSegurancaCarrinho(){
 
		 $('.carrinho-checkout .atendimento').html(`
		 <div class="selos-de-seguranca-checkout">
				 <ul class="lista-selos-de-seguranca">
					 <li>${ILUMINIM_UTILS.icones.selo.site_sincero}</li>
					 <li>${ILUMINIM_UTILS.icones.selo.abcomm}</li>
					 <li>${ILUMINIM_UTILS.icones.selo.ebit_diamante}</li>
					 <li>${ILUMINIM_UTILS.icones.selo.mp}</li>
					 <li>${ILUMINIM_UTILS.icones.selo.site_blindado}</li>
					 <li>${ILUMINIM_UTILS.icones.selo.site_protegido}</li>
				 </ul>
		 </div>
		 `);
 
	  },
 
 
	 iniciar(){
		 this.adaptarInformacoesFormasDeEnvio();
		 this.selosDeSegurancaCarrinho();
	 }
 
 }
 
 $(document).ready(function(){
	PaginaCheckout.iniciar();
 });