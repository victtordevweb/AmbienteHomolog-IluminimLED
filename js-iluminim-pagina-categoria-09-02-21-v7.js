var PaginaCategoria = {
    
   paginasPersonalizadas(){

      let PaginasPersonalizadas = [
         
         {
            paginasURL: ['/iluminacao'],

            gerarHTML(){
      
               return `
                  <div id="allDepartment">
                        <div class="banner-dpt span12 text-center">
                           <!-- backup https://cdn.awsli.com.br/257/257163/arquivos/banner-dpt-ilm-24-01.png -->
                           <a href="/ofertadasemana?sort=mais_vendidos"><img width="1280" height="364" src="https://cdn.awsli.com.br/257/257163/arquivos/banner-na-home-mais-vendidos-com-desconto-07-08-2020.png" alt="Banner Todos Departamentos"/></a>
                        </div>

                        <div class="texto-dpt span12">
                           Conheça agora a maior linha de <b>Iluminação</b> LED da internet e surpreenda-se com a maior qualidade e o menor preço do Brasil.
                           A Iluminim é uma loja de iluminação online que oferece uma extensa linha de Lâmpadas de LED, Refletores, Luminárias, Plafons, 
                           Fitas de LED, Spots e muitos outros produtos seletamente escolhidos para sua necessidade. Seja ela iluminação de jardim, 
                           iluminaçao residencial, iluminação publica ou iluminação para festas, temos o melhor material para você utilizar em seu projeto, 
                           a maior garantia do mercado e as melhores condições de pagamento. Parcelamos em até 12x sem juros, oferecemos 10% de desconto no 
                           boleto e um frete totalmente gratuito para compras acima de R$ 299,00. Aproveite agora mesmo e adquira o tudo em <b>Iluminação</b>
                           de LED na Iluminim. Confie em quem entende! Confie na líder!
                        </div>
                        <div class="block-categories span12">
                           <div class="block-categories-into one span12">
                              <div class="span4">
                                    <h4><a href="/refletores-de-led?sort=mais_vendidos">Refletores LED</a></h4>
                                    <img src="https://cdn.awsli.com.br/257/257163/arquivos/bloco-destaque-refletores-alldepartment.png" alt="">
                                    <ul>
                                       <li><a href="/refletor-micro-led-slim?sort=mais_vendidos"><i class="icon-chevron-right"></i> Refletor MicroLED Slim</a></li>
                                       <li><a href="/refletor-led-smd-ultra-thin?sort=mais_vendidos"><i class="icon-chevron-right"></i> Refletor MicroLED Ultra Thin</a></li>
                                       <li><a href="/refletor-micro-led-multifocal?sort=mais_vendidos"><i class="icon-chevron-right"></i> Refletor MicroLED Multifocal</a></li>
                                       <li><a href="/refletor-industrial?sort=mais_vendidos"><i class="icon-chevron-right"></i> Refletor LED Industrial</a></li>
                                    </ul>
                              </div>
                              <div class="span4">
                                    <h4><a href="/luminarias-led?sort=mais_vendidos">Luminárias LED</a></h4>
                                    <img src="https://cdn.awsli.com.br/257/257163/arquivos/bloco-destaque-luminarias-alldepartment.png" alt="">
                                    <ul>
                                       <li><a href="/plafon-led?sort=mais_vendidos"><i class="icon-chevron-right"></i> Luminária Plafon LED</a></li>
                                       <li><a href="/pendente?sort=mais_vendidos"><i class="icon-chevron-right"></i> Pendentes</a></li>
                                       <li><a href="/arandela-led?sort=mais_vendidos"><i class="icon-chevron-right"></i> Arandelas</a></li>
                                       <li><a href="/luminarias-publicas-led?sort=mais_vendidos"><i class="icon-chevron-right"></i> Luminárias Públicas LED</a></li>
                                    </ul>
                              </div>
                              <div class="span4">
                                    <h4><a href="/spots?sort=mais_vendidos">Spots LED</a></h4>
                                    <img src="https://cdn.awsli.com.br/257/257163/arquivos/bloco-destaque-spots-alldepartment.png" alt="">
                                    <ul>
                                       <li><a href="/spot-led-quadrado?sort=mais_vendidos"><i class="icon-chevron-right"></i> Spot LED Quadrado</a></li>
                                       <li><a href="/spot-led-redondo?sort=mais_vendidos"><i class="icon-chevron-right"></i> Spot LED Redondo</a></li>
                                       <li><a href="/spot-led-trilho-eletrificado?sort=mais_vendidos"><i class="icon-chevron-right"></i> Spot LED para Trilho Eletrificado</a></li>
                                       <li><a href="/balizador-led?sort=mais_vendidos"><i class="icon-chevron-right"></i> Balizador LED</a></li>
                                    </ul>
                              </div>
                           </div>
                           <div class="block-categories-into two span12">
                              <div class="span4">
                                    <h4><a href="/fita-de-led?sort=mais_vendidos">Fitas LED</a></h4>
                                    <img src="https://cdn.awsli.com.br/257/257163/arquivos/bloco-destaque-fitas-alldepartment.png" alt="">
                                    <ul>
                                       <li><a href="/fita-led-rgb?sort=mais_vendidos"><i class="icon-chevron-right"></i> Fita LED RGB</a></li>
                                       <li><a href="/fita-led-branca?sort=mais_vendidos"><i class="icon-chevron-right"></i> Fita LED Branco Frio</a></li>
                                       <li><a href="/fita-led-branco-quente?sort=mais_vendidos"><i class="icon-chevron-right"></i> Fita LED Branco Quente</a></li>
                                       <li><a href="/mangueiras-led?sort=mais_vendidos"><i class="icon-chevron-right"></i> Mangueira LED</a></li>
                                    </ul>
                              </div>
                              <div class="span4">
                                    <h4><a href="/lampada-led?sort=mais_vendidos">Lâmpadas LED</a></h4>
                                    <img src="https://cdn.awsli.com.br/257/257163/arquivos/bloco-destaque-lampadas-alldepartment.png" alt="">
                                    <ul>
                                       <li><a href="/lampada-led-tubular?sort=mais_vendidos"><i class="icon-chevron-right"></i> Lâmpada LED Tubular</a></li>
                                       <li><a href="/lampada-led-bulbo?sort=mais_vendidos"><i class="icon-chevron-right"></i> Lâmpada LED Bulbo</a></li>
                                       <li><a href="/led-retro?sort=mais_vendidos"><i class="icon-chevron-right"></i> Lâmpada LED Vintage</a></li>
                                       <li><a href="/lampada-led-alta-potencia?sort=mais_vendidos"><i class="icon-chevron-right"></i> Lâmpada LED Alta Potência</a></li>
                                    </ul>
                              </div>
                              <div class="span4">
                                    <h4><a href="/acessorios-para-leds?sort=mais_vendidos">Acessórios LED</a></h4>
                                    <img src="https://cdn.awsli.com.br/257/257163/arquivos/bloco-destaque-acessorios-alldepartment.png" alt="">
                                    <ul>
                                       <li><a href="/fonte-convencional?sort=mais_vendidos"><i class="icon-chevron-right"></i> Fontes para Câmeras e Fitas</a></li>
                                       <li><a href="/drivers?sort=mais_vendidos"><i class="icon-chevron-right"></i> Drivers para Plafons e Refletores</a></li>
                                       <li><a href="/emenda-para-fita-de-led?sort=mais_vendidos"><i class="icon-chevron-right"></i> Emendas para Fita e Spot Trilho</a></li>
                                       <li><a href="/soquete-led?sort=mais_vendidos"><i class="icon-chevron-right"></i> Soquetes para Lâmpadas</a></li>
                                    </ul>
                              </div>
                           </div>
                        </div>

                        <div class="block-call-action span12">
                           <div class="block-video span6">
                              <iframe width="570" height="317" src="https://www.youtube.com/embed/ew74UyFfO6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           </div>
                           <div class="block-environment span6">
                              <div class="box-image-environment span6">
                                    <img src="https://cdn.awsli.com.br/257/257163/arquivos/banner-chamada-compre-por-ambiente-alldepartment.png" alt="Banner Chamada Compre por ambiente">
                              </div>
                              <div class="box-call-environment span6">
                                    <h4>Compre por <br/><b>Ambiente</b></h4>
                                    <a href="/compre-por-ambiente?sort=mais_vendidos">Confira!</a>
                              </div>
                           </div>
                        </div>

                        <div class="block-benefits span12">
                           <div class="sidebar-benefits span3">
                              <h3>Vantagens e <br/><b>Benefícios LED</b></h3>
                              <ul>
                                    <li><a href="javascript:void(0);" target="#one" class="active-benefitt"><i class="icon-chevron-right"></i> Longa Vida Útil</a></li>
                                    <li><a href="javascript:void(0);" target="#two"><i class="icon-chevron-right"></i> Muito Mais Economia</a></li>
                                    <li><a href="javascript:void(0);" target="#tree"><i class="icon-chevron-right"></i> Mais Sustentabilidade</a></li>
                                    <li><a href="javascript:void(0);" target="#four"><i class="icon-chevron-right"></i> Baixa Emissão de Calor</a></li>
                                    <li><a href="javascript:void(0);" target="#five"><i class="icon-chevron-right"></i> Variedade de Cores de Luz</a></li>
                              </ul>
                           </div>
                           <div class="show-benefits span9">
                              <ul>
                                    <li id="one" class="active-benefit">
                                       <div class="box-show-text">
                                          <h3>Longa <b>Vida Útil</b></h3>
                                          <span>
                                                Os produtos de LED são fabricados para durarem cerca de 30 mil horas de uso - podem chegar a 50 mil ou mais -, o que pode durar décadas, dependendo da frequência de utilização por horas/dia.
                                          </span>
                                       </div>
                                       <div class="box-show-image">
                                          <img  width="190" height="190" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-lvu.png" alt="Longa Vida Últil">
                                       </div>
                                    </li>
                                    <li id="two">
                                       <div class="box-show-text">
                                          <h3>Muito <b>Mais Economia</b></h3>
                                          <span>
                                                Alta eficiência aliada ao baixo consumo de energia elétrica. A lâmpada emite o mesmo fluxo luminoso que as outras, mas com a vantagem de ser até 80% mais econômica que as incandescentes e a diferença para a fluorescente é de 30% (em uma comparação utilizando lâmpadas com 20W de potência).
                                          </span>
                                       </div>
                                       <div class="box-show-image">
                                          <img  width="190" height="190" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-eco.png" alt="Icon Mais Economia">
                                       </div>
                                    </li>
                                    <li id="tree">
                                       <div class="box-show-text">
                                          <h3>Mais <b>Sustentabilidade</b></h3>
                                          <span>
                                                Por não conter elementos tóxicos, esse tipo de lâmpada também é amigável ao meio ambiente, ao contrário das lâmpadas fluorescentes que têm mercúrio em seu interior. Cerca de 98,5% dos materiais usados na fabricação da lâmpada LED são recicláveis.
                                                <br/>Além disso, por terem uma vida útil longa, ela também se torna mais sustentável e ajuda a produzir menos lixo a longo prazo.
                                          </span>
                                       </div>
                                       <div class="box-show-image">
                                          <img  width="190" height="190" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-sus.png" alt="Icon Mais Sustentabilidade">
                                       </div>
                                    </li>
                                    <li id="four">
                                       <div class="box-show-text">
                                          <h3>Baixa <b>Emissão de Calor</b></h3>
                                          <span>
                                                Esse também é um dos fatores que a tornam mais econômica. Isso ocorre porque outros tipos de lâmpadas transformam parte da energia consumida em calor, enquanto o LED utiliza somente o suficiente para gerar um bom fluxo luminoso com uma emissão de calor muito baixa.
                                          </span>
                                       </div>
                                       <div class="box-show-image">
                                          <img  width="190" height="190" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-bec.png" alt="Icon Baixa Emissão de Luz">
                                       </div>
                                    </li>
                                    <li id="five">
                                       <div class="box-show-text">
                                          <h3>Variedade de <b>Cores de Luz</b></h3>
                                          <span>
                                                A lâmpada de LED pode ter inúmeras cores, você encontra todo o espectro RGB com a possibilidade de alterar as cores com um controle específico em alguns modelos, já outros vêm com a cor de luz fixa em verde, azul, vermelho, rosa, amarelo e muito mais. Tendo a possibilidade de transformar qualquer ambiente.
                                          </span>
                                       </div>
                                       <div class="box-show-image">
                                          <img  width="190" height="190" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-var.png" alt="Icon Variedade de Cores">
                                       </div>
                                    </li>
                              </ul>   
                           </div>
                        </div>



                        <div id="box-estatisticas">
                           <div class="container">
                              <div class="linha-um into-estatisticas">
                                    <div class="texto-estatisticas">
                                       <p class="texto-estatistica--into">A <b>Iluminim</b> revolucionou o mercado de iluminação e hoje - há 10 anos no segmento - é referência em produtos de LED. Mudando o jeito de fazer negócio, a Iluminim se preocupa fundamentalmente com o cliente, seja oferecendo as melhores condições de pagamento com opção de parcelamento de até <b>12x sem juros</b> no cartão de crédito ou disponibilizando <b>10% de desconto</b> à vista no boleto. <b>A maior garantia do mercado, os preços baixos e o frete gratuito</b> para compras a partir de R$ 299,00, elevam ainda mais o patamar do maior e-commerce de LED do Brasil. Além de fazer bem para o seu bolso, a Iluminim também preza pela sustentabilidade do planeta, seja comercializando a tecnologia mais sustentável do ramo, quanto em ações sociais que visam a empatia ao próximo (ao finalizar uma compra você pode selecionar para qual programa iremos doar um fundo monetário). Confie em quem entende o que é melhor para o planeta. Confie na líder!</p>
                                    </div>
                                    <div class="progresssbar-estatisticas">
                                       <h3 class="titulo-texto-estatisticas">Saiba porquê investir em LED:</h3>
                                       <div class="progressbox one">
                                          <span class="titlle-progressbar">Economia de energia em até 80%</span>
                                          <div class="progressbar" data-progress="80%" style="--width: 80;"></div>
                                       </div>
                                       <div class="progressbox two">
                                          <span class="titlle-progressbar">Material 98,5% reciclável</span>
                                          <div class="progressbar" data-progress="98.5%" style="--width: 92;"></div>
                                       </div>
                                    </div>
                              </div> 
                              <div class="linha-dois into-estatisticas">
                                    <div class="numeros-estatisticas">
                                       <span class="quantidade-numeros">10</span>
                                       <span class="texto-numeros">ANOS DE MERCADO</span>
                                    </div>
                                    <div class="numeros-estatisticas">
                                       <span class="quantidade-numeros">+ 1.000.000</span>
                                       <span class="texto-numeros">CLIENTES SATISFEITOS</span>
                                    </div>
                                    <div class="numeros-estatisticas">
                                       <span class="quantidade-numeros">+ 140.000</span>
                                       <span class="texto-numeros">PRODUTOS NO CATÁLOGO</span>
                                    </div>
                                    <div class="numeros-estatisticas">
                                       <span class="quantidade-numeros">6</span>
                                       <span class="texto-numeros">INSTITUIÇÕES BENEFICIADAS</span>
                                    </div>
                              </div>
                           </div> 
                        </div>



                        <div class="withdraw__in__store">
                           <div class="box-information span3">
                              <div class="withdraw__box-header">
                                    <img width="190" height="69" alt="Encontre um produto" title="Encontre um produto" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-box-encontre-produto.png"/>
                              </div>
                              <div class="withdraw__box-body">
                                    <h4>Encontre um produto</h4>
                                    <p>
                                    Escolha o produto que você quer comprar online e retirar na loja.
                                    </p>
                              </div>
                           </div>
                           <div class="box-information span3">
                              <div class="withdraw__box-header">
                                    <img width="59" height="76" alt="Encontre uma loja" title="Encontre uma loja" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-box-escolha-uma-loja.png"/>
                              </div>
                              <div class="withdraw__box-body">
                                    <h4>Escolha uma loja</h4>
                                    <p>
                                    Escolha uma loja física mais perto de você
                                    </p>
                              </div>
                           </div>
                           <div class="box-information span3">
                              <div class="withdraw__box-header">
                                    <div class="withdraw__box-header--into">
                                       <img width="38" height="31" alt="Finalize a compra" title="Finalize a compra" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-box-pegue-hoje.png"/>
                                       <span>pegue na loja hoje!</span>
                                    </div>
                                    <a href="#">comprar</a>
                              </div>
                              <div class="withdraw__box-body">
                                    <h4>Finalize a compra</h4>
                                    <p>
                                       Faça o pedido com a opção de "Retirada pessoalmente" e aguarde o e-mail de confirmação para retirada
                                    </p>
                              </div>
                           </div>
                           <div class="box-information span3">
                              <div class="withdraw__box-header">
                                    <img width="76" height="81" alt="Agora é só retirar" title="Agora é só retirar" src="https://cdn.awsli.com.br/257/257163/arquivos/icon-box-retirar-agora.png"/>
                              </div>
                              <div class="withdraw__box-body">
                                    <h4>Agora é só retirar</h4>
                                    <p>
                                       Pegue o número do pedido e corre para a loja que você escolheu!
                                    </p>
                              </div>
                           </div>
                        </div>


                  </div>
               `;

            },

            toggleBeneficios(){

               $('.sidebar-benefits.span3 ul>li>a').on('click', function(e){

                  e.preventDefault();

                  let benefitClicked = $(this).attr('target');

                  $('.sidebar-benefits.span3 ul>li>a').removeClass('active-benefitt');

                  $(this).addClass('active-benefitt');

                  $('.show-benefits.span9 ul li').removeClass('active-benefit');
                  
                  $(`.show-benefits.span9 ul li${benefitClicked}`).addClass('active-benefit');

               });

            },

            renderizar(){

               let html = this.gerarHTML();

               $('body').addClass('pagina-personalizada-todos-departamentos');

               $('.conteudo.span9').prepend(html);

               this.toggleBeneficios();

            },
         },

         {
            paginasURL: ['/luminarias-plafons-led'],

            gerarHTML(){
      
               return `
                  <div class="gird-listagem-customizada">
                  
                        <div class="gird-listagem-customizada-conteudo grid-listagem-1">
                           <div class="grid-listagem-item">
                              <a href="/plafon-led-sobrepor?sort=mais_vendidos" onclick="ga('send', 'event', 'Grid banners Categoria', 'click', 'Promoções plafons')">
                                    <img src="https://cdn.awsli.com.br/930/930730/arquivos/Banners_Promocoes-31-01-22.png" alt="Promoções plafons" title="Promoções plafons">
                              </a>
                           </div>

                           <div class="grid-listagem-item">
                              <iframe allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" height="235" src="https://www.youtube.com/embed/gxDQtJy4SWw" width="427"></iframe>
                           </div>
                        </div>

                        <div class="gird-listagem-customizada-conteudo grid-listagem-2">
                           <div class="grid-listagem-item">
                              <a href="/arandela-led?sort=mais_vendidos" onclick="ga('send', 'event', 'Grid banners Categoria', 'click', 'Arandela LED')">
                                    <img src="https://cdn.awsli.com.br/930/930730/arquivos/Arandelas-31-01-22.png" alt="Arandela LED" title="Arandela LED">
                              </a>
                           </div>

                           <div class="grid-listagem-item">
                              <a href="/plafon-led?sort=mais_vendidos" onclick="ga('send', 'event', 'Grid banners Categoria', 'click', 'Plafon LED')">
                                    <img src="https://cdn.awsli.com.br/930/930730/arquivos/Plafons-31-01-22.png" alt="Plafon LED" title="Plafon LED">
                              </a>
                           </div>

                           <div class="grid-listagem-item">
                              <a href="/pendente?sort=mais_vendidos" onclick="ga('send', 'event', 'Grid banners Categoria', 'click', 'Lustre LED')">
                                    <img src="https://cdn.awsli.com.br/930/930730/arquivos/Lustres-31-01-22.png" alt="Lustre LED" title="Lustre LED">
                              </a>
                           </div>
                        </div>

                  </div>
               `;

            },

            renderizar(){

               if(!ILUMINIM_UTILS.screen.isDesktop()){
                  return;
               }

               let html = this.gerarHTML();

               $('div#listagemProdutos .listagem-linha:nth-child(4)').after(html);

            },
         },

         {
            paginasURL: ['/refletores-de-led'],

            gerarHTMLGridCupom(){

               return `
                  <div class="grid-categoria-refletores-customizada cupom-grid-customizada">
                  
                     <div class="cupom-grid-customizada-conteudo-produtos">

                        <div class="cupom-grid-produto produto-1">
                           <div class="iluminim-loading">${ILUMINIM_UTILS.icones.loading}</div>
                        </div>

                        <div class="cupom-grid-produto produto-2">
                           <div class="iluminim-loading">${ILUMINIM_UTILS.icones.loading}</div>
                        </div>
                        
                     </div>

                     <div class="cupom-grid-customizada-conteudo-cupom">
                        
                        <div class="cupom-conteudo">
                           <div>
                              <span class="texto-preco-cupom">Você tem <b>R$ 20,00 OFF</b> na 1ª compra</span>
                              <span class="texto-preco-limite-cupom">*Em compras acima de R$299,00</span>
                           </div>

                           <div>
                              <div class="codigo-cupom">
                                 <span>20OFF</span>
                              </div>
                              <span class="texto-informativo-cupom">Insira o cupom no carrinho de compras</span>
                           </div>
                        </div>

                     </div>

                  </div>
               `;

            },

            renderizarGridCupom(){

               let html = this.gerarHTMLGridCupom();

               $('div#listagemProdutos .listagem-linha:nth-child(4)').after(html);
               
            },

            renderizar(){

               if(!ILUMINIM_UTILS.screen.isDesktop()){
                  return;
               }

               // this.renderizarGridCupom();

            },
            
         },

         {
            paginasURL: ['/spot-led-redondo'],

            gerarHTML(){
      
               return `
                  <div class="gird-listagem-customizada">
                     <div class="gird-listagem-customizada-conteudo grid-listagem-1 grid-listagem-duplo-video">
                        <div class="grid-listagem-item">
                           <iframe allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" height="235" src="https://www.youtube.com/embed/Mxy74DIE9mU" width="427"></iframe>
                        </div>

                        <div class="grid-listagem-item">
                           <iframe allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" height="235" src="https://www.youtube.com/embed/JnGJO1WwrOA" width="427"></iframe>
                        </div>
                     </div>
                  </div>
               `;

            },

            renderizar(){

               if(!ILUMINIM_UTILS.screen.isDesktop()){
                  return;
               }

               let html = this.gerarHTML();

               $('div#listagemProdutos .listagem-linha:nth-child(2)').after(html);

            },
            
         },

         {
            paginasURL: ['/spot-led-quadrado'],

            gerarHTML(){
      
               return `
                  <div class="gird-listagem-customizada">
                     <div class="gird-listagem-customizada-conteudo grid-listagem-1">

                        <div class="grid-listagem-item carousel-target">
                           <div class="grid-listagem-item-carousel">
                              <div><img src="https://cdn.awsli.com.br/257/257163/arquivos/banner-span6-e-video-spot-led-quadrado.png"></div>
                           </div>

                           <div class="grid-listagem-item-carousel">
                              <a href="/kit-10-spot-led?sort=mais_vendidos"><img src="https://cdn.awsli.com.br/257/257163/arquivos/spots-led-kit-10.png"></a>
                           </div>
                        </div>

                        <div class="grid-listagem-item">
                           <iframe allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" height="235" src="https://www.youtube.com/embed/4aze4GeHUbw" width="427"></iframe>
                        </div>
                     </div>
                  </div>
               `;

            },

            renderizar(){

               if(!ILUMINIM_UTILS.screen.isDesktop()){
                  return;
               }

               let html = this.gerarHTML();

               $('div#listagemProdutos .listagem-linha:nth-child(2)').after(html);

               $('.gird-listagem-customizada .carousel-target').owlCarousel({
                  margin:0,
                  nav:true,
                  dots: false,
                  navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
                  responsive:{
                     0:{
                        items:1
                     },
                     767:{
                        items:1
                     },
                     1024:{
                        items:1
                     }
            
                  }
               });

            },
            
         },

         {
            paginasURL: [
               '/lancamentos-led',
               '/lancamento-plafon-led-',
               '/lancamento-refletor-led',
               '/lancamento-spot-led',
               '/lancamento-fita-led',
               '/lancamento-lampada-led',
               '/lancamento-luminarias-led',
               '/lustre-led',
               '/lancamento-camera-led',
               '/lancamento-festa-led',
               '/lancamento-acessorios-led',
            ],

            naveguePorLancamentos: {

               gerarObjeto(){

                  let categorias = [
                        {
                           nome: 'Plafons LED',
                           link: '/lancamento-plafon-led-?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-lancamento-15-10.png'
                        },
                        {
                           nome: 'Refletores LED',
                           link: '/lancamento-refletor-led?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-led-lancamento-15-10.png'
                        },
                        {
                           nome: 'Spots LED',
                           link: '/lancamento-spot-led?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lancamentos-spot-15-07-21.png'
                        },
                        {
                           nome: 'Fitas LED',
                           link: '/lancamento-fita-led?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/fita-led-lancamento-15-10.png'
                        },
                        {
                           nome: 'Lâmpadas LED',
                           link: '/lancamento-lampada-led?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-lancamento-15-10.png'
                        },
                        {
                           nome: 'Luminárias LED',
                           link: '/lancamento-luminarias-led?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/navegacao-lanc-luminarias-10-05-21.png'
                        },
                        {
                           nome: 'Lustre LED',
                           link: '/lustre-led?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lancamento-lustre-30-06-21.png'
                        },
                        {
                           nome: 'Luminária Pendente',
                           link: '/lancamento-pendente?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/pendente-led-lancamento-15-10.png'
                        },
                        {
                           nome: 'Câmeras LED',
                           link: '/lancamento-camera-led?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/camera-led-lancamento-15-10.png'
                        },
                        {
                           nome: 'Festa LED',
                           link: '/lancamento-festa-led?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/icon-festa-led-lancaments-17-10.png'
                        },
                        {
                           nome: 'Acessórios LED',
                           link: '/lancamento-acessorios-led?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/acessorios-led-lancamento-15-10.png'
                        },
                  ]

                  return categorias;

               },

               gerarHTML(){

                  let objeto = this.gerarObjeto();

                  let categoriasHTML = objeto.map(categoria => {

                        let { nome, link, imagem } = categoria;

                        return `
                           <div class="navegacao-lancamentos-item ${window.location.pathname == link.split('?')[0] ? 'navegacao-active' : ''}">
                              <a href="${link}" title="${nome}">
                                    
                                    <div class="navegacao-lancamentos-item-imagem">
                                       <img src="${imagem}", alt="${nome}" title="${nome}">
                                    </div>

                                    <div class="navegacao-lancamentos-item-nome">${nome}</div>

                              </a>
                           </div>
                        `;

                  }).join('');


                  return `
                        <div class="navegacao-lancamentos">

                           <div class="navegacao-lancamentos-titulo">
                              <span>Navegue por Lançamentos</span>
                           </div>

                           <div class="navegacao-lancamentos-conteudo">
                              <div class="navegacao-lancamentos-conteudo-lista carousel-target">
                                    ${categoriasHTML}
                              </div>
                           </div>

                        </div>
                  `;

               },

               filtroPorPreco(){

                  $('.lateral.outras.filtro-coluna.filtro-preco-personalizado').insertBefore('.navegacao-lancamentos');

               },

               ativarCarousel(){

                  $('.navegacao-lancamentos .carousel-target').owlCarousel({
                        margin:0,
                        nav:true,
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
                              items:6
                           }
                        }
                  });

               },

               iniciar(){

                  let html = this.gerarHTML();                                

                  $('div#listagemProdutos').before(html);

                  this.ativarCarousel();
                  this.filtroPorPreco();

               }

            },

            renderizar(){

               $('body').addClass('pagina-personalizada-lancamentos');

               this.naveguePorLancamentos.iniciar();

            },

         },

         /*{
            paginasURL: [
               '/led-friday',
               '/plafon-led-friday',
               '/refletor-led-friday',
               '/spot-led-friday',
               '/fita-led-friday',
               '/lampada-led-friday',
               '/acessorios-led-friday',
            ],

            naveguePorLedfriday: {

               gerarObjeto(){

                  let categorias = [
                        {
                           nome: 'Plafons LED',
                           link: '/plafon-led-friday?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-lancamento-15-10.png'
                        },
                        {
                           nome: 'Refletores LED',
                           link: '/refletor-led-friday?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-led-lancamento-15-10.png'
                        },
                        {
                           nome: 'Spots LED',
                           link: '/spot-led-friday?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lancamentos-spot-15-07-21.png'
                        },
                        {
                           nome: 'Fitas LED',
                           link: '/fita-led-friday?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/fita-led-lancamento-15-10.png'
                        },
                        {
                           nome: 'Lâmpadas LED',
                           link: '/lampada-led-friday?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-lancamento-15-10.png'
                        },
                        {
                           nome: 'Luminárias LED',
                           link: '/luminarias-led-friday?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/navegacao-lanc-luminarias-10-05-21.png'
                        },
                        {
                           nome: 'Pendente LED',
                           link: '/pendente-led-friday?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/pendente-led-lancamento-15-10.png'
                        },
                        {
                           nome: 'Lustre LED',
                           link: '/lustre-led-friday?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lancamento-lustre-30-06-21.png'
                        },
                        {
                           nome: 'Acessórios LED',
                           link: '/acessorios-led-friday?sort=ultimos_produtos',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/acessorios-led-lancamento-15-10.png'
                        },
                  ]

                  return categorias;

               },

               gerarHTML(){

                  let objeto = this.gerarObjeto();

                  let categoriasHTML = objeto.map(categoria => {

                        let { nome, link, imagem } = categoria;

                        return `
                           <div class="navegacao-lancamentos-item ${window.location.pathname == link.split('?')[0] ? 'navegacao-active' : ''}">
                              <a href="${link}" title="${nome}">
                                    
                                    <div class="navegacao-lancamentos-item-imagem">
                                       <img src="${imagem}", alt="${nome}" title="${nome}">
                                    </div>

                                    <div class="navegacao-lancamentos-item-nome">${nome}</div>

                              </a>
                           </div>
                        `;

                  }).join('');


                  return `
                        <div class="navegacao-lancamentos">

                           <div class="navegacao-lancamentos-titulo">
                              <span>Navegue por Departamento</span>
                           </div>

                           <div class="navegacao-lancamentos-conteudo">
                              <div class="navegacao-lancamentos-conteudo-lista carousel-target">
                                    ${categoriasHTML}
                              </div>
                           </div>

                        </div>
                  `;

               },

               filtroPorPreco(){

                  $('.lateral.outras.filtro-coluna.filtro-preco-personalizado').insertBefore('.navegacao-lancamentos');

               },

               ativarCarousel(){

                  $('.navegacao-lancamentos .carousel-target').owlCarousel({
                        margin:0,
                        nav:true,
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
                              items:6
                           }
                        }
                  });

               },

               iniciar(){

                  let html = this.gerarHTML();                                

                  $('div#listagemProdutos').before(html);

                  this.ativarCarousel();


                  //this.filtroPorPreco();

               }

            },

            renderizar(){

               $('body').addClass('pagina-personalizada-lancamentos');

               this.naveguePorLedfriday.iniciar();

            },

         },*/

         {
            paginasURL: ['/oferta-da-semana', '/led-friday'],

            listagensPersonalizadas: {

               gerarObjeto(){

                  let objeto = {

                        ['/oferta-da-semana']: [
                           {
                              url: '/refletores-holofotes-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner%20odm%20refletores%20led%2021-10-2020.png',
                              nome: 'Refletores LED'
                           },
                           {
                              url: '/refletores-holofotes-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner%20odm%20luminarias%20led%2021-10-2020.png',
                              nome: 'Luminárias LED'
                           },
                           {
                              url: '/refletores-holofotes-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner%20odm%20spots%20led%2021-10-2020.png',
                              nome: 'Spots LED'
                           },
                           {
                              url: '/refletores-holofotes-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner%20odm%20fitas%20led%2021-10-2020.png',
                              nome: 'Fitas LED'
                           },
                           {
                              url: '/refletores-holofotes-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner%20odm%20lampadasled%2021-10-2020.png',
                              nome: 'Lâmpadas LED'
                           },
                           {
                              url: '/refletores-holofotes-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/Banner_vertical_ACESSORIOS_led_friday_6.0-22-10-21.png',
                              nome: 'Acessórios LED'
                           },
                           {
                              url: '/led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner%20odm%20lampadasled%2021-10-2020.png',
                              nome: 'Kits LED'
                           },
                           {
                              url: '/refletores-holofotes-ledrt=ultimos_produtos',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/banner-ods-lancamentos-18AGO21-v2.png',
                              nome: 'Lançamentos LED'
                           },
                        ],
                        
                        ['/led-friday']: [
                           {
                              url: '/refletores-holofotes-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/banner-vertical-refletores-led-09-12-21.png',
                              nome: 'Refletores LED'
                           },
                           {
                              url: '/led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/banner-vertical-luminarias-led-09-12-21.png',
                              nome: 'Luminárias LED'
                           },
                           {
                              url: '/led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/banner-vertical-kits-led-09-12-21.png',
                              nome: 'Kits LED'                    
                           },
                           {
                              url: '/refletores-holofotes-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/banner-vertical-spots-led-09-12-21.png',
                              nome: 'Spots LED'
                           },
                           {
                              url: '/refletores-holofotes-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/banner-vertical-fitas-led-09-12-21.png',
                              nome: 'Fitas LED'
                           },
                           {
                              url: '/refletores-holofotes-led?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/banner-vertical-lampadas-led-09-12-21.png',
                              nome: 'Lâmpadas LED'                    
                           },
                           {
                              url: '/led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/banner-vertical-pendentes-led-09-12-21.png',
                              nome: 'Pendentes LED'                    
                           },
                           {
                              url: '/led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/banner-vertical-lustres-led-09-12-21.png',
                              nome: 'Lustres LED'                    
                           },
                           {
                              url: '/led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/banner-vertical-acessorios-led-09-12-21.png',
                              nome: 'Acessórios LED'                    
                           },
                           {
                              url: '/led-friday?sort=mais_vendidos',
                              imagem: 'https://cdn.awsli.com.br/930/930730/arquivos/banner-vertical-lancamentos-led-09-12-21.png',
                              nome: 'Lançamentos LED'                    
                           },
                           
                        ]

                  }

                  return objeto[window.location.pathname];

               },

               gerarHTML(){

                  let objeto = this.gerarObjeto();

                  let HTMLCategorias = objeto.map((item, index) => {

                        let { url, imagem, nome } = item;

                        return `
                           <div class="conteudo-ofertasemana--bloco-categoria categoria-${ index + 1 }" data-load="${ url }">
                           
                              <div class="bloco-categoria--banner">
                                    
                                    ${ILUMINIM_UTILS.screen.isDesktop() ? `
                                       <a href="javascript:void(0);">
                                          <img src="${ imagem }">
                                       </a>
                                    ` : ''}

                                    <div class="banner--cronometro">
                                       <ul class="countdown-target"></ul>
                                    </div>

                                    <div class="banner--progresso">

                                       ${ILUMINIM_UTILS.screen.isDesktop() ? `

                                          ${ ILUMINIM_UTILS.gerarBarraProgresso({ iniciar_apartir: 89 }) }

                                       ` : ''}

                                       ${ILUMINIM_UTILS.screen.isMobile() ? `
                                          <div class="banner-titulo">
                                             <span class="banner-titulo-icone">${ILUMINIM_UTILS.icones.relogio_3}</span>
                                             <span>${nome}</span>
                                          </div>
                                       ` : ''}

                                    </div>
                              </div>

                              <div class="bloco-categoria--produtos">

                                    <div class="bloco-produtos-titulo">
                                       <a href="${url}">Ver mais</a>
                                    </div>

                                    <div class="produtos--produtos-carrousel carousel-target">
                                       <div class="carregando-produtos">${ ILUMINIM_UTILS.icones.loading }</div>
                                    </div>
                              </div>

                              ${ILUMINIM_UTILS.screen.isMobile() ? `

                                 <div class="banner--conteudo-mobile">

                                    <div class="banner--cronometro cronometro-mobile">
                                       <ul class="countdown-target"></ul>
                                    </div>

                                    <div class="banner--progresso progresso-mobile">

                                       ${ ILUMINIM_UTILS.gerarBarraProgresso({ iniciar_apartir: 89 }) }

                                    </div>

                                 </div>
                                 
                              ` : ''}

                           </div>
                        `;

                  }).join('');

                  return `
                        <div id="OfertaSemanaCustomizada">

                           <div class="conteiner">

                              <div class="OfertaSemanaCustomizada--conteudo-ofertasemana">
                                 ${HTMLCategorias}
                              </div>

                              <!--<div class="newsletter-conecte-se-black-friday">
                                 <div class="newsletter-black-friday-titulo">Conecte-se à Black Friday</div>
                                 <div class="newsletter-black-friday-sub-titulo">Cadastre-se e receba todas as novidades e ofertas em primeira mão!</div>

                                 <div class="newsletter-black-friday-conteudo">
                                    ${ $('div#barraNewsletter .interno').html() }
                                 </div>

                              </div>-->

                           </div>

                        </div>
                  `;
                  
               },

               carregarProdutos(){ //CARREGANDO OS PRODUTOS NAS SUAS CATEGORIAS RESPECTIVAS.

                  let $this = this;

                  $('#OfertaSemanaCustomizada .conteudo-ofertasemana--bloco-categoria').each(function(){
            
                        let urlLoad = $(this).attr('data-load');
                        
                        if(ILUMINIM_UTILS.screen.isDesktop()){
            
                           $this.executarCronometro($(this).find('.bloco-categoria--banner .countdown-target'));
                           
                        }
                        
                        $(this).find('.bloco-categoria--produtos .produtos--produtos-carrousel').load(`${urlLoad} div#listagemProdutos .listagem-item`, ()=>{
                           
                           if($(this).find('.listagem-item').length > 0){

                              $this.executarCarrousel( $(this).find('.produtos--produtos-carrousel') );
                              
                              ILUMINIM_UTILS.ajusteDescontoListagem( $(this).find('.listagem-item') );

                              ILUMINIM_UTILS.adicionarListaDesejosListagem( $(this).find('.listagem-item') );

                           }
            
                        });
            
                  });
            
               },

               executarCarrousel(alvo){
            
                  alvo.owlCarousel({
                        margin:0,
                        nav:true,
                        dots: false,
                        autoHeight: true,
                        navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
                        responsive:{
                           0:{
                              items:1
                           },
                           767:{
                              items:2
                           },
                           1024:{
                              items:3
                           }
                  
                        }
                  });
            
               },
            
               executarCronometro(alvo){
            
                  alvo.yuukCountDown({
                        starttime: '2016/11/11 00:00:00',
                        endtime: '2030/12/30 00:00:00'
                  });
            
               },
               
               cronometros(){

                  $(`
                     .banner.cheio .slides img[alt="Categoria -> /oferta-da-semana - Banner Cronômetro"],
                     .banner.cheio .slides img[alt="Categoria -> /oferta-da-semana - Banner Cronômetro - @mobile"],
                     .banner.cheio .slides img[alt="Categoria -> /led-friday - Banner Cronômetro"],
                     .banner.cheio .slides img[alt="Categoria -> /led-friday - Banner Cronômetro - @mobile"]
                  `).after(`
                     <div class="cronometro-banner">
                        <ul class="countdown-target"></ul>
                     </div>
                  `);

                  this.executarCronometro( $('.countdown-target') );

               },

               barraProgressoFullBanner(){

                  $(`
                     .banner.cheio .slides img[alt="Categoria -> /oferta-da-semana - Banner Cronômetro"],
                     .banner.cheio .slides img[alt="Categoria -> /oferta-da-semana - Banner Cronômetro - @mobile"],
                     .banner.cheio .slides img[alt="Categoria -> /led-friday - Banner Cronômetro"],
                     .banner.cheio .slides img[alt="Categoria -> /led-friday - Banner Cronômetro - @mobile"]
                  `).after(ILUMINIM_UTILS.gerarBarraProgresso());

               },

               adicionarClassesCustomizadasBody(){

                  if(window.location.pathname == '/led-friday'){

                     $('body').addClass('pagina-led-friday');

                  }

               },
              
               iniciar(){

                  this.adicionarClassesCustomizadasBody();
                  this.carregarProdutos();

               }

            },

            renderizar(){

               console.log('lol');

               $('body').addClass('pagina-personalizada-oferta-da-semana');

               let html = this.listagensPersonalizadas.gerarHTML();
      
               $('.conteudo.span9').before(html);
   
               this.listagensPersonalizadas.iniciar();

               this.listagensPersonalizadas.cronometros();

               this.listagensPersonalizadas.barraProgressoFullBanner();

            },

         },

         {

            paginasURL: ['/fita-de-led'],

            gerarHTML(){

               return `
                  <div class="listagens-customizadas">
                        <div class="listagens-customizadas-listas">
                        
                           <div class="listagem-customizada listagem-os-mais-vendidos">
                              <div class="iluminim-loading" style="display: none;"></div>
                           </div>

                           <div class="listagem-customizada listagem-fita-led-rgb">
                              <div class="iluminim-loading" style="display: none;"></div>

                              <a class="listagem-customizada-ver-todos" href="/fita-led-rgb?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-fita-led-branco-quente">
                              <div class="iluminim-loading" style="display: none;"></div>

                              <a class="listagem-customizada-ver-todos" href="/fita-led-branco-quente?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-fita-led-branco-frio">
                              <div class="iluminim-loading" style="display: none;"></div>

                              <a class="listagem-customizada-ver-todos" href="/fita-led-branca?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-fita-led-branco-morno">
                              <div class="iluminim-loading" style="display: none;"></div>

                              <a class="listagem-customizada-ver-todos" href="/fita-led-branco-morno?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-fita-led-vermelha">
                              <div class="iluminim-loading" style="display: none;"></div>

                              <a class="listagem-customizada-ver-todos" href="/fita-led-vermelha?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-fita-led-verde">
                              <div class="iluminim-loading" style="display: none;"></div>

                              <a class="listagem-customizada-ver-todos" href="/fita-led-verde?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-fita-led-12v">
                              <div class="iluminim-loading" style="display: none;"></div>

                              <a class="listagem-customizada-ver-todos" href="/fita-led-12v?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-mangueiras-led">
                              <div class="iluminim-loading" style="display: none;"></div>

                              <a class="listagem-customizada-ver-todos" href="/mangueiras-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-kits-fita-led">
                              <div class="iluminim-loading" style="display: none;"></div>

                              <a class="listagem-customizada-ver-todos" href="/kit-fita-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>
                        
                        </div>
                  </div>
               `;

            },

            renderizar(){

               $('body').addClass('pagina-personalizada-listagens-customizadas');

               let html = this.gerarHTML();

               $('div#listagemProdutos').prepend(html);

            }

         },

         {
            paginasURL: ['/lampada-led'],

            gerarHTML(){

               return `
                  <div class="listagens-customizadas">
                        <div class="listagens-customizadas-listas">
                        
                           <div class="listagem-customizada listagem-lampada-os-mais-vendidos">
                              <div class="iluminim-loading" style="display: none;"></div>
                           </div>

                           <div class="listagem-customizada listagem-lampada-led-bulbo">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/lampada-led-bulbo?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lampada-led-tubular">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/lampada-led-tubular?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lampada-led-alta-potencia">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/lampada-led-alta-potencia?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lampada-led-milho">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/lampada-led-milho?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lampada-led-vintage">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/led-retro?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lampada-led-par">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/par-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lampada-led-halopin">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/halopin-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lampada-led-vela">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/vela-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lampada-led-ar">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/lampada-led-ar?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lampada-led-bolinha">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/lampada-led-bolinha?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lampada-led-prato">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/lampada-led-prato?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lampada-led-automotiva">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/led-automotivo?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>
                        
                        </div>
                  </div>
               `;

            },

            renderizar(){

               $('body').addClass('pagina-personalizada-listagens-customizadas');

               let html = this.gerarHTML();

               $('div#listagemProdutos').prepend(html);

            }
         },

         {
            paginasURL: ['/spots'],

            gerarHTML(){

               return `
                  <div class="listagens-customizadas">
                        <div class="listagens-customizadas-listas">
                        
                           <div class="listagem-customizada listagem-spot-baixaram-de-preco">
                              <div class="iluminim-loading" style="display: none;"></div>
                           </div>

                           <div class="listagem-customizada listagem-spot-led-trilho">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/spot-led-trilho-eletrificado?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="gird-listagem-customizada hidden-phone">
                              <div class="gird-listagem-customizada-conteudo grid-listagem-1 grid-listagem-duplo-video">
                                 <div class="grid-listagem-item">
                                    <iframe allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" height="235" src="https://www.youtube.com/embed/n4guMHmbvSQ" width="427"></iframe>
                                 </div>

                                 <div class="grid-listagem-item">
                                    <iframe allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" height="235" src="https://www.youtube.com/embed/YMgHvl6D8rI" width="427"></iframe>
                                 </div>
                              </div>
                           </div>

                           <div class="listagem-customizada listagem-spot-led-dicroica-quadrado">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/spot-led-quadrado?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-spot-led-dicroica-redondo">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/spot-led-redondo?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-spot-led-recuado">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/spot-led-recuado?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-mini-spot-led-quadrado">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/mini-spot-led-quadrado?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-mini-spot-led-redondo">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/mini-spot-led-redondo?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-spot-led-colorido">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/spot-led-colorido-?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-balizador-led">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/balizador-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-spot-led-sobrepor">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/spot-led-sobrepor?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-kits-spots-led">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/kits-spots-led-dicroica?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>
                        
                        </div>
                  </div>
               `;

            },

            renderizar(){

               $('body').addClass('pagina-personalizada-listagens-customizadas');

               let html = this.gerarHTML();

               $('div#listagemProdutos').prepend(html);

            }
         },

         {
            paginasURL: ['/acessorios-para-leds'],

            gerarHTML(){

               return `
                  <div class="listagens-customizadas">
                        <div class="listagens-customizadas-listas">
                        
                           <div class="listagem-customizada listagem-acessorios-fonte-chaveada">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/fonte-chaveada-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-acessorios-fonte-convencional">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/fonte-convencional?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-acessorios-soquetes-led">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/soquete-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-acessorios-driver-led">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/drivers?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-acessorios-conector-led">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/conectores-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-acessorios-interruptor-led">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/interruptores-tomadas-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-acessorios-emenda-led">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/emenda-para-fita-de-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-acessorios-sensor-de-presenca">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/sensor-de-presenca?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-acessorios-kits-acessorios">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/kit-acessorios-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>
                        
                        </div>
                  </div>
               `;

            },

            renderizar(){

               $('body').addClass('pagina-personalizada-listagens-customizadas');

               let html = this.gerarHTML();

               $('div#listagemProdutos').prepend(html);

            }
         },

         {
            paginasURL: ['/lustre'],

            gerarHTML(){

               return `
                  <div class="listagens-customizadas">
                        <div class="listagens-customizadas-listas">
                        
                           <div class="listagem-customizada listagem-lustre-os-mais-vendidos">
                              <div class="iluminim-loading">
                                 ${ILUMINIM_UTILS.icones.loading}
                              </div>
                           </div>

                           <div class="listagem-customizada listagem-lustre-lancamentos">
                              <div class="iluminim-loading" style="display: none;"></div>
                           </div>

                           <div class="listagem-customizada listagem-lustre-pendente">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/lustre-pendente?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lustre-plafon">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/lustre-plafon?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lustre-cristal">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/lustre-cristal?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lustre-classico">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/lustre-classico?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-lustre-de-parede">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/lustre-de-parede?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>
                        
                        </div>
                  </div>
               `;

            },

            renderizar(){

               $('body').addClass('pagina-personalizada-listagens-customizadas');

               let html = this.gerarHTML();

               $('div#listagemProdutos').prepend(html);

            }
         },

         {
            paginasURL: ['/kits-led'],

            gerarHTML(){

               return `
                  <div class="listagens-customizadas">
                        <div class="listagens-customizadas-listas">
                        
                           <div class="listagem-customizada listagem-kits-especiais-refletores-led">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/holofotes-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-kits-especiais-luminarias-plafons-led">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/kit-plafon-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-kits-especiais-spots-led">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/kits-spots-led-dicroica?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-kits-especiais-lampadas-led">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/kit-lampadas-de-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-kits-especiais-espetos-led">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/kit-espetos-de-led-para-jardim?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-kits-especiais-fitas-led">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/kits-fitas-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>

                           <div class="listagem-customizada listagem-kits-especiais-acessorios-led">
                              <div class="iluminim-loading" style="display: none;"></div>
                              <a class="listagem-customizada-ver-todos" href="/kit-acessorios-led?sort=mais_vendidos">
                                    <span class="ver-todos">Ver Todos <i class="icon-list-ul"></i></span>
                              </a>
                           </div>
                        
                        </div>
                  </div>
               `;

            },

            renderizar(){

               $('body').addClass('pagina-personalizada-listagens-customizadas');

               let html = this.gerarHTML();

               $('div#listagemProdutos').prepend(html);

            }
         },

         {
            paginasURL: ['/voce-ganhou-r35-off-em-compras-acima-de-r200-use-o-cupom-led35off.-valido-para-produtos-dessa-lista-com-frete-gratis-expresso-para-todo-brasil-acima-de-r29990'],

            aoClicarBanner(){

               $(document).on('click', '.banner-cupom:not(.adicionando-cupom)', function(){

                  $('.banner-cupom').addClass('adicionando-cupom');

                  $.post('/carrinho/cupom/validar', { cupom: 'LED35OFF' } , function(e){

                     $('.banner-cupom').removeClass('adicionando-cupom');

                     let alerta = $($.parseHTML(e)).find('.alert.alert-geral');
                     alerta.find('button').remove();
               
                     if(alerta.hasClass('alert-danger')){
                           
                        alert(alerta.text().trim());
               
                     }else {
                        
                        alert('Cupom adicionado com sucesso!');
               
                     }
               
                  });

               });

            },

            setarBanner(){

               this.aoClicarBanner();

               $('.pagina-categoria #corpo .conteudo>.componente').before(`
                  <div class="banner-cupom">
                     <div class="iluminim-loading">${ILUMINIM_UTILS.icones.loading}</div>
                     <img src="https://cdn.awsli.com.br/257/257163/arquivos/banner-cupom-01-10-21-v2.png">
                  </div>
               `);

            },

            renderizar(){

               this.setarBanner();

            }
         }
      ];


      let paginaPersonalizada = PaginasPersonalizadas.filter(item => item.paginasURL.includes(window.location.pathname));

      if(paginaPersonalizada.length > 0){

         paginaPersonalizada[0].renderizar();

      }

   },

   adicionarFiltroPrecoPersonalizado(){

      if(ILUMINIM_UTILS.screen.isMobile()){
         return;
      }
      
      $('.secao-principal .coluna').append(`
         <div class="lateral outras filtro-coluna filtro-preco-personalizado">
               <div class="filtro lista borda-principal">
                  
                  <h4 class="titulo cor-secundaria">Filtro Personalizado</h4>
                  
                  <div class="conteudo">
         
                     <div class="preco-personalizado">
                              
                           <div class="preco-personalizado-bloco-1">
                              <span>de <b>R$</b></span>
                              <input type="number" placeholder="min" class="preco-minimo preco-personalizado-input">
                              <span>,00</span>
                           </div>
         
                           <div class="preco-personalizado-bloco-2">
                              <span>até <b>R$</b></span>
                              <input type="number" placeholder="max" class="preco-maximo preco-personalizado-input">
                              <span>,00</span>
                           </div>
         
                           <div class="preco-personalizado-bloco-3">
                              <button class="preco-personalizado-botao-filtrar">ok</button>
                           </div>
         
                           <div class="preco-personalizado-bloco-4">
                              <a class="limpar-filtro-preco-personalizado" href="?sort=mais_vendidos"><i class="icon-rotate-left"></i>Limpar</a>
                           </div>
         
                     </div>
         
                  </div>
               </div>
         </div>
      `);

      $('.preco-personalizado .preco-personalizado-input').keypress(function(e) {
         if(e.which == 13) {
               $('.preco-personalizado .preco-personalizado-botao-filtrar').trigger('click');
         }
      });

      
      $('.preco-personalizado .preco-personalizado-botao-filtrar').click(function(){

         let preco_minimo = $(this).parents('.preco-personalizado').find('.preco-minimo');
         let preco_maximo = $(this).parents('.preco-personalizado').find('.preco-maximo');

         if ( preco_minimo.val().length == 0 || preco_maximo.val().length == 0 ){ 
      
               alert('Preencha os campos corretamente!');
         
         }else if(parseInt(preco_maximo.val()) == 0) {

               alert('Digite um valor máximo válido.');

         }else if ( parseInt(preco_minimo.val()) >= parseInt(preco_maximo.val()) ){
         
               alert('O valor mínimo não pode ser maior que o valor máximo.');

         }else {

               var filtro = `?fq=Preco%3A${preco_minimo.val()}.00%2F${preco_maximo.val()}.00`;

               if(window.location.search !== ''){

                  var filtro = filtro.replace('?', '&');

               }
               
               let filtro_preco_storage = {
                  preco_minimo: preco_minimo.val(),
                  preco_maximo: preco_maximo.val(),
                  query: filtro
               }

               localStorage.setItem('filtro_preco_personalizado', JSON.stringify(filtro_preco_storage));

               window.location.href = window.location.href + filtro;
               
         }
      
      });
      
      
      let filtro_preco_personalizado = JSON.parse(localStorage.getItem('filtro_preco_personalizado'));

      if(filtro_preco_personalizado){

         if(window.location.href.includes(filtro_preco_personalizado.query)) {

               $('body').addClass('filtro-personalizado-ativo');
               $('.filtro-preco-personalizado .preco-personalizado .preco-minimo').val(filtro_preco_personalizado.preco_minimo);
               $('.filtro-preco-personalizado .preco-personalizado .preco-maximo').val(filtro_preco_personalizado.preco_maximo);

         } else {

               localStorage.removeItem('filtro_preco_personalizado');

         }
   
      }

   },

   moverTextoCategoria(){

      $('.secao-principal .coluna > .componente').prependTo('.secao-principal > .conteudo.span9');
      
   },

   verificarCategoriaAtiva(){

      let categoriaAcessada = window.location.pathname;
      let categoriaPrincipalJaAberta = false;

      $('.menu.lateral .menu__nivel-dois > ul > li.menu__item').each(function(){

         let alvo = $(this).children('a');
         let categoriaMenuLateral = alvo.attr('href').split('?')[0];

         if(categoriaMenuLateral == categoriaAcessada){

            alvo.addClass('menu-open');
            $(this).addClass('categoria-ativa').children('ul.menu__nivel-tres').attr('style', 'display: block;');
            $('.menu.lateral .menu__nivel-dois > ul').prepend(this);

            categoriaPrincipalJaAberta = true;

         }

      });
      
      $('.menu.lateral .menu__nivel-tres li').each(function(){
            
         let alvo = $(this).children('a');
         let categoriaMenuLateral = (alvo.attr('href') || '').split('?')[0];

         if(categoriaMenuLateral == categoriaAcessada){

            alvo.addClass('subcategoria-ativa');

         }

      });

      if(!categoriaPrincipalJaAberta){

         $('.menu.lateral .menu__nivel-tres li:not(.not-primary)').each(function(){
            
            let alvo = $(this).children('a');
            let categoriaMenuLateral = (alvo.attr('href') || '').split('?')[0];

            if(categoriaMenuLateral == categoriaAcessada){

               alvo.addClass('subcategoria-ativa');

               $(this).parents('li[data-target-sub-menu]').addClass('categoria-ativa').children('ul.menu__nivel-tres').attr('style', 'display: block;');

               $(this).parents('li[data-target-sub-menu]').children('a').addClass('menu-open');
               
               $('.menu.lateral .menu__nivel-dois > ul').prepend($(this).parents('li[data-target-sub-menu]'));

            }

         });

      }

   },

   dropDownTextoCategoria(){

      let desativarNasCategorias = ['/luminarias-plafons-led'];

      if(desativarNasCategorias.includes(window.location.pathname)){

         console.log('entrou na cond', $('.pagina-categoria #corpo .conteudo > .componente:first-child'));

         $('.pagina-categoria #corpo .conteudo > .componente:first-child').insertBefore('.avalicoes-categoria');
         return;

      } 
      
      if ($(".new__description.in__block").length > 0) {
         
         $("#show__text").click(function() {

            let textButton = $(this).text();
            
            if(textButton == 'Ler mais...'){

                  $(this).text('Fechar');

               }else{

                  $(this).text('Ler mais...');

               }
               
            $(".secondary__block").toggle();

         });

         $('#corpo .componente .interno').first().addClass('new-description');

      }else {

         let el_1 = $('#corpo .componente .interno .texto-categoria-personalizado');
         let el_2 = $('.pagina-categoria .componente .interno>h4+p');

         if(el_1.height() > 80 || el_2.height() > 80){
            
            $('#corpo .componente .interno').first().addClass('has-view-more');

         }

      }

      if(($('.pagina-categoria .componente .interno>h4+p').html() || '').trim() == ''){

         $('.pagina-categoria .componente .interno>h4+p').attr('style', 'display: none!important;');

      }

      $(document).on('click', '#corpo .componente .interno.has-view-more:not(.new-description)', function(){

         $(this).toggleClass('active');

      });

   },

   videoCategoria(){

      let VideoCategoria = {

         gerarObjeto(){

               let objeto = {

                  ["/refletores-holofotes-led"]: {
                     titulo: 'Quer ver dicas de refletores em vídeo?',
                     link: 'N5Nd0l3AKE8',
                  },
                  
               }

               return objeto[window.location.pathname];

         },

         gerarHTML(){

               let objeto = this.gerarObjeto();
            
               if(!objeto){
                  return;
               }

               let { titulo, link } = objeto;

               $('body').append(`
                  <div class="modal modal-personalizado fade modal_play_iluminim modal_midia_listagem" id="modal_midia_categoria">
                     <div class="modal-dialog">

                           <div class="modal-content">

                              <div class="modal-header">
                                 <h5 class="modal-title">${titulo}</h5>
                                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                                 </button>
                              </div>

                              <div class="modal-body">

                                 <iframe id="modal_midia_categoria" src="//youtube.com/embed/${link}?enablejsapi=1" width="100%" height="350" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                              </div>

                              <div class="modal-footer">
                                 <button type="button" class="btn btn-secondary btn-custom" data-dismiss="modal">Fechar</button>
                              </div>

                           </div>

                     </div>
                  </div>
               `);

               return `
                  <div class="video-categoria">
                     <div class="video-categoria--conteudo">
                           <div class="conteudo--titulo">${titulo}</div>
                           <div id="botao-video" class="conteudo--botao-video" data-toggle="modal" data-target="#modal_midia_categoria">
                              <div class="botao-video--icone"></div>
                              <div class="botao-video--texto">ASSISTIR VÍDEO</div>
                           </div>
                     </div>
                  </div>
               `;

         },

         renderizar(){

               let html = this.gerarHTML();

               if(!html){
                  return;
               }

               $('div#listagemProdutos').after(html);

         }

      }

      VideoCategoria.renderizar();

   },

   reviewsQuemComprou(){

      let Reviews = {

         gerarObjeto(){

               let objeto = [
                  {
                     categorias: ['/luminarias-plafons-led'],
                     utm_campaign: 'ReviewLuminaria',
                     reviews: [
                           {
                              nome: 'Rony sobre sua',
                              nome_produto: 'Luminária Plafon 18w LED Embutir Branco Frio',
                              link_produto: '/luminaria-plafon-18w-led-embutir-branco-frio-quadrado',
                              comentario: 'Veio exatamente como descrito no site, ilumina muito bem, até um pouco mais forte do que eu imaginava, acabamento muito bom e vem pronto para instalar! Ótima também por ser slim.'
                           },
                           {
                              nome: 'Yolanda sobre sua',
                              nome_produto: 'Luminária Plafon 18w LED Sobrepor Branco Frio',
                              link_produto: '/luminaria-plafon-18w-led-sobrepor-branco-frio-quadrado',
                              comentario: 'Comprei vários e todos estão funcionando, esse não foi diferente. São duráveis e bonitos. Além da instalação ser prática e rápida de se fazer. Melhor opção que encontrei na internet, sem dúvidas!'
                           },
                           {
                              nome: 'Joana sobre sua',
                              nome_produto: 'Luminária Plafon 30x30 32W LED Sobrepor Branco Frio',
                              link_produto: '/luminaria-plafon-30x30-32w-led-sobrepor-branco-frio',
                              comentario: 'Ótimo produto, superou minhas expectativas! Seu custo benefício é o melhor que encontrei, a luminosidade é alta e o preço é acessível. Instalei uma na cozinha e ficou perfeita para o local.'
                           },
                           {
                              nome: 'Maurício sobre sua',
                              nome_produto: 'Luminária Plafon 25w LED Embutir Branco Frio',
                              link_produto: '/luminaria-plafon-25w-led-embutir-branco-frio-quadrado',
                              comentario: 'Produto excelente com um lindo design, acabamento perfeito, luz forte e econômica, recomendo a todos. Sempre acabo voltando a fazer negócio com esta loja.'
                           },
                     ]
                  },
                  {
                     categorias: ['/refletores-holofotes-led'],
                     utm_campaign: 'ReviewRefletores',
                     reviews: [
                           {
                              nome: 'Flávio sobre seu',
                              nome_produto: 'Refletor Holofote MicroLED Slim 300W Branco Frio',
                              link_produto: '/refletor-holofote-micro-led-slim-300w-branco-frio',
                              comentario: 'Ótimo custo benefício! Gostei bastante do retorno que tive com esse produto, muito eficiente. Foi um bom investimento compra-lo para a minha quadra de futebol sintético. A economia no fim do mês também é notória. Recomendo!'
                           },
                           {
                              nome: 'Bruno sobre seu',
                              nome_produto: 'Refletor Holofote MicroLED 100W Multifocal Branco Frio Metálico',
                              link_produto: '/refletor-holofote-micro-led-100w-multifocal-branco-frio-metalico',
                              comentario: 'Tenho certeza que foi uma excelente aquisição, pois meus antigos refletores de vapor metálico já não atendiam mais minhas expectativas, tanto em luminosidade quanto em economia. O atendimento também foi muito bom, sempre volto a fazer negócio com essa loja. Top!'
                           },
                           {
                              nome: 'Paola sobre seu',
                              nome_produto: 'Refletor MicroLED Ultra Thin 150W Verde Black Type',
                              link_produto: '/refletor-microled-ultra-thin-150w-verde-black-type',
                              comentario: 'Ficou perfeito para iluminar o jardim do condomínio onde sou síndico. Comprei 10 unidades e foi de longe a melhor compra que fiz em custo benefício para o local. Voltarei a adquirir produtos de iluminação aqui quando for necessário.'
                           },
                           {
                              nome: 'Lúcia sobre seu',
                              nome_produto: 'Refletor Holofote MicroLED Slim 100W Branco Frio',
                              link_produto: '/refletor-holofote-microled-100w-branco-frio',
                              comentario: 'Após muito pesquisa e comparações de qualidade e preço na internet, resolvi confiar nesse modelo da Iluminim. Sem arrependimentos até então! Compra segura e produto de alto desempenho, como eu esperava, queria e precisava. Sendo assim, super recomendo!'
                           },
                     ]
                  },
                  {
                     categorias: ['/spots-led-'],
                     utm_campaign: 'ReviewSpots',
                     reviews: [
                           {
                              nome: 'Eduardo Macedo sobre seu ',
                              nome_produto: 'Spot 7W Dicróica LED Direcionável Base Branca :',
                              link_produto: '/spot-7w-dicroica-led-base-branca',
                              comentario: 'Comprei um Spot de 5w para instalar na sanca da minha sala e o resultado ficou incrível. Utilizei um ponto de luz principal e os spots para complementar a iluminação. Indico a loja, ótimo custo-benefício!'
                           },
                           {
                              nome: 'Luiza Andrade sobre seu ',
                              nome_produto: 'Spot Dicróica 3w LED Direcionável Corpo Branco',
                              link_produto: '/spot-dicroica-3w-led-direcionavel-corpo-branco',
                              comentario: 'Adquiri o spot 3w para uso embutido em móveis. A Maria Eduarda foi bem atenciosa comigo e tirou todas as minhas dúvidas sobre o produto e a cor de luz ideal para o local de instalação. Atendimento nota 10!'
                           },
                           {
                              nome: 'Júlio César sobre seu',
                              nome_produto: 'Spot Dicróica 5w LED Direcionável Corpo Branco',
                              link_produto: '/spot-dicroica-5w-led-direcionavel-corpo-branco',
                              comentario: 'Os Spots de luz da Iluminim são práticos e de qualidade excelente. São completos e não é necessário a compra de lâmpadas avulsas, pois acompanham as presilhas, o driver o o chip de led. Além disso, já vem pronto para instalar e com manual. Recomendo.'
                           },
                           {
                              nome: 'Maria Luiza Neto sobre seu',
                              nome_produto: 'Kit Trilho Eletrificado 1,5m + 3 Spot LED Cob 10W 3000K Branco',
                              link_produto: '/kit-trilho-eletrificado-1-5m-3-spot-led-cob-10w-3000k-branco',
                              comentario: 'Os spots de trilho da Iluminim são uma boa opção de decoração e iluminação. Comprei um kit de spot trilho para instalação na sala de jantar e deixou o espaço com outra cara. Achei bem prático que a empresa já vende o trilho com o spot junto, facilitando a compra!'
                           },
                     ]
                  },
                  {
                     categorias: ['/spots-led-'],
                     utm_campaign: 'ReviewFitas',
                     reviews: [
                           {
                              nome: 'Larissa sobre sua',
                              nome_produto: 'Fita de LED RGB 5050',
                              link_produto: '/fita-led-12v-5050-rgb-5-metros-ip65',
                              comentario: 'Simplesmente adorei o produto. Coloquei a Fita LED no meu quarto e é maravilhosa. Além de iluminar muito bem consigo trocar as cores pelo controle com muita facilidade. Recomendo muito esse produto e essa loja.'
                           },
                           {
                              nome: 'Simone sobre sua',
                              nome_produto: 'Fita de LED 5050 Branco Quente',
                              link_produto: '/fita-led-5050-branco-quente-5-metros-ip65-a-prova-dagua-72w',
                              comentario: 'Atendeu muito as minhas expectativas e deixou minha cozinha com uma iluminação incrível. O produto funciona que é uma beleza. Veio no prazo certo e foi entregue com muito cuidado. Certamente é um ótimo negócio.'
                           },
                           {
                              nome: 'Ivone sobre sua ',
                              nome_produto: 'Fita de LED 3528 RGB :',
                              link_produto: '/fita-led-12v-3528-rgb-5-metros-ip65',
                              comentario: 'Produto excelente e com ótimo custo benefício. Coloquei no balcão da minha loja e deu um toque bem especial visualmente falando. Fora que a funcionalidade dele é ótima, a luminosidade ótima e o preço bem acessível.'
                           },
                           {
                              nome: 'Anderson sobre sua ',
                              nome_produto: 'Fita de LED 3528 Azul',
                              link_produto: '/fita-led-12v-3528-azul-5-metros-ip65',
                              comentario: 'Ótimo produto, atingiu minhas expectativas. Além da instalação ser fácil, deu um ar completamente atmosférico no meu estúdio onde gravo vídeos. Fazer negócio com essa loja é um excelente investimento.'
                           },
                     ]
                  },
                  {
                     categorias: ['/lampadas-led'],
                     utm_campaign: 'ReviewLâmpadas',
                     reviews: [
                           {
                              nome: 'Caroline sobre sua ',
                              nome_produto: 'Lâmpada LED de Alta Potência',
                              link_produto: '/lampada-led-alta-potencia',
                              comentario: 'Eu já sabia que estava adquirindo uma luz de alta potência, mas me surpreendi muito com o produto, positivamente! Atendeu muito bem as minhas expectativas, e a lâmpada é de excelente qualidade.'
                           },
                           {
                              nome: 'Lisandro sobre sua',
                              nome_produto: 'Lâmpada LED Bulbo :',
                              link_produto: '/lampada-led-bulbo',
                              comentario: 'Gostei muito da lâmpada! Ela ilumina muito melhor que as lâmpadas convencionais. E o melhor, o produto veio no prazo e foi entregue com muito cuidado. Aprovadíssimo.'
                           },
                           {
                              nome: 'Eva sobre sua',
                              nome_produto: 'Lâmpada LED Vintage Retrô :',
                              link_produto: '/led-retro',
                              comentario: 'Coloquei elas em pendentes também adquiridos na Iluminim e ficaram sensacionais! Além de lindas, fazem uma iluminação que tornam o ambiente aconchegante e o preço é super em conta! Adorei.'
                           },
                           {
                              nome: 'Cristiano sobre sua ',
                              nome_produto: 'Lâmpada LED Tubular :',
                              link_produto: '/lampada-led-tubular',
                              comentario: 'A eficiência da lâmpada tubular é simplesmente incrível! Muito potente, econômica e ecológica. Gostei muito do investimento. Recomendo muito os produtos da Iluminim!'
                           },
                     ]
                  }
               ]

               let objetoFiltrado = objeto.filter(item=> item.categorias.includes(window.location.pathname));

               return objetoFiltrado[0];

         },

         gerarHTML(){

               let objeto = this.gerarObjeto();
            
               if(!objeto){
                  return;
               }

               let html = objeto.reviews.map(item=> {
      
                  return `
                     <div class="review-item">

                           <div class="review-icone-estrelas">
                              <i class="icon-star"></i>
                              <i class="icon-star"></i>
                              <i class="icon-star"></i>
                              <i class="icon-star"></i>
                              <i class="icon-star"></i>    
                           </div>

                           <div class="review-informacoes-nomes">
                              <span class="review-nome">${item.nome}</span>
                              <a href="${item.link_produto}">${item.nome_produto}</a>
                           </div>

                           <div class="review-comentario">${item.comentario}</div>

                     </div>
                  `;
      
               }).join('');

               return html;

         },

         renderizar(){

               let html = this.gerarHTML();

               if(!html){
                  return;
               }

               var target = $('.secao-principal .listagem .posts_blog');

               if(ILUMINIM_UTILS.screen.isMobile()){

                  var target = $('.secao-principal div#listagemProdutos');

               }

               target.after(`
                  <div class="reviews-categoria">

                     <div class="reviews-categoria-titulo">
                           <div class="reviews-categoria-titulo-texto">Reviews de quem já comprou produtos da categoria:</div>
                     </div>

                     <div class="reviews-categoria-conteudo">
                           <div class="reviews-categoria-lista carousel-target">
                              ${html}
                           </div>
                     </div>   

                  </div>
               `);

               $('.reviews-categoria .carousel-target').owlCarousel({
                  margin:15,
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
                     }
                  }
               });

         }

      }

      Reviews.renderizar();

   },

   postsBlog(){

      if(!ILUMINIM_UTILS.screen.isDesktop()){
         return;
      }


      let PostsBlog = {

         gerarObjeto(){

               let objeto = {

                  ["/refletores-holofotes-led"]: [
                     {
                           title: 'Top 5 Melhores Refletores LED em 2021',
                           img: 'https://blog.iluminim.com.br/wp-content/uploads/2020/02/top-5-melhores-refletores-led-em-2020-1-1-1280x640.jpg',
                           description: 'Você está querendo reformar aquela quadra do condomínio onde é síndico',
                           link: 'https://blog.iluminim.com.br/top-5-melhores-refletores-led/'
                     },
                     {
                           title: 'Saiba como comprar refletor de LED com segurança',
                           img: 'https://blog.iluminim.com.br/wp-content/uploads/2018/09/240229-saiba-como-comprar-refletor-de-led-com-seguranca-1280x640.jpg',
                           description: 'Se você precisa saber como comprar refletor de LED com segurança',
                           link: 'https://blog.iluminim.com.br/saiba-como-comprar-refletor-de-led-com-seguranca/'
                     }
                  ],

                  ["/luminarias-plafons-led"]: [
                     {
                           title: 'Qual luminária de LED comprar em 2021? Descubra aqui!',
                           img: 'https://blog.iluminim.com.br/wp-content/uploads/2021/02/capa1-1280x640.jpg',
                           description: 'Um dos elementos mais importantes em um projeto de decoração é a iluminação.',
                           link: 'https://blog.iluminim.com.br/qual-luminaria-de-led-comprar/'
                     },
                     {
                           title: 'Top 5 melhores luminárias plafon em 2021',
                           img: 'https://blog.iluminim.com.br/wp-content/uploads/2021/03/plafon-sobrepor-teto-parede-azul-1280x640.jpg',
                           description: 'As luminárias têm várias funções importantes: contribuem para ...',
                           link: 'https://blog.iluminim.com.br/top-5-melhores-luminarias-plafon/'
                     }
                  ],
                  
               }

               return objeto[window.location.pathname];

         },

         gerarHTML(){

               let objeto = this.gerarObjeto();
            
               if(!objeto){
                  return;
               }

               let html = objeto.map((post) => {
                  return `
                  <div class="span6">
                     <div class="img_post">
                           <img src="${post.img}" alt="${post.title}"/>
                     </div>
                     <div class="text_post">
                           <h2>${post.title}</h2>
                           <p>${post.description}</p>
                           <a href="${post.link}" target="_blank" rel="noopener">Continue lendo...</a>
                     </div>
                  </div>
                  `
               }).join('');

               return html;

         },

         renderizar(){

               let html = this.gerarHTML();

               if(!html){
                  return;
               }

               $('div#listagemProdutos .listagem-linha:last-child').after(`
                  <div class="posts_blog">
                     <h2>Confira o que temos para te ajudar</h2>
                     <div class="content_posts">
                           ${html}
                     </div>
                  </div>
               `);

         }

      }

      PostsBlog.renderizar();

   },

   palavrasMaisBuscadas(){

      if(ILUMINIM_UTILS.screen.isMobile()){
         return;                        
      }

      let PalavrasMaisBuscadas = {

         gerarObjeto(){
      
               let config = {

                  ['/spot-led-trilho-eletrificado']: [
                     { palavra: 'spot trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'trilho com spots', link: '/kit-trilho-eletrificado-1-5m-3-spot-led-10w-branco-quente-preto' },
                     { palavra: 'spot de trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'spot para trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'trilho de spot', link: '/buscar?q=trilho+de+spot' },
                     { palavra: 'luminaria spot trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'spot para trilho eletrificado', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'spot trilho 3 lampadas', link: '/kit-trilho-eletrificado-1-5m-3-spot-led-10w-branco-quente-preto' },
                     { palavra: 'trilho 4 spots', link: '/buscar?q=trilho+4+spots' },
                     { palavra: 'spot trilho preto', link: '/buscar?q=spot+trilho+preto' },
                     { palavra: 'spot trilho 2 lampadas', link: '/kit-trilho-eletrificado-1m-2-spot-led-10w-branco-quente-preto' },
                     { palavra: 'trilho spot sala', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'iluminação com trilhos e spots', link: 'https://blog.iluminim.com.br/spot-de-trilho-o-que-e-e-quando-usa-lo-na-iluminacao/', blank: true },
                     { palavra: 'spot trilho branco', link: '/buscar?q=spot+trilho+branco' },
                     { palavra: 'trilho spot cozinha', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'trilhos com spots direcionáveis', link: '/kit-trilho-eletrificado-1-5m-3-spot-led-10w-branco-quente-preto' },
                     { palavra: 'lustre spot trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'trilho branco com spots', link: '/kit-trilho-eletrificado-1m-2-spot-led-18w-branco-quente-branco' },
                     { palavra: 'spot trilho 10w', link: '/buscar?q=spot+trilho+10w' },
                     { palavra: 'lampada led spot trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'spot dicroica trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'spot trilho preço', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'spot trilho teto', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'trilho spot banheiro', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'trilho spot 1m', link: '/trilho-eletrificado-para-spot-led-1-metro-bivolt-preto' },
                     { palavra: 'como instalar spot de trilho', link: 'https://blog.iluminim.com.br/spot-de-trilho-o-que-e-e-quando-usa-lo-na-iluminacao/', blank: true },
                     { palavra: 'spot branco trilho', link: '/buscar?q=spot+branco+trilho' },
                  ],
      
                  ['/spot-led-embutir']: [
                     { palavra: 'spot led embutir', link: '/spot-led-embutir' },
                     { palavra: 'spot de embutir', link: '/spot-led-embutir' },
                     { palavra: 'spot led embutir quadrado', link: '/spot-led-quadrado' },
                     { palavra: 'spot led embutir redondo', link: '/spot-led-redondo' },
                     { palavra: 'spot de embutir preto', link: '/spot-led-colorido-?sort=mais_vendidos' },
                     { palavra: 'mini spot led embutir', link: '/mini-spot-led' },
                     { palavra: 'spot cristal embutir', link: '/spot-led-cristal' },
                     { palavra: 'spot dicroica embutir', link: '/buscar?q=spot+dicroica+embutir' },
                     { palavra: 'spot led embutir 5w', link: '/spot-led-5w' },
                     { palavra: 'spot led embutir redondo 12w', link: '/spot-led-12w' },
                     { palavra: 'spot led embutir gesso', link: '/spot-led-embutir' },
                     { palavra: 'spot led embutir redondo 3w', link: '/spot-led-3w' },
                     { palavra: 'spot led embutir redondo 7w', link: '/spot-led-7w' },
                     { palavra: 'kit spot led embutir', link: '/kit-spot-dicroica-led?sort=mais_vendidos' },
                     { palavra: 'lampada para spot de embutir', link: '/buscar?q=spot+lampada+dicroica+embutir' },
                     { palavra: 'luminaria spot de embutir', link: '/spot-led-embutir' },
                     { palavra: 'spot led embutir quadrado 5w', link: '/spot-led-5w' },
                     { palavra: 'spot lampada dicroica embutir', link: '/buscar?q=spot+lampada+dicroica+embutir' },
                     { palavra: 'spot led embutir quadrado preto', link: '/buscar?q=spot+led+embutir+quadrado+preto' },
                     { palavra: 'tamanho de spot de embutir', link: '/spot-led-embutir' },
                     { palavra: 'kit spot embutir', link: '/kit-spot-dicroica-led?sort=mais_vendidos' },
                     { palavra: 'luminaria tipo spot de embutir', link: '/spot-led-embutir' },
                     { palavra: 'spot chao embutir', link: '/balizador-led?sort=mais_vendidos' },
                     { palavra: 'spot embutir direcionavel', link: '/buscar?q=spot+embutir+direcionavel' },
                  ],
      
                  ['/lampada-led-tubular']: [
                     { palavra: 'tubular led sobrepor', link: '/lampada-led-tubular?sort=%2Bpreco' },
                     { palavra: 'Lampada LED Tubular T8 18w - 1,20m', link: '/lampada-led-tubular-1-20m?sort=mais_vendidos' },
                     { palavra: 'Tubular LED Sobrepor Completa 36W', link: '/tubular-led-sobrepor-completa-36w-branco-frio' },
                     { palavra: 'lampada led tubular 40w', link: '/tubular-led-sobrepor-completa-36w-1.20m-branco-quente' },
                     { palavra: 'lampada led tubular 18w', link: '/Lampada-led-tubular-t8-18w-120m-vermelha' },
                     { palavra: 'tubular t5', link: '/lampada-led-tubular-t5-18w-120m-branco-neutro-inmetro' },
                     { palavra: 'tubular t8', link: '/lampada-led-tubular-t8-18w-120m-amarelo-ambar-inmetro' },
                     { palavra: 'Kit tubular', link: '/kit-5-tubular-led-sobrepor-completa-36w-120m-branco-quente' },
                     { palavra: 'tubular amarela', link: '/tubular-led-sobrepor-completa-20w-60cm-branco-quente' },
                     { palavra: 'Lampada LED Tubular HO 65w 2,40m T8 Branco Frio | Inmetro', link: '/lampada-led-tubular-ho-65w-240m-t8-branco-frio-inmetro' },
                     { palavra: 'tubular 1,20', link: '/lampada-led-tubular-1-20m?sort=mais_vendidos' },
                     { palavra: 'tubular branco neutro', link: '/lampada-led-tubular-t5-18w-120m-branco-neutro-inmetro' },
                     { palavra: 'Lampada LED Tubular T8 18w', link: '/lampada-led-tubular-t8-18w-120m-amarelo-ambar-inmetro' },
                     { palavra: 'tubular 60cm', link: '/lampada-led-tubular-60cm?sort=mais_vendidos' },
                     { palavra: 'tubular azul', link: '/lampada-led-tubular-t8-10w-60cm-azul-inmetro' },
                     { palavra: 'Kit 20 Tubular LED Sobrepor Completa 36W 1,20m Branco Frio', link: '/kit-20-tubular-led-sobrepor-completa-36w-120m-branco-frio' }
                  ],
      
                  ['/led-automotivo']: [
                     { palavra: 'lampada de led automotiva', link: '/led-automotivo?sort=mais_vendidos' },
                     { palavra: 'lampadas automotivas', link: '/led-automotivo?sort=mais_vendidos' },
                     { palavra: 'lampada led 12v automotiva', link: '/buscar?q=lampada+led+12v+automotiva' },
                     { palavra: 'lampada led automotiva para farol', link: '/led-automotivo?sort=mais_vendidos' },
                     { palavra: 'melhor lampada led automotiva', link: '/led-automotivo?sort=mais_vendidos' },
                     { palavra: 'kit lampada led automotiva', link: '/buscar?q=kit+lampada+led+automotiva' },
                     { palavra: 'lampada led automotiva h4', link: '/buscar?q=lampada+h4' },
                     { palavra: 'lampadas automotivas atacado', link: 'https://www.iluminimatacado.com.br/led-automotivo?sort=mais_vendidos', blank: true },
                     { palavra: 'distribuidora de lampadas automotivas', link: 'https://www.iluminimatacado.com.br/led-automotivo?sort=mais_vendidos', blank: true },
                     { palavra: 'lampada t5 automotiva', link: '/buscar?q=lampada+t5+automotiva' },
                     { palavra: 'lampada de led automotiva 2 polos', link: '/buscar?q=lampada+de+led+automotiva+2+polos' },
                     { palavra: 'lampada led automotiva amarela', link: '/buscar?q=lampada+led+automotiva+amarela' },
                     { palavra: 'lampadas automotivas super led', link: '/buscar?q=lampadas+automotivas+super+led' },
                  ],
      
                  ['/fita-led-rgb']: [
                     { palavra: 'fita led rgb', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'fita led rgb 5050', link: '/buscar?q=fita+led+rgb+5050' },
                     { palavra: 'fita de led rgb com controle', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'fita led rgb 10m', link: '/fita-led-rgb-10-metros?sort=mais_vendidos' },
                     { palavra: 'fita led rgb 6803', link: '/fita-led-digital-rgb-colorida-6803-5-metros-ip65-com-fonte' },
                     { palavra: 'fita led rgb 5m', link: '/fita-led-rgb-5-metros?sort=mais_vendidos' },
                     { palavra: 'fita led rgb 15m', link: '/fita-led-rgb-15-metros?sort=mais_vendidos' },
                     { palavra: 'fita de led rgb 5 metros', link: '/fita-led-rgb-5-metros?sort=mais_vendidos' },
                     { palavra: 'fita de led rgb com controle e fonte', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'fita led rgb para pc', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'como instalar fita de led rgb', link: 'https://blog.iluminim.com.br/fita-led-tire-todas-suas-duvidas-aqui/', blank: true },
                     { palavra: 'fita led rgb 5050 10m', link: '/kit-10-metros-fita-led-rgb-colorida-5050' },
                     { palavra: 'fita led rgb 5050 5m', link: '/fita-led-12v-5050-rgb-5-metros-ip65' },
                     { palavra: 'fita led rgb 20 metros', link: '/fita-led-rgb-20-metros?sort=mais_vendidos' },
                     { palavra: 'fita led rgb 3528', link: '/fita-led-3528-rgb-5-metros-ip20-24w' },
                     { palavra: 'emenda fita led rgb', link: '/buscar?q=emenda+fita+led+rgb' },
                     { palavra: 'fita led rgb quarto', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'controlador fita led rgb', link: '/buscar?q=controlador+fita+led+rgb' },
                     { palavra: 'fita led rgb 5050 15m', link: '/fita-led-rgb-5050-colorida-15-metros-com-fonte' },
                     { palavra: 'fita led rgb com fonte', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'fita led rgb 5050 colorida', link: '/buscar?q=fita+led+rgb+5050+colorida' },
                     { palavra: 'fita led rgb para mesa', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'kit fita led rgb', link: '/buscar?q=kit+fita+led+rgb' },
                     { palavra: 'adaptador fita led rgb', link: '/conectores-led?sort=mais_vendidos' },
                     { palavra: 'fita de led rgb 30 metros', link: '/fita-led-rgb-30-metros?sort=mais_vendidos' },
                     { palavra: 'fita de led rgb para gabinete', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'fita led rgb rolo', link: '/fita-led-rgb?sort=mais_vendidos' },
                     { palavra: 'amplificador de fita led rgb', link: '/amplificador-fita-led-rgb' },
                  ],
      
                  ['/fita-led-branco-quente']: [
                     { palavra: 'fita de led branco quente', link: '/fita-led-branco-quente?sort=mais_vendidos' },
                     { palavra: 'fita de led branco quente com fonte', link: '/buscar?q=fita+de+led+branco+quente+com+fonte' },
                     { palavra: 'fita led 5050 branco quente', link: '/buscar?q=fita+led+5050+branco+quente' },
                     { palavra: 'fita de led 3528 branco quente', link: '/buscar?q=fita+led+3528+branco+quente' },
                     { palavra: 'fita de led branco quente 20 metros', link: '/fita-led-branco-quente-20-metros?sort=mais_vendidos' },
                     { palavra: 'fita de led branco quente com controle', link: '/fita-led-branco-quente?sort=mais_vendidos' },
                     { palavra: 'fita de led 12v branco quente', link: '/buscar?q=fita+de+led+12v+branco+quente' },
                     { palavra: 'fita de led branco quente 5050 com fonte', link: '/fita-led-5050-branco-quente-5-metros-com-fonte-corregador-ip65-a-prova-dagua-72w' },
                     { palavra: 'fita led 220v branco quente', link: '/fita-led-branco-quente?sort=mais_vendidos' },
                     { palavra: 'fita de led branco quente 5m', link: '/fita-led-branco-quente-5-metros?sort=mais_vendidos' },
                     { palavra: 'fita de led branco quente 2700k', link: '/fita-led-branco-quente?sort=mais_vendidos' },
                     { palavra: 'fita de led branco quente 3000k', link: '/fita-led-branco-quente?sort=mais_vendidos' },
                     { palavra: 'fita led 10m branco quente', link: '/fita-led-branco-quente-10-metros?sort=mais_vendidos' },
                     { palavra: 'fita led 110v branco quente', link: '/fita-led-branco-quente?sort=mais_vendidos' },
                  ],
      
                  ['/fita-led-branca']: [
                     { palavra: 'fita de led branca fria', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'fita de led branco frio', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'fita led 5050 branco frio', link: '/buscar?q=fita+led+5050+branco+frio' },
                     { palavra: 'fita de led branca fria 220v', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'fita de led branca fria 110v', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'fita led branco frio com fonte', link: '/buscar?q=fita+led+branco+frio+com+fonte' },
                     { palavra: 'fita super led branco frio', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'fita led 5050 branco frio 12v', link: '/buscar?q=fita+led+5050+branco+frio+12v' },
                     { palavra: 'fita de led branca fria 10m', link: '/fita-led-branco-frio-10-metros?sort=mais_vendidos' },
                     { palavra: 'fita led branco frio 6500k', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'fita de led 5050 branco frio 110v', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'fita de led 5050 branco frio com fonte', link: '/buscar?q=fita+de+led+5050+branco+frio+com+fonte' },
                     { palavra: '3528 fita led branco frio', link: '/buscar?q=3528+fita+led+branco+frio' },
                     { palavra: 'como emendar fita de led branco frio', link: 'https://blog.iluminim.com.br/fita-led-tire-todas-suas-duvidas-aqui/', blank: true },
                     { palavra: 'como ligar fita de led branco frio', link: 'https://blog.iluminim.com.br/fita-led-tire-todas-suas-duvidas-aqui/', blank: true },
                     { palavra: 'comprar fita led fria branca 15mts', link: '/fita-led-branco-frio-15-metros?sort=mais_vendidos' },
                  ],
      
                  ["/refletores-de-led"]: [
                     { palavra: 'refletor 100w', link: '/refletor-led-100w' },
                     { palavra: 'refletor led 30w', link: '/refletor-led-30w' },
                     { palavra: 'refletor solar', link: '/refletor-led-solar?sort=mais_vendidos' },
                     { palavra: 'Refletor 200w', link: '/refletor-led-200w' },
                     { palavra: 'Refletor 50w', link: '/refletor-led-50w' },
                     { palavra: 'refletor rgb', link: '/refletor-micro-led-ultra-thin-rgb' },
                     { palavra: 'Refletor verde', link: '/refletor-micro-led-smd-verde' },
                     { palavra: 'refletor 300w', link: '/refletor-led-300w' },
                     { palavra: 'Refletor Holofote MicroLED Slim 100W Branco Frio', link: '/refletor-holofote-microled-100w-branco-frio' },
                     { palavra: 'Refletor Holofote MicroLED Slim 200W Branco Frio', link: '/refletor-micro-led-slim-200w-branco-frio' },
                     { palavra: 'refletor 400w', link: '/refletor-led-400w' },
                     { palavra: 'Kit refletor', link: '/holofotes-led' },
                     { palavra: 'refletor branco quente', link: '/refletor-micro-led-slim-branco-quente' },
                     { palavra: 'Refletor 20w', link: '/refletor-led-20w' },
                     { palavra: 'Refletor Holofote MicroLED Slim 50W Branco Frio', link: '/refletor-holofote-microled-slim-50w-branco-frio-ip66' },
                     { palavra: 'refletor holofote', link: '/refletores-de-led' },
                     { palavra: 'refletor branco frio', link: '/refletor-micro-led-slim-branco-frio' },
                     { palavra: 'refletor com sensor', link: '/refletor-micro-led-com-sensor-de-presenca?sort=mais_vendidos' }
                  ],
      
                  ["/luminarias-led"]: [
                     { palavra: 'luminaria plafon', link: '/plafon-led', },
                     { palavra: 'luminaria de mesa', link: '/luminaria-de-mesa', },
                     { palavra: 'luminaria solar', link: '/luminaria-solar-led?sort=mais_vendidos', },
                     { palavra: 'luminaria sobrepor', link: '/plafon-led-sobrepor?sort=mais_vendidos', },
                     { palavra: 'Luminaria pendente', link: '/pendente?sort=mais_vendidos', },
                     { palavra: 'luminaria de emergencia', link: '/luminaria-emergencia-led?sort=mais_vendidos', },
                     { palavra: 'luminaria tubular', link: '/lampada-led-tubular?sort=mais_vendidos', },
                     { palavra: 'luminaria externa', link: '/arandela-externa-led?sort=mais_vendidos', },
                     { palavra: 'luminaria publica', link: '/luminarias-publicas-led?sort=mais_vendidos', },
                     { palavra: 'luminaria de embutir', link: '/plafon-led-embutir?sort=mais_vendidos', },
                     { palavra: 'luminaria retangular', link: '/plafon-led-embutir-retangular?sort=mais_vendidos', },
                     { palavra: 'luminaria industrial', link: '/luminaria-led-industrial-highbay?sort=mais_vendidos', },
                     { palavra: 'luminaria tartaruga', link: '/arandela-led?sort=mais_vendidos', },
                     { palavra: 'luminaria parede', link: '/arandela-externa-led?sort=mais_vendidos', },
                     { palavra: 'luminaria de piso', link: '/balizador-led?sort=mais_vendidos', },
                     { palavra: 'luminaria linear', link: '/luminaria-led-18w-linear-retangular-de-sobrepor-60cm', },
                     { palavra: 'luminaria plafon 25w', link: '/plafon-led-25w?sort=mais_vendidos', },
                     { palavra: 'luminaria plafon 18w', link: '/plafon-led-18w?sort=mais_vendidos', },
                     { palavra: 'luminaria calha', link: '/luminaria-led-18w-linear-retangular-de-sobrepor-60cm', },
                     { palavra: 'luminaria cozinha', link: '/plafon-led?sort=mais_vendidos', },
                     { palavra: 'luminaria de chao', link: '/balizador-led?sort=mais_vendidos', },
                     { palavra: 'luminaria plafon embutir', link: '/plafon-led-embutir?sort=mais_vendidos', },
                     { palavra: 'kit luminaria', link: '/kit-plafon?sort=mais_vendidos', },
                     { palavra: 'luminaria 30x30', link: '/kit-5-luminaria-plafon-30x30-32w-led-sobrepor-branco-frio', },
                     { palavra: 'luminaria borda infinita', link: '/plafon-led-borda-infinita?sort=mais_vendidos', },
                     { palavra: 'luminaria 120', link: '/plafon-led-embutir-retangular?sort=mais_vendidos', },
                     { palavra: 'luminaria 40x40', link: '/luminaria-plafon-40x40-32w-led-sobrepor-branco-frio', },
                     { palavra: 'luminaria articulada', link: '/luminaria-de-mesa' },
                  ],
                  
                  ["/plafon-led"]: [
                     { palavra: 'plafon 25w', link: '/plafon-led-25w' },
                     { palavra: 'plafon 18w', link: '/plafon-led-18w' },
                     { palavra: 'plafon 12w', link: '/plafon-led-12w' },
                     { palavra: 'Plafon sobrepor', link: '/plafon-led-sobrepor' },
                     { palavra: 'plafon embutir', link: '/plafon-led-embutir' },
                     { palavra: 'plafon preto', link: '/plafon-led-colorido?sort=mais_vendidos' },
                     { palavra: 'Luminária Plafon 25w LED Sobrepor Branco Frio', link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado' },
                     { palavra: 'plafon retangular', link: '/plafon-led-sobrepor-retangular?sort=mais_vendidos' },
                     { palavra: 'plafon 40x40', link: '/luminaria-plafon-40x40-42w-led-sobrepor-branco-frio' },
                     { palavra: 'Plafon 30x30', link: '/luminaria-plafon-30x30-32w-led-sobrepor-branco-frio' },
                     { palavra: 'Luminária Plafon 25w LED Embutir Branco Frio', link: '/luminaria-plafon-25w-led-embutir-branco-frio-quadrado' },
                     { palavra: 'Luminária Plafon 18w LED Embutir Branco Frio', link: '/luminaria-plafon-18w-led-embutir-branco-frio-quadrado' },
                     { palavra: 'Kit plafon', link: '/kit-plafon' },
                     { palavra: 'plafon 60x60', link: '/luminaria-plafon-60x60-48w-led-sobrepor-branco-neutro-borda-branca' },
                     { palavra: 'Plafon redondo', link: '/plafon-led-sobrepor-redondo?sort=mais_vendidos' },
                     { palavra: 'Luminária Plafon 18w LED Sobrepor Branco Frio', link: '/luminaria-plafon-18w-led-sobrepor-branco-frio-quadrado' },
                     { palavra: 'plafon 36w', link: '/plafon-led-36w' },
                     { palavra: 'plafon 6w', link: '/plafon-led-6w' },
                     { palavra: 'plafon 24w', link: '/plafon-led-25w' },
                     { palavra: 'plafon borda infinita', link: '/plafon-led-borda-infinita?sort=mais_vendidos' },
                     { palavra: 'plafon branco quente', link: '/luminaria-plafon-18w-led-embutir-branco-quente-quadrado' },
                     { palavra: 'plafon branco neutro', link: '/luminaria-plafon-25w-led-embutir-branco-neutro-quadrado' },
                     { palavra: 'Luminária Plafon 25w LED Embutir Branco Neutro', link: '/luminaria-plafon-25w-led-embutir-branco-neutro-quadrado' },
                     { palavra: 'plafon sobrepor preto', link: '/luminaria-plafon-18w-led-sobrepor-quadrado-branco-frio-preto' },
                     { palavra: 'Plafon sobrepor 25w', link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado' },
                     { palavra: 'Luminária Plafon 12w LED Sobrepor Branco Frio', link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado' },
                     { palavra: 'plafon 20x20', link: '/luminaria-plafon-12w-led-sobrepor-branco-neutro-quadrado' },
                     { palavra: 'plafon 25w sobrepor', link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado' },
                     { palavra: 'Kit 5 Luminária Plafon LED 25w Embutir Branco Frio', link: '/kit-5-luminaria-plafon-25w-led-sobrepor-quadrado-branco-frio' },
                     { palavra: 'plafon 30x120', link: '/luminaria-plafon-30x120-48w-led-embutir-branco-quente' },
                     { palavra: 'plafon 25w embutir', link: '/luminaria-plafon-25w-led-embutir-branco-neutro-quadrado' },
                     { palavra: 'plafon neutro', link: '/luminaria-plafon-25w-led-embutir-branco-neutro-quadrado' },
                     { palavra: 'Plafon 18w embutir', link: '/plafon-led-18w' },
                     { palavra: 'Plafon 18w sobrepor', link: '/plafon-led-18w' },
                     { palavra: 'plafon 30x60', link: '/luminaria-plafon-30x60-41w-led-embutir-branco-frio-borda-branca' }
                  ],
      
                  ["/spots"]: [
                     { palavra: 'spot led 7w', link: '/spot-led-7w' },
                     { palavra: 'spot led 5w', link: '/spot-led-5w' },
                     { palavra: 'spot led 3w', link: '/spot-led-3w' },
                     { palavra: 'spot sobrepor', link: '/spot-led-sobrepor' },
                     { palavra: 'Spot trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'Kit spot', link: '/kits-spots-led-dicroica' },
                     { palavra: 'spot duplo', link: '/kit-trilho-eletrificado-1m-2-spot-led-20w-branco-quente-preto' },
                     { palavra: 'spot embutir', link: '/spot-led-embutir' },
                     { palavra: 'spot preto', link: '/spot-led-colorido-' },
                     { palavra: 'spot par 20', link: '/lampada-led-par20-7w-e27-bivolt-branco-neutro-inmetro' },
                     { palavra: 'mini spot', link: '/mini-spot-led-quadrado' },
                     { palavra: 'spot branco quente', link: '/spot-led-smd-7w-redondo-branco-quente' },
                     { palavra: 'spot dicroica', link: '/spot-led-quadrado' },
                     { palavra: 'trilho spot', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'spot balizador', link: '/balizador-led?sort=mais_vendidos' },
                     { palavra: 'Spot recuado', link: '/spot-led-recuado' },
                     { palavra: 'spot direcionavel', link: '/spot-dicroica-3w-led-direcionavel-corpo-preto' },
                     { palavra: 'spot 12w', link: '/spot-led-12w' },
                     { palavra: 'spot ar111', link: '/lampada-ar111-led-11w-bivolt-gu10-amarela' },
                     { palavra: 'spot ar70', link: '/lampada-led-ar70-7w-gu10-branco-frio' },
                     { palavra: 'spot led quadrado', link: '/spot-led-quadrado?sort=mais_vendidos' },
                     { palavra: 'trilho 4 spots', link: '/kit-trilho-eletrificado-2m-4-spot-led-10w-branco-quente-preto' },
                     { palavra: 'Spot branco frio', link: '/spot-led-smd-5w-redondo-branco-frio' },
                     { palavra: 'Spot 9w', link: '/spot-led-9w' },
                     { palavra: 'spot jardim', link: '/balizador-led-para-jardim?sort=mais_vendidos' },
                     { palavra: 'spot 10w', link: '/spot-led-10w?sort=mais_vendidos' }
                  ],
      
                  ["/fita-de-led"]: [
                     { palavra: 'fita led rgb', link: '/fita-led-rgb' },
                     { palavra: 'Fita led colorida', link: '/fita-led-rgb' },
                     { palavra: 'fita led 5050', link: '/kit-fitas-led-5050' },
                     { palavra: 'Fita led branco quente', link: '/fita-led-branco-quente' },
                     { palavra: 'Fita led branca', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'Fita led branco frio', link: '/fita-led-branca?sort=mais_vendidos' },
                     { palavra: 'conector fita led', link: '/conectores-led?sort=mais_vendidos' },
                     { palavra: 'Fonte fita led', link: '/fonte-convencional?sort=mais_vendidos' },
                     { palavra: 'Fita led 5050 branco frio', link: '/fita-led-branca' },
                     { palavra: 'Fita led amarela', link: '/fita-led-branco-quente' },
                     { palavra: 'Fita led rgb 5050', link: '/fita-led-rgb-colorida-5050-5-metros-com-fonte' },
                     { palavra: 'Fita led azul', link: '/fita-led-azul?sort=mais_vendidos' },
                     { palavra: 'emenda fita led', link: '/emenda-para-fita-de-led?sort=mais_vendidos' },
                     { palavra: 'Fita led 5 metros', link: '/kit-fitas-led-5-metros' },
                     { palavra: 'Fita led branco morno', link: '/fita-led-branco-morno' },
                     { palavra: 'fita 100 metros', link: '/kit-fitas-led-25-metros' },
                     { palavra: 'Fita led 10 metros', link: '/kit-fitas-led-10-metros' },
                     { palavra: 'fita led 6803', link: '/fita-led-digital-rgb-colorida-6803-5-metros-ip65-com-fonte' },
                     { palavra: 'Kit fita led', link: '/kit-fita-led' },
                     { palavra: 'fita led 3528', link: '/kit-fitas-led-3528' },
                     { palavra: 'Fita LED RGB Colorida 3528 5 metros com Fonte', link: '/fita-led-rgb-colorida-3528-5-metros-com-fonte' },
                     { palavra: 'Fita led com controle', link: '/fita-de-led?sort=mais_vendidos' },
                     { palavra: 'fita led 20 metros', link: '/kit-fitas-led-20-metros' },
                     { palavra: 'fita de led com fonte', link: '/kit-fita-led' },
                     { palavra: 'Fita led 3 metros', link: '/kit-fitas-led-3-metros' },
                     { palavra: 'Fita led 2 metros', link: '/kit-fitas-led-2-metros' },
                     { palavra: 'Fita led 15 metros', link: '/kit-fitas-led-15-metros' },
                     { palavra: 'Fita led 1 metro', link: '/kit-fitas-led-1-metro' },
                     { palavra: 'Fita LED Branco Quente 3528 5 metros com Fonte', link: '/fita-led-branco-quente-3528-5-metros-com-fonte' }
                  ],
      
                  ["/lampada-led"]: [
                     { palavra: 'lampada led tubular', link: '/lampada-led-tubular?sort=mais_vendidos' },
                     { palavra: 'lampada led bulbo', link: '/lampada-led-bulbo?sort=mais_vendidos' },
                     { palavra: 'lampada led 15w', link: '/lampada-led-15w' },
                     { palavra: 'lampada led 20w', link: '/lampada-led-20w' },
                     { palavra: 'lampada led amarela', link: '/buscar?q=lampada+branco+quente' },
                     { palavra: 'lampada led 12w', link: '/lampada-led-12w' },
                     { palavra: 'lampada led 9w', link: '/lampada-led-9w' },
                     { palavra: 'kit lampada led', link: '/kit-lampadas-de-led' },
                     { palavra: 'lampada led bluetooth', link: '/lampada-led-12w-rgb-com-caixa-de-som-bluetooth-e-controle-remoto' },
                     { palavra: 'lampada inteligente', link: '/lampada-led-bulbo-10w-rgb-bivolt-smart-compativel-com-alexa-elgin' },
                     { palavra: 'lampada camera', link: '/lampada-led-12w-camera-wifi-panoramica-360' },
                     { palavra: 'lampada espiã', link: '/lampada-led-12w-camera-wifi-panoramica-360' },
                     { palavra: 'lampada de filamento', link: '/led-retro?sort=mais_vendidos' },
                     { palavra: 'lampada solar', link: '/luminaria-solar-led-sensor-de-movimento-8-leds' },
                     { palavra: 'lampada smart', link: '/lampada-led-bulbo-10w-rgb-bivolt-smart-compativel-com-alexa-elgin' },
                     { palavra: 'lampada dicroica', link: '/lampada-dicroica' },
                     { palavra: 'lampada retro', link: '/led-retro?sort=mais_vendidos' },
                     { palavra: 'lampada e27', link: '/lampada-led-e27' },
                     { palavra: 'lampada wifi', link: '/lampada-led-bulbo-10w-rgb-bivolt-smart-compativel-com-alexa-elgin' },
                     { palavra: 'bocal de lampada', link: '/soquete-led?sort=mais_vendidos' },
                     { palavra: 'lampada rgb', link: '/lampada-led-rgb' },
                     { palavra: 'lampadas decorativas', link: '/lampada-led-colorida' },
                     { palavra: 'lampada colorida', link: '/lampada-led-colorida' },
                     { palavra: 'lampada com sensor de presença', link: '/sensor-de-presenca?sort=mais_vendidos' },
                     { palavra: 'varal de lampadas', link: '/varal-de-lampadas-5-metros-iluminacao-externa-preto' },
                     { palavra: 'lampada led quadrada', link: '/spot-led-quadrado?sort=mais_vendidos' },
                     { palavra: 'lampada led automotiva', link: '/led-automotivo?sort=mais_vendidos' },
                     { palavra: 'lampada de emergencia', link: '/luminaria-emergencia-led?sort=mais_vendidos' }
                  ],
      
                  ["/acessorios-para-leds"]: [
                     {
                           "palavra": "filtro de linha",
                           "link": "/filtro-de-linha-6-tomadas-com-disjuntor"
                     },
                     {
                           "palavra": "sensor de presença",
                           "link": "/sensor-de-presenca?sort=mais_vendidos"
                     },
                     {
                           "palavra": "cabo coaxial",
                           "link": "/cabo-de-energia?sort=mais_vendidos"
                     },
                     {
                           "palavra": "extensão tomada",
                           "link": "/interruptores-tomadas-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "dimmer",
                           "link": "/dimmer-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "tomada dupla",
                           "link": "/conjunto-tomada-distanciadas-2pt-de-embutir-10a-modular"
                     },
                     {
                           "palavra": "espelho de tomada",
                           "link": "/conjunto-placa-para-1-interruptor-1-tomada"
                     },
                     {
                           "palavra": "soquete e27",
                           "link": "/soquete-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "soquete para lampada",
                           "link": "/soquete-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "lampada com sensor de presença",
                           "link": "/sensor-presenca-soquete-e27-automatico"
                     },
                     {
                           "palavra": "tomada 20 amperes",
                           "link": "/conjunto-tomada-2pt-de-embutir-20a-modular"
                     },
                     {
                           "palavra": "interruptor com tomada",
                           "link": "/conjunto-interruptor-1-tecla-simples-tomada-20a-modular"
                     },
                     {
                           "palavra": "plug de tomada",
                           "link": "/adaptador-soquete-lampada-led-e27-com-tomada-plug-bipino"
                     },
                     {
                           "palavra": "rele fotoeletrico",
                           "link": "/rele-fotoeletrico?sort=mais_vendidos"
                     },
                     {
                           "palavra": "regua tomada",
                           "link": "/filtro-de-linha-6-tomadas-com-disjuntor"
                     },
                     {
                           "palavra": "tomada industrial",
                           "link": "/interruptores-tomadas-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "tomada preta",
                           "link": "/interruptores-tomadas-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "tomada rj45",
                           "link": "/interruptores-tomadas-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "fonte para fita de led",
                           "link": "/fonte-convencional?sort=mais_vendidos"
                     },
                     {
                           "palavra": "soquete g9",
                           "link": "/soquete-lampada-led-halopin-g9"
                     },
                     {
                           "palavra": "dimmer para led",
                           "link": "/dimmer-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "soquete gu10",
                           "link": "/soquete-lampada-led-GU10"
                     },
                     {
                           "palavra": "fonte para led",
                           "link": "/fonte-convencional?sort=mais_vendidos"
                     },
                     {
                           "palavra": "conector fita led",
                           "link": "/conectores-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "chip led 50w",
                           "link": "/chip-de-refletor-50w-branco-frio"
                     },
                     {
                           "palavra": "emenda fita led",
                           "link": "/emenda-para-fita-de-led?sort=mais_vendidos"
                     },
                     {
                           "palavra": "led controle remoto",
                           "link": "/controles?sort=mais_vendidos"
                     },
                     {
                           "palavra": "chip de led",
                           "link": "/chip-led?sort=mais_vendidos"
                     }
                  ],
      
                  ["/pendente"]: [
                     { palavra: 'Lustre pendente', link: '/lustre-pendente?sort=ultimos_produtos' },
                     { palavra: 'Pendente aramado', link: '/pendente-aramado?sort=mais_vendidos' },
                     { palavra: 'Pendente preto', link: '/pendente-cone-preto-e27' },
                     { palavra: 'Pendente cristal', link: '/pendente-cristal-bolhas-led-7w-30cm' },
                     { palavra: 'Pendente madeira', link: '/pendente-de-madeira?sort=mais_vendidos' },
                     { palavra: 'Kit pendente', link: '/kit-pendentes?sort=mais_vendidos' },
                     { palavra: 'pendente retangular', link: '/pendente-quadrado?sort=mais_vendidos' },
                     { palavra: 'pendente dourado', link: '/pendente-fluire-metal-led-dourado' },
                     { palavra: 'pendente industrial', link: '/pendente-industrial?sort=mais_vendidos' },
                     { palavra: 'Pendente duplo', link: '/pendente-perola-arco-preto-fosco-g45-2-lampadas' },
                     { palavra: 'Pendente para quarto', link: '/pendente-aluminio-tulipa-18cm-preto' },
                     { palavra: 'Pendente cozinha', link: '/pendente-aluminio-tulipa-18cm-preto' },
                     { palavra: 'Pendente bola', link: '/pendente-perola-libra-preto-fosco-3-lampadas-g45' },
                     { palavra: 'pendente tubo', link: '/pendente-aramado-base-concreto-e27' },
                     { palavra: 'Pendente cobre', link: '/pendente-cobre-e27' },
                     { palavra: 'Pendente globo', link: '/pendente-perola-constelacao-preto-fosco-6-lampadas-g45' },
                     { palavra: 'Pendente corda', link: '/pendente-corda-1m-e27' },
                     { palavra: 'Pendente triplo', link: '/pendente-perola-libra-preto-fosco-3-lampadas-g45' },
                     { palavra: 'Pendente cone', link: '/pendente-cone?sort=mais_vendidos' },
                     { palavra: 'Pendente gota', link: '/pendente-gota?sort=mais_vendidos' },
                     { palavra: 'Pendente rose', link: '/pendente-aluminio-cone-rose-gold-e27' },
                     { palavra: 'Pendente jabuticaba', link: '/pendente-perola-gota-preto-fosco-2-lampadas-g45' },
                     { palavra: 'Pendente redondo', link: '/pendente-aluminio-redondo-preto-gu24' },
                     { palavra: 'Pendente vidro', link: '/pendente-de-metal-cromado-e-vidro-transparente' },
                     { palavra: 'Pendente vermelho', link: '/buscar?q=pendente+vermelho' },
                     { palavra: 'Pendente rústico', link: '/pendente-de-madeira?sort=mais_vendidos' },
                     { palavra: 'pendente silicone', link: '/buscar?q=pendente+silicone' },
                     { palavra: 'Pendente moderno', link: '/pendente-cage-metal-led-branco-quente-cobre-fosco-500mm' },
                     { palavra: 'pendente concreto', link: '/pendente-aramado-base-concreto-e27' },
                     { palavra: 'Pendente LED 7W Cristal Bolhas 30cm', link: '/pendente-cristal-bolhas-led-7w-30cm' },
                     { palavra: 'Pendente sputinik', link: '/pendente-perola-constelacao-preto-fosco-6-lampadas-g45' },
                     { palavra: 'Mini Pendente Verde Retro E27', link: '/mini-pendente-verde-retro-e27' }
                  ],
      
                  ["/luminarias-publicas-led"]: [
                     { palavra: 'luminária pública 150w', link: '/luminaria-led-publica-150w-branco-frio' },
                     { palavra: 'luminária pública 100w', link: '/luminaria-led-publica-100w-branco-frio' },
                     { palavra: 'luminária pública 200w', link: '/luminaria-publica-ultra-led-smd-200w-branco-frio' },
                     { palavra: 'luminaria publica solar', link: '/luminaria-publica-solar-led-150w-branco-frio-com-sensor' },
                     { palavra: 'Luminária Pública 50w Branco Frio', link: '/luminaria-led-publica-50w-branco-frio' },
                     { palavra: 'luminária pública 50w', link: '/luminaria-publica-led-50w-externa-para-poste-branco-frio' },
                     { palavra: 'Luminária Pública 150w Branco Frio', link: '/luminaria-led-publica-150w-branco-frio' },
                     { palavra: 'Luminária Pública 100W Branco Frio', link: '/luminaria-publica-led-100w-externa-para-poste-branco-frio' },
                     { palavra: 'Luminária Pública SMD 50W Branco Frio', link: '/luminaria-publica-led-50w-externa-para-poste-branco-frio' },
                     { palavra: 'Luminária Pública 100w Branco Frio Fotoeletrico', link: '/luminaria-publica-ultra-led-smd-100w-branco-frio-fotoeletrico' },
                     { palavra: 'luminária pública fotoeletrico', link: '/luminaria-publica-ultra-led-smd-50w-branco-frio-fotoeletrico' },
                     { palavra: 'Luminária Pública 200w Branco Frio', link: '/luminaria-led-publica-200w-branco-frio-para-poste' },
                     { palavra: 'Luminária Pública Ultra 50w Branco Frio', link: '/luminaria-publica-ultra-led-smd-50w-branco-frio-fotoeletrico' },
                     { palavra: 'Luminária Pública 50w Branco Frio Fotoeletrico', link: '/luminaria-publica-ultra-led-smd-50w-branco-frio-fotoeletrico' },
                     { palavra: '30w luminaria publica', link: '/luminaria-publica-micro-led-30w-externa-para-poste-branco-frio' },
                     { palavra: 'Kit Luminária Pública 100w Branco Frio', link: '/kit-5-luminaria-publica-ultra-led-smd-100w-branco-frio' },
                     { palavra: 'Luminária Pública SMD 150w Branco Frio', link: '/luminaria-ultra-led-smd-publica-150w-branco-frio-para-rua' },
                     { palavra: 'Luminária Pública SMD 200w Branco Frio', link: '/luminaria-publica-ultra-led-smd-200w-branco-frio' },
                     { palavra: 'Kit 5 Luminária Pública 30w Branco Frio', link: '/kit-5-luminaria-publica-led-smd-30w-branco-frio' },
                     { palavra: 'Kit 5 Luminária Pública 50w Branco Frio', link: '/kit-5-luminaria-publica-super-led-50w-branco-frio' }
                  ],
      
                  ["/luminaria-de-mesa"]: [
                     {
                           "palavra": "luminaria de mesa articulada",
                           "link": "/luminaria-de-mesa?sort=mais_vendidos"
                     },
                     {
                           "palavra": "luminaria de mesa de jantar",
                           "link": "/pendente?sort=mais_vendidos"
                     },
                     {
                           "palavra": "luminarias de mesa para quarto",
                           "link": "/luminaria-de-mesa?sort=mais_vendidos"
                     },
                     {
                           "palavra": "luminaria de mesa com garra",
                           "link": "/luminaria-led-para-leitura-livro-pc-dj-mesa-partitura"
                     },
                     {
                           "palavra": "luminaria de mesa infantil",
                           "link": "/luminaria-de-mesa?sort=mais_vendidos"
                     },
                     {
                           "palavra": "luminaria de mesa preta",
                           "link": "/buscar?q=lumin%C3%A1ria+mesa+preta"
                     },
                     {
                           "palavra": "luminaria de mesa rosa",
                           "link": "/luminaria-touch-sem-fio-3-niveis-luz-14-leds-rosa"
                     },
                     {
                           "palavra": "luminaria de mesa branca",
                           "link": "/buscar?q=lumin%C3%A1ria+mesa+branca"
                     },
                     {
                           "palavra": "lampada para luminaria de mesa",
                           "link": "/lampada-led"
                     },
                     {
                           "palavra": "luminaria de mesa recarregável",
                           "link": "/buscar?q=lumin%C3%A1ria+mesa+recarreg%C3%A1vel"
                     },
                     {
                           "palavra": "luminaria de mesa azul",
                           "link": "/luminaria-de-mesa-led-4w-portatil-com-entrada-usb-azul"
                     },
                     {
                           "palavra": "luminaria de mesa flexivel",
                           "link": "/luminaria-de-mesa?sort=mais_vendidos"
                     },
                     {
                           "palavra": "luminaria de mesa moderna",
                           "link": "/luminaria-de-mesa?sort=mais_vendidos"
                     },
                     {
                           "palavra": "luminaria de mesa usb",
                           "link": "/buscar?q=lumin%C3%A1ria+usb"
                     },
                     {
                           "palavra": "luminaria de mesa articulada com garra",
                           "link": "/luminaria-led-para-leitura-livro-pc-dj-mesa-partitura"
                     },
                     {
                           "palavra": "luminaria de mesa led touch",
                           "link": "/buscar?q=lumin%C3%A1ria+touch"
                     },
                     {
                           "palavra": "luminaria de mesa verde",
                           "link": "/luminaria-touch-sem-fio-3-niveis-luz-14-leds-verde"
                     },
                     {
                           "palavra": "preço de luminaria de mesa",
                           "link": "/luminaria-de-mesa?sort=%2Bpreco"
                     },
                     {
                           "palavra": "luminaria de mesa colorida",
                           "link": "/luminaria-de-mesa?sort=mais_vendidos"
                     },
                     {
                           "palavra": "luminaria de mesa laranja",
                           "link": "/luminaria-led-usb-para-notebook-laranja"
                     }
                  ],
      
                  ["/arandela-led"]: [
                     { palavra: 'Arandelas', link: '/arandela-externa-led?sort=%2Bnome' },
                     { palavra: 'Arandela externa', link: '/arandela-externa-led?sort=mais_vendidos' },
                     { palavra: 'arandela colonial', link: '/luminaria-arandela-led-40w-bojo-madeira-ipe' },
                     { palavra: 'Arandela de parede', link: '/arandela-led?sort=mais_vendidos' },
                     { palavra: 'Arandela interna', link: '/arandela-interna-led?sort=mais_vendidos' },
                     { palavra: 'arandela preta', link: '/lumiaria-arandela-led-frisada-preta' },
                     { palavra: 'arandela tartaruga', link: '/luminaria-arandela-led-8w-sobrepor-tartaruga-branco-frio-branca' },
                     { palavra: 'luminaria arandela', link: '/arandela-led?sort=mais_vendidos' },
                     { palavra: 'Arandela slim', link: '/lumiaria-arandela-led-frisada-preta' },
                     { palavra: 'arandela 2 fachos', link: '/luminaria-arandela-led-20w-arredondada-branco-quente' },
                     { palavra: 'Arandela muro', link: '/luminaria-arandela-led-5w-sobrepor-tartaruga-branco-frio-preto' },
                     { palavra: 'Arandela banheiro', link: '/luminaria-arandela-led-4w-externa-branco-quente-branca' },
                     { palavra: 'kit arandela', link: '/arandela-externa-led?sort=%2Bnome' },
                     { palavra: 'Arandela 2 fachos', link: '/luminaria-arandela-led-4w-sobrepor-quadrada-branco-neutro-branca' },
                     { palavra: 'Arandela 2 focos', link: '/luminaria-arandela-led-4w-sobrepor-quadrada-branco-neutro-branca' },
                     { palavra: 'Arandela articulada', link: '/luminaria-arandela-led-6w-cubo-direcionavel-branco-quente-preta' },
                     { palavra: 'Arandela quadrada', link: '/luminaria-arandela-led-6w-cubo-direcionavel-branco-quente-preta' },
                     { palavra: 'Arandela marrom', link: '/luminaria-arandela-led-3w-quadrada-bivolt-branco-quente-quente-marrom' },
                     { palavra: 'arandela 12w', link: '/luminaria-arandela-led-12w-sobrepor-tartaruga-branco-quente-branca' },
                     { palavra: 'arandela parede 18w', link: '/luminaria-arandela-led-18w-sobrepor-branco-frio' },
                     { palavra: 'Arandela quarto', link: '/arandela-interna-led?sort=mais_vendidos' },
                     { palavra: 'arandela branco quente', link: '/luminaria-arandela-led-8w-sobrepor-branco-quente-preto' },
                     { palavra: 'Arandela jardim', link: '/lumiaria-arandela-led-frisada-preta' },
                     { palavra: 'Arandela sobrepor', link: '/arandela-led?sort=mais_vendidos' }
                  ],
      
                  ["/lampada-led-bulbo"]: [
                     { palavra: 'lampada bulbo led 15w', link: '/lampada-led-bulbo-15w-e27-bivolt-branca-inmetro' },
                     { palavra: 'lampada bulbo e27', link: '/lampada-led-bulbo-9w-residencial-branco-quente-bivolt' },
                     { palavra: 'lampada bulbo filamento', link: '/lampada-led-bulbo-a60-4w-vintage-carbon-branco-quente' },
                     { palavra: 'lampada bulbo leitoso', link: '/lampada-led-g95-4w-leitosa-branco-frio-filamento-inmetro' },
                     { palavra: 'lâmpada led colorida', link: '/lampada-led-colorida' },
                     { palavra: 'lâmpada fria', link: '/lampada-led-bulbo-10w-e27-bivolt-branca-amarela-inmetro' },
                     { palavra: 'lâmpada dimerizavel', link: '/lampada-led-bulbo-dimerizavel-e27-11w-branco-quente-inmetro' },
                     { palavra: 'lâmpada led 60w', link: '/lampada-led-70w' },
                     { palavra: 'lâmpada led branco quente', link: '/lampada-led-bulbo-9w-residencial-branco-quente-bivolt' },
                     { palavra: 'lâmpada vintage retrô', link: '/led-retro' },
                     { palavra: 'lâmpada vermelha', link: '/lampada-led-bulbo-6w-e27-vermelho-bivolt' },
                     { palavra: 'lâmpada quadrada', link: '/spot-led-quadrado?sort=mais_vendidos' },
                     { palavra: 'lâmpada amarela decorativa', link: '/lampada-led-bulbo-repelente-9w-e27-bivolt-amarela-inmetro' },
                     { palavra: 'lâmpadas super branca', link: '/lampada-led-g95-4w-leitosa-branco-frio-filamento-inmetro' },
                     { palavra: 'lâmpada led bulbo 20w', link: '/lampada-led-20w' },
                     { palavra: 'lâmpada led 12w', link: '/lampada-led-12w' },
                     { palavra: 'kit lâmpada de led', link: '/kit-lampadas-de-led' },
                     { palavra: 'lâmpada de bluetooth', link: '/lampada-led-bulbo-10w-rgb-bivolt-smart-compativel-com-alexa-elgin' },
                     { palavra: 'lâmpada de led com controle remoto', link: '/lampada-led-bulbo-5w-e27-bivolt-rgb-com-controle-inmetro' },
                     { palavra: 'lâmpada de led 30 watts', link: '/lampada-led-30w' },
                     { palavra: 'lampada bulbo led 20w', link: '/lampada-led-alta-potencia-20w-bivolt-branco-frio' },
                     { palavra: 'lampada bulbo 50w', link: '/lampada-led-alta-potencia-50w-branco-frio' },
                     { palavra: 'lampada bulbo led 50w', link: '/lampada-led-alta-potencia-50w-branco-frio' },
                     { palavra: 'lampada bulbo 9w', link: '/lampada-led-9w' },
                     { palavra: 'lampada bulbo 40w', link: '/lampada-led-alta-potencia-50w-branco-frio' },
                     { palavra: 'lampada bulbo 100w', link: '/lampada-led-alta-potencia-100-w-branco-frio' },
                     { palavra: 'lampada bulbo 30w', link: '/lampada-led-alta-potencia-30w-bivolt-branco-frio' },
                     { palavra: 'lampada bulbo 12w', link: '/lampada-led-bulbo-12w-e27-bivolt-branca-amarela-inmetro' },
                     { palavra: 'lampada bulbo dimerizavel', link: '/lampada-led-bulbo-dimerizavel-e27-11w-branco-quente-inmetro' },
                     { palavra: 'lampada bulbo 16w', link: '/lampada-led-bulbo-16w-residencial-branco-frio-bivolt' },
                     { palavra: 'lampada bulbo 60w', link: '/lampada-led-alta-potencia-70w-branco-frio-inmetro' }
                  ],
      
                  ["/refletor-micro-led-slim"]: [
                     { palavra: 'refletor 100w', link: '/refletor-led-100w' },
                     { palavra: 'refletor led 30w', link: '/refletor-led-30w' },
                     { palavra: 'refletor solar', link: '/refletor-led-solar?sort=mais_vendidos' },
                     { palavra: 'Refletor 200w', link: '/refletor-led-200w' },
                     { palavra: 'Refletor 50w', link: '/refletor-led-50w' },
                     { palavra: 'refletor rgb', link: '/refletor-micro-led-ultra-thin-rgb' },
                     { palavra: 'Refletor verde', link: '/refletor-micro-led-smd-verde' },
                     { palavra: 'refletor 300w', link: '/refletor-led-300w' },
                     { palavra: 'Refletor Holofote MicroLED Slim 100W Branco Frio', link: '/refletor-holofote-microled-100w-branco-frio' },
                     { palavra: 'Refletor Holofote MicroLED Slim 200W Branco Frio', link: '/refletor-micro-led-slim-200w-branco-frio' },
                     { palavra: 'refletor 400w', link: '/refletor-led-400w' },
                     { palavra: 'Kit refletor', link: '/holofotes-led' },
                     { palavra: 'refletor branco quente', link: '/refletor-micro-led-slim-branco-quente' },
                     { palavra: 'Refletor 20w', link: '/refletor-led-20w' },
                     { palavra: 'Refletor Holofote MicroLED Slim 50W Branco Frio', link: '/refletor-holofote-microled-slim-50w-branco-frio-ip66' },
                     { palavra: 'refletor holofote', link: '/refletores-de-led' },
                     { palavra: 'refletor branco frio', link: '/refletor-micro-led-slim-branco-frio' },
                     { palavra: 'refletor com sensor', link: '/refletor-micro-led-com-sensor-de-presenca?sort=mais_vendidos' }
                  ],

                  ["/lustre"]: [
                     { palavra: 'Lustre pendente', link: '/lustre-pendente?sort=ultimos_produtos' },
                     { palavra: 'Lustre cristal', link: '/lustre-de-cristal-pendente-retangular-branco-gelo-27x80' },
                     { palavra: 'Lustre sala', link: '/gxt06bvsn-lustre-de-cristal-k9-pendente-quadrado-30x60' },
                     { palavra: 'Lustre quarto', link: '/lustre-de-cristal-k9-plafon-led-quadrado-40x40' },
                     { palavra: 'Lustre para sala de jantar', link: '/pendente-bolhas-led-cristal-retangular-2m' },
                     { palavra: 'Lustre preto', link: '/lustre-de-cristal-pendente-redondo-floresta-40x20-preto' },
                     { palavra: 'Lustre madeira', link: '/lustre' },
                     { palavra: 'Lustre moderno', link: '/lustre-metal-e-acrilico-pendente-led-3-arcos' },
                     { palavra: 'Lustre candelabro', link: '/lustre-candelabro-de-cristal-60-x-47-x-60-cm' },
                     { palavra: 'Lustre quadrado', link: '/lustre-de-cristal-k9-plafon-led-quadrado-3-cores-50x50' },
                     { palavra: 'Lustre redondo', link: '/lustre-de-cristal-k9-plafon-led-redondo-3-cores-40cm' },
                     { palavra: 'Lustre plafon', link: '/lustre-de-cristal-k9-plafon-led-quadrado-3-cores-40x40' },
                     { palavra: 'Lustre de parede', link: '/lustre-de-parede?sort=mais_vendidos' },
                     { palavra: 'Lustre jabuticaba', link: '/pendente-perola-10-globos-cobre' },
                     { palavra: 'Lustre aramado', link: '/pendente-aramado-bronze-e27' },
                     { palavra: 'Lustre dourado', link: '/lustre-de-cristal-pendente-retangular-champanhe-27x80' },
                     { palavra: 'Lustre retangular', link: '/lustre-de-cristal-pendente-retangular-champanhe-27x80' },
                     { palavra: 'lustre industrial', link: '/pendente-triangulo-de-madeira-led-embutido-branco-quente' },
                     { palavra: 'Lustre cozinha', link: '/lustre-de-cristal-champanhe-cascata-k9-plafon-redondo-35x24' },
                     { palavra: 'lustre quadrado 40x40', link: '/lustre-de-cristal-k9-plafon-led-quadrado-3-cores-40x40' },
                     { palavra: 'Lustre rústico', link: '/pendente-perola-constelacao-preto-fosco-6-lampadas-g45' },
                     { palavra: 'Lustre sputinik', link: '/pendente-perola-10-globos-cobre' },
                     { palavra: 'lampada lustre', link: '/vela-led?sort=mais_vendidos' },
                     { palavra: 'Lustre bola', link: '/pendente-perola-constelacao-preto-fosco-6-lampadas-g45' },
                     { palavra: 'Lustre de teto', link: '/lustre' },
                     { palavra: 'Lustre cobre', link: '/lustre' },
                     { palavra: 'Lustre vintage', link: '/lustre' },
                     { palavra: 'Arco lustre', link: '/lustre-metal-e-acrilico-pendente-led-1-arco' },
                     { palavra: 'Lustre anel', link: '/lustre-metal-e-acrilico-pendente-led-3-arcos' },
                     { palavra: 'Lustre de Cristal K9 Pendente Redondo 40x60', link: '/lustre-de-cristal-k9-pendente-redondo-40x60' }
                  ],

                  ['/led-friday']: [
                     { palavra: 'rgb', link: '/buscar?q=RGB&sort=mais_vendidos' },
                     { palavra: 'arandela', link: '/arandela-led?sort=mais_vendidos' },
                     { palavra: 'Pendente', link: '/pendente?sort=mais_vendidos' },
                     { palavra: 'plafon 25w', link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado' },
                     { palavra: 'spot led 7w', link: '/spot-7w-dicroica-led-base-branca' },
                     { palavra: 'Fita led', link: '/fita-de-led?sort=mais_vendidos' },
                     { palavra: 'Plafon', link: '/plafon-led?sort=mais_vendidos' },
                     { palavra: 'Spot', link: '/spots?sort=mais_vendidos' },
                     { palavra: 'refletor 100w', link: '/refletor-microled-ultra-thin-100w-branco-frio-preto' },
                     { palavra: 'plafon 18w', link: '/luminaria-plafon-18w-led-embutir-branco-frio-quadrado' },
                     { palavra: 'Trilho', link: '/spot-led-trilho-eletrificado?sort=mais_vendidos' },
                     { palavra: 'Lustre', link: '/lustre?sort=mais_vendidos' },
                     { palavra: 'lampada led', link: '/lampada-led?sort=mais_vendidos' },
                     { palavra: 'Luminária', link: '/luminarias-led?sort=mais_vendidos' },
                     { palavra: 'solar', link: '/buscar?q=solar&sort=mais_vendidos' },
                     { palavra: 'balizador', link: '/balizador-led?sort=mais_vendidos' },
                     { palavra: 'Tomada', link: '/interruptores-tomadas-led?sort=mais_vendidos' },
                     { palavra: 'Plafon sobrepor', link: '/plafon-led-sobrepor?sort=mais_vendidos' },
                     { palavra: 'Interruptor', link: '/interruptores-tomadas-led?sort=mais_vendidos' },
                     { palavra: 'perfil', link: '/buscar?q=perfil' }
                  ],
      
               }

               return config[window.location.pathname];
      
         },
      
         gerarHTML(){
      
               let palavras = this.gerarObjeto();
      
               if(!palavras){
                  return;
               }
      
               let html = palavras.map(item=> {
      
                  return `
                     <li>
                           <a href="${item.link}" title="${item.palavra}" alt="${item.palavra}" ${item.blank ? 'target="_blank" rel="noopener"' : ''}>
                              <label>${item.palavra}</label>
                           </a>
                     </li>
                  `;
      
               });
      
               return {
      
                  html_palavras_rodape: `
                     <div class="palavras-mais-buscadas">
                           <div class="conteudo-titulo-palavras-buscadas">
                              <span>Palavras mais Buscadas</span>
                           </div> 

                           <div class="conteudo-lista-palavras-mais-buscadas">
                              <ul class="lista-palavras-mais-buscadas">
                                 ${html.join('')}
                              </ul>
                           </div>
                     </div>
                  `,
      
                  html_palavras_lateral: `
                     <div class="lateral outras filtro-coluna filtro-lista-personalizada palavras-mais-buscadas-lateral">
                           <div class="filtro lista borda-principal">
                              <h4 class="titulo cor-secundaria">Palavras mais buscadas</h4>
                              <div class="atributo-lista">
                                 <ul>
                                       ${html.slice(0, 10).join('')}
                                 </ul>
                              </div>
                           </div>
                     </div>
                  `,
      
               };
      
         },
      
         renderizar(){
      
               let { html_palavras_rodape, html_palavras_lateral } = this.gerarHTML() || {};
   
               if(!html_palavras_rodape || !html_palavras_lateral){
                  return;
               }
   
               $('.pagina-categoria #corpo .conteudo.span9').append(html_palavras_rodape);
               $('.pagina-categoria .coluna.span3').append(html_palavras_lateral);

         },
      
      }
      
      
      PalavrasMaisBuscadas.renderizar();

   },

   pesquisasEmAlta(){
                              
      let PesquisasEmAlta = {

         gerarObjeto(){

               let config = {

                  ['/refletores-holofotes-led']: {

                     termos: [{
                        termo: 'Refletor',
                        imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-led-mini-19-08-21.png',
                        link: '/refletores-de-led'
                     },
                     {
                        termo: 'refletor 100w',
                        imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-led-slim-18-08-21.png',
                        link: '/refletor-led-100w'
                     },
                     {
                        termo: 'refletor solar',
                        imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-led-solar-19-08-21.png',
                        link: '/refletor-led-solar?sort=mais_vendidos'
                     },
                     {
                        termo: 'refletor led 30w',
                        imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-30w-23-08-21.jpg',
                        link: '/refletor-led-30w'
                     },
                     {
                        termo: 'Refletor 200W',
                        imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-200w-23-08-21.jpg',
                        link: '/refletor-led-200w'
                     }]

                  },

                  ['/luminarias-plafons-led']: {

                     termos: [{
                           termo: 'plafon 25w',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-sobrepor-19-08-21.png',
                           link: '/plafon-led-25w?sort=mais_vendidos'
                     },
                     {
                           termo: 'plafon',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Sobrepor Redondo-20-08-21.jpg',
                           link: '/plafon-led?sort=mais_vendidos'
                     },
                     {
                           termo: 'arandela',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-arandela.png',
                           link: '/arandela-led?sort=mais_vendidos'
                     },
                     {
                           termo: 'Pendente',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/pendente-led-19-08-21.png',
                           link: '/pendente?sort=mais_vendidos'
                     },
                     {
                           termo: 'plafon 18w',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-embutir-19-08-21.png',
                           link: '/plafon-led-18w?sort=mais_vendidos'
                     }]
      
                  },

                  ['/spots-led-']: {

                     termos: [
                           {
                              termo: 'spot led 7w',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-7w-23-08-21.jpg',
                              link: '/spot-led-7w'
                           },
                           {
                              termo: 'spot led 5w',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-dicroica-redondo-19-08-21.png',
                              link: '/spot-led-5w'
                           },
                           {
                              termo: 'spot led 3w',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-3w-23-08-21.jpg',
                              link: '/spot-led-3w'
                           },
                           {
                              termo: 'Spot',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-dicroica-23-08-21.jpg',
                              link: '/spots'
                           },
                           {
                              termo: 'trilho',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-com-trilho-23-08-21.jpg',
                              link: '/spot-led-trilho-eletrificado?sort=mais_vendidos'
                           },
                     ]

                  },

                  ['/fita-de-led']: {

                     termos: [
                           {
                              termo: 'Fita led',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Branco-Frio-19-08-2021-menu.png',
                              link: '/fita-de-led'
                           },
                           {
                              termo: 'Fita led rgb',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-RGB-19-08-2021-menu.png',
                              link: '/fita-led-rgb?sort=mais_vendidos'
                           },
                           {
                              termo: 'fita led 5050',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Branco-Quente-19-08-2021-menu.png',
                              link: '/kit-fitas-led-5050'
                           },
                           {
                              termo: 'Fio',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Branco-Frio-19-08-2021-menu.png',
                              link: '/fita-de-led'
                           },
                           {
                              termo: 'Fita led colorida',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-RGB-19-08-2021-menu.png',
                              link: '/fita-led-rgb?sort=mais_vendidos'
                           },
                     ]

                  },

                  ['/lampadas-led']: {

                     termos: [{
                           termo: 'lampada led 12w',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-12w-23-08-21.jpg',
                           link: '/lampada-led-12w'
                     },
                     {
                           termo: 'lampada led 15w',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-15w-23-08-21.jpg',
                           link: '/lampada-led-15w'
                     },
                     {
                           termo: 'lampada led 5w',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-5w-23-08-21.jpg',
                           link: '/lampada-led-5w'
                     },
                     {
                           termo: 'lampada led 7w',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-7w-23-08-21.jpg',
                           link: '/lampada-led-7w'
                     },
                     {
                           termo: 'lampada led 9w',
                           imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-9w-23-08-21.jpg',
                           link: '/lampada-led-9w'
                     }]

                  },

                  ['/acessorios-para-leds']: {

                     termos: [
                           {
                              termo: 'fonte',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fonte Chaveada LED-19-08-21.png',
                              link: '/fonte-chaveada-led?sort=mais_vendidos'
                           },
                           {
                              termo: 'Tomada',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/tomada-23-08-21.jpg',
                              link: '/interruptores-tomadas-led?sort=mais_vendidos'
                           },
                           {
                              termo: 'sensor',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/sensor-23-08-21.jpg',
                              link: '/sensor-de-presenca?sort=mais_vendidos'
                           },
                           {
                              termo: 'Interruptor',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/interruptor-23-08-21.jpg',
                              link: '/interruptores-tomadas-led?sort=mais_vendidos'
                           },
                           {
                              termo: 'soquete',
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/soquete-23-08-21.jpg',
                              link: '/soquete-led?sort=mais_vendidos'
                           },
                     ]

                  },

               }

               return config[window.location.pathname] || {};
               
         },

         gerarHTML(){

               let { termos } = this.gerarObjeto();

               if(!termos){
                  return;
               }

               let html = termos.map(item=> {

                  return `
                     <a href="${item.link}" class="item-pesquisas-em-alta">
                           <div class="item-pesquisa-textos">
                              <div class="nome-pesquisas">${item.termo}</div>
                           </div>
                           <div class="item-pesquisa-imagem"><img alt="${item.termo}" title="${item.termo}" src="${item.imagem}"></div>
                     </a>
                  `;

               }).join('');

               return `
                  <div class="pesquisas-em-alta">
                     <div class="titulo-pesquisas-em-alta">Pesquisas em alta</div>
                     <div class="conteudo-pesquisas-em-alta">
                           ${html}
                     </div>
                  </div>
               `;

         },

         renderizar(){

               if(screen.width > 767){

                  let html = this.gerarHTML();

                  if(html){
                     $('.palavras-mais-buscadas').before(html);
                  }

               }

         }

      }

      PesquisasEmAlta.renderizar();

   },
   
   avalicoesTrustVoxCategoria(){

      let AvaliacoesTrustVox = {

         gerarObjeto(){

               let objeto = {

                  ['/']: [
                     /*{
                           nome: 'Dione Pereira',
                           local: 'Juazeiro do Norte - CE',
                           comentario: 'Rapidez na entrega, ótimo preço e o serviço 0800 (primeira de luxo) atendido rapidamente. Com certeza vou fazer outras compras.'
                     },
                     {
                           nome: 'Wolfram Metzler',
                           local: 'Campo Bom - RS',
                           comentario: 'Ótimo produto, preço justo, foi entregue antes do prazo.'
                     },
                     {
                           nome: 'Bianca Pianelli',
                           local: 'Salto - SP',
                           comentario: 'O produto é muito bom e atendeu plenamente minha necessidade.'
                     },
                     {
                           nome: 'Bruno da Silva',
                           local: 'Canoas - RS',
                           comentario: 'Produto fantástico e com funcionalidades incríveis. Super recomendo, entregue tudo certinho e dentro do prazo.'
                     },
                     {
                           nome: 'Roque Almeida',
                           local: 'Ijuí -RS',
                           comentario: 'Fique muito satisfeito com esse produto e com a seriedade do vendedor na entrega antes do prazo previsto.'
                     },
                     {
                           nome: 'Bartholomeu Duarte',
                           local: 'Lauro de Freitas - BA',
                           comentario: 'Escolhi comprar com vocês devido ao ótimo atendimento, qualidade do produto, pontualidade na entrega e preço, muito satisfeito!'
                     },
                     {
                           nome: 'Odilon Fonseca',
                           local: 'Joinville - SC',
                           comentario: 'Produto de ótima qualidade, muito bem atendido, loja de confiança, parabéns!'
                     },
                     {
                           nome: 'Geraldo de Abreu',
                           local: 'Belo Horizonte - MG',
                           comentario: 'Excelente atendimento, entrega super rápida. Recomendo!'
                     },
                     {
                           nome: 'Marcia Zeviani',
                           local: 'São Paulo - SP',
                           comentario: 'Precisava de luminárias com qualidade e bom preço, encontrei tudo na Iluminim que entregou o produto antes do prazo. Adorei a Loja e já a indiquei para amigos'
                     },
                     {
                           nome: 'Alexandre Augusto',
                           local: 'Florianópolis - SC',
                           comentario: 'Excelente produto. Excelente atendimento de venda e atenção ao cliente.'
                     },
                     {
                           nome: 'Chilon Magno',
                           local: 'Novo Hamburgo – RS',
                           comentario: 'Porque fui bem atendido, entrega rápida, ótimo produto.'
                     },
                     {
                           nome: 'Marcelo Belloli',
                           local: 'Porto Alegre - RS',
                           comentario: 'Preço e qualidade reunidos em um único produto, além é claro, da garantia de três anos.'
                     },
                     {
                           nome: 'Myrian Madeu',
                           local: 'Louveira - SP',
                           comentario: 'Atendeu a todas as minhas expectativas tanto no produto, qto no atendimento e entrega pela loja'
                     },*/
                     {
                           nome: 'Rogerio Binati Fornaziero',
                           comentario: 'Produto sensacional! Correspondeu as expectativas, fácil instalação e resultado excelente.'
                     },
                     {
                           nome: 'Rogério Soares Stock',
                           comentario: 'Produto Excelente, simples de instalar, funciona perfeitamente.'
                     },
                     {
                           nome: 'Sergio Maeso Junior',
                           comentario: 'Produto de valor e qualidade e muito boa.'
                     },
                     {
                           nome: 'Christian Cleber Maux Calheiros',
                           comentario: 'Excelente produto e acabamento com ótimo custo benefício!'
                     },
                     {
                           nome: 'Claudio Achkar',
                           comentario: 'Produto bom como descrito, sem defeitos, sem peças faltantes, compraria novamente e recomendaria.'
                     },
                  ],

               }

               let avaliacoes = objeto[window.location.pathname];

               if(!avaliacoes){ //CAINDO NESSA CONDICIONAL SIGNIFICA QUE NÃO EXISTE NENHUMA AVALIÇÃO ESPECIFICA PARA CATEGORIA, ENTÃO PEGUE TODAS.

                  avaliacoes = objeto['/'];

               }

               return avaliacoes;

         },

         gerarHTML(){

               let avaliacoes = this.gerarObjeto();
            
               if(!avaliacoes){
                  return;
               }

               //console.log('avaliacoes', avaliacoes);

               let html = avaliacoes.map(item=> {
      
                  return `
                     <div class="avalicao-item">
                           <div class="avalicao-icone">
                              <div class="avaliacao-icone-usuario">${ILUMINIM_UTILS.icones.usuario}</div>
                              <div class="avaliacao-icone-texto">Avaliação:</div>
                              <div class="avaliacao-icone-estrelas">
                                 <i class="icon-star"></i>
                                 <i class="icon-star"></i>
                                 <i class="icon-star"></i>
                                 <i class="icon-star"></i>
                                 <i class="icon-star"></i>    
                              </div>
                           </div>
                           <div class="avalicao-informacoes">
                              <div class="avaliacao-nome">${item.nome}</div>
                              <div class="avaliacao-comentario">${item.comentario}</div>
                              <div class="avaliacao-ver-mais">Ver mais</div>
                           </div>
                     </div>
                  `;
      
               }).join('');

               return html;

         },

         renderizar(){

               let html = this.gerarHTML();

               if(!html){
                  return;
               }

               $('.secao-principal .conteudo.span9').append(`
                  <div class="avalicoes-categoria">

                     <div class="avaliacoes-categoria-titulo">
                           <div class="avaliacoes-categoria-titulo-icone">${ILUMINIM_UTILS.icones.medalha}</div>
                           <div class="avaliacoes-categoria-titulo-texto">Veja o que dizem nossos clientes</div>
                     </div>

                     <div class="avalicoes-categoria-conteudo">
                           <div class="avaliacoes-categoria-lista carousel-target">
                              ${html}
                           </div>
                     </div>   

                     <div class="avalicoes-categoria-rodape">
                           <div class="avalicoes-categoria-trustvox">
                              <div class="avalicoes-categoria-trustvox-texto">Avaliações reais, auditadas por</div>
                              <div class="avalicoes-categoria-trustvox-logo"><img src="https://cdn.awsli.com.br/257/257163/arquivos/ra-trustvox.png"></div>
                           </div>
                     </div>

                  </div>
               `);


               $('.avalicoes-categoria .carousel-target').owlCarousel({
                  margin:10,
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
                     }
                  }
               });


               $('.avalicoes-categoria .avaliacao-ver-mais').on('click', function(){
                  let texto = $(this).text();
                  if(texto == 'Ver mais'){
                     $(this).text('Ver menos');
                     $(this).siblings('.avaliacao-comentario').addClass('show-more');
                     
                  }else {
                     $(this).text('Ver mais');
                     $(this).siblings('.avaliacao-comentario').removeClass('show-more');
                  }
                  
                  $('.avalicoes-categoria .carousel-target').trigger('refresh.owl.carousel');
               });

         }

      }

      AvaliacoesTrustVox.renderizar();

   },

   cronometroCategoria(){

      if(!ILUMINIM_UTILS.screen.isDesktop()){
         return;
      }

      let banner_cronometro = {

         ['/lampada-led-bulbo']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lamp-bulbo-10-09-21.jpg',
            link: '/lampada-led-bulbo-9w-residencial-branco-frio-bivolt',
            nome_1: 'Lâmpada LED Bulbo 9w',
            nome_2: 'Residêncial Branco Frio Bivolt',
            porcentagem_desconto: '69',
         },

         ['/pendente']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/pendente-10-09-21.jpg',
            link: '/pendente-aluminio-tulipa-18cm-preto',
            nome_1: 'Pendente Alumínio',
            nome_2: 'Tulipa Preto',
            porcentagem_desconto: '70',
         },

         ['/spot-led-trilho-eletrificado']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/trilho-10-09-21.jpg',
            link: '/kit-trilho-eletrificado-2m-4-spot-led-10w-branco-quente-preto',
            nome_1: 'Kit Trilho Eletrificado 2m',
            nome_2: '+4 Spot LED 10W Branco Quente Preto',
            porcentagem_desconto: '28',
         },

         ['/led-para-dormitorios']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-sobrepor-19-08-21.png',
            link: '/luminaria-plafon-25w-led-sobrepor-branco-neutro-quadrado',
            nome_1: 'Luminária Plafon 25W',
            nome_2: 'LED Sobrepor Branco Neutro',
            porcentagem_desconto: '55',
         },

         ['/plafon-led-sobrepor']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-sobrepor-19-08-21.png',
            link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado',
            nome_1: 'Luminária Plafon 25W',
            nome_2: 'LED Sobrepor Branco Frio',
            porcentagem_desconto: '62',
         },

         ['/plafon-led-embutir']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-embutir-19-08-21.png',
            link: '/luminaria-plafon-18w-led-embutir-branco-frio-quadrado',
            nome_1: 'Luminária Plafon 18W',
            nome_2: 'LED Embutir Branco Frio',
            porcentagem_desconto: '65',
         },

         ['/refletores-de-led']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-led-slim-18-08-21.png',
            link: '/refletor-holofote-microled-100w-branco-frio',
            nome_1: 'Refletor Holofote',
            nome_2: 'MicroLED Slim 100W Branco Frio',
            porcentagem_desconto: '76',
         },

         ['/luminarias-led']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-sobrepor-19-08-21.png',
            link: '/luminaria-plafon-25w-led-sobrepor-branco-frio-quadrado',
            nome_1: 'Luminária Plafon 25W',
            nome_2: 'LED Sobrepor Branco Frio',
            porcentagem_desconto: '62',
         },

         ['/spots']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spots-10-09-21.jpg',
            link: '/spot-led-smd-5w-quadrado-branco-quente',
            nome_1: 'Spot LED SMD 5W',
            nome_2: 'Quadrado Branco Quente',
            porcentagem_desconto: '48',
         },

         ['/spot-led-redondo']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-redondo-10-09-21.jpg',
            link: '/spot-led-smd-7w-redondo-branco-frio',
            nome_1: 'Spot LED SMD 7W',
            nome_2: 'Redondo Branco Frio',
            porcentagem_desconto: '72',
         },

         ['/fita-de-led']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-RGB-19-08-2021-menu.png',
            link: '/fita-led-rgb-colorida-3528-5-metros-com-fonte',
            nome_1: 'Fita LED RGB Colorida',
            nome_2: '3528 5 metros com Fonte',
            porcentagem_desconto: '56',
         },

         ['/fita-led-rgb']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-RGB-19-08-2021-menu.png',
            link: '/fita-led-rgb-colorida-3528-5-metros-com-fonte',
            nome_1: 'Fita LED RGB Colorida',
            nome_2: '3528 5 metros com Fonte',
            porcentagem_desconto: '56',
         },

         ['/acessorios-para-leds']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/acessorios-para-leds-10-09-21.jpg',
            link: '/driver-para-luminaria-plafon-led-25w',
            nome_1: 'Driver para Plafon',
            nome_2: '25W',
            porcentagem_desconto: '56',
         },

         ['/fonte-convencional']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/fonte-led-10-09-21.png',
            link: '/fonte-12v-2a-para-led',
            nome_1: 'Fonte 12w',
            nome_2: '2a para LED',
            porcentagem_desconto: '28',
         },

         ['/fonte-chaveada-led']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/fonte-led-10-09-21.png',
            link: '/fonte-12v-2a-para-led',
            nome_1: 'Fonte 12w',
            nome_2: '2a para LED',
            porcentagem_desconto: '28',
         },

         ['/lampada-led']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/kits-lampada-19-08-2021.png',
            link: '/pack-6-lampada-led-bulbo-9w-e27-bivolt-branco-frio-avant',
            nome_1: 'Pack 6 Lâmpadas LED',
            nome_2: 'Bulbo 9W E27 Bivolt Branco Frio',
            porcentagem_desconto: '66',
         },

         ['/lampada-led-tubular']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/lampada-led-tubular-10-09-21.jpg',
            link: '/tubular-led-sobrepor-completa-36w-branco-frio',
            nome_1: 'Tubular LED Sobrepor',
            nome_2: 'Completa 36W 1,20 Branco Frio',
            porcentagem_desconto: '83',
         },

         ['/halopin-led']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/halopin-led-10-09-21.jpg',
            link: '/lampada-led-para-geladeira-3w-branco-frio',
            nome_1: 'Lâmpada LED',
            nome_2: 'Para Geladeira 3W Branco Frio',
            porcentagem_desconto: '60',
         },

         /*['/led-friday']: {
            imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/refletor-micro-led-slim-18-08-21.png',
            link: '/refletor-holofote-microled-100w-branco-frio',
            nome_1: 'Refletor Holofote',
            nome_2: 'MicroLED Slim 100W Branco Frio',
            porcentagem_desconto: '76',
         },*/
         
      }
      
      let banner = banner_cronometro[window.location.pathname];

      if(!banner){
         return;
      }

      let { imagem, link, nome_1, nome_2, porcentagem_desconto } = banner;

      let html = `
         <div class="banner-cronometro-categoria">
               <a href="${ link }" class="conteudo-banner-cronometro-categoria" onclick="ga('send', 'event', 'Banner cronometro com desconto categoria', 'click', '${nome_1} ${nome_2}')">
                  <div class="banner-cronometro-informacoes">
                     <div class="cronometro-categoria-imagem-produto"><img alt="${nome_1} ${nome_2}" title="${nome_1}${nome_2}" src="${imagem}"></div>
                     <div class="cronometro-categoria-nome-produto">
                           <span>${nome_1}</span>
                           <span>${nome_2}</span>
                     </div>
                     <div class="cronometro-categoria-texto-desconto">
                           <span><strong>${porcentagem_desconto}%</strong> de desconto</span>
                           <span>Oferta por <strong>Tempo Limitado</strong></span>
                     </div>
                     <div class="btn-custom">Comprar</div>
                  </div>

                  <div class="conteudo-cronometro">
                     <div class="conteudo-icone-cronometro">
                        ${ILUMINIM_UTILS.icones.relogio_2}
                     </div>
                     <ul class="countdown-target"></ul>
                  </div>
               </a>
         </div>
      `;

      $('div#corpo > .conteiner').prepend(html);

      $('.banner-cronometro-categoria .countdown-target').yuukCountDown({
         starttime: '2016/11/12 00:00:00',
         endtime: '2030/12/30 00:00:00',
      });

   },

   navegacaoCategoria(){

      let NavegacaoCategoria = {
         
         gerarObjeto(){

               let objeto = [

                  {
                     categorias: ['/luminarias-led'],
                     navegacao: [
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/kits-luminarias-led-19-08-21.png',
                              link: '/kit-plafon-led?sort=mais_vendidos',
                              nome: 'Kits Luminárias LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-embutir-19-08-21.png',
                              link: '/plafon-led-embutir-quadrado?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Embutir Quadrado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Embutir Retangular-20-08-21.jpg',
                              link: '/plafon-led-embutir-retangular?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Embutir Retangular'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-sobrepor-19-08-21.png',
                              link: '/plafon-led-sobrepor-quadrado?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Sobrepor Quadrado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Sobrepor Retangular-20-08-21.jpg',
                              link: '/plafon-led-sobrepor-retangular?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Sobrepor Retangular'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Embutir Redondo-20-08-21.jpg',
                              link: '/plafon-led-embutir-redondo?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Embutir Redondo'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-borda-infinita-19-08-21.png',
                              link: '/plafon-led-borda-infinita?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Borda Infinita'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Sobrepor Redondo-20-08-21.jpg',
                              link: '/plafon-led-sobrepor-redondo?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Sobrepor Redondo'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/plafon-led-recuado-19-08-21.png',
                              link: '/luminaria-plafon-led-recuada?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Recuado'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Plafon LED Colorido-20-08-21.jpg',
                              link: '/plafon-led-colorido?sort=mais_vendidos',
                              nome: 'Plafon LED<br>Colorido'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-arandela.png',
                              link: '/arandela-led?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Arandela'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-abajur-19-08-21.png',
                              link: '/luminaria-abajur?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Abajur'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-mesa-19-08-21.png',
                              link: '/luminaria-de-mesa?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Mesa'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-publica-19-08-21.png',
                              link: '/luminarias-publicas-led?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Pública'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-emergencia-19-08-21.png',
                              link: '/luminaria-emergencia-led?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Emergência'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-industrial-19-08-21.png',
                              link: '/luminaria-industrial?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Industrial'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-espeto-19-08-21.png',
                              link: '/espeto-led?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Espeto'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/luminaria-led-posto-19-08-21.png',
                              link: '/luminarias-posto-led?sort=mais_vendidos',
                              nome: 'Luminária LED<br>Posto'
                           },
                        ]
                     ],
                  },

                  {
                     categorias: ['/spots'],
                     navegacao: [
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/kits-spots-led-30-09-21.png',
                              link: '/kits-spots-led-dicroica?sort=mais_vendidos',
                              nome: 'Kits Spots LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-redondo-30-09-21.png',
                              link: '/spot-led-redondo?sort=mais_vendidos',
                              nome: 'Spot LED<br>Dicróica Redondo'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-quadrado-30-09-21.png',
                              link: '/spot-led-quadrado?sort=mais_vendidos',
                              nome: 'Spot LED<br>Dicróica Quadrado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-colorido-30-09-21-v2.png',
                              link: '/spot-led-colorido-?sort=mais_vendidos',
                              nome: 'Spot LED<br>Colorido'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-trilho-eletrificado-19-08-21.png',
                              link: '/spot-led-trilho-eletrificado?sort=mais_vendidos',
                              nome: 'Spot LED<br>Trilho Eletrificado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-recuado-16-09-21-v1.png',
                              link: '/spot-led-recuado?sort=mais_vendidos',
                              nome: 'Spot LED<br>Recuado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-mini-redondo-19-08-21.png',
                              link: '/mini-spot-led-redondo?sort=mais_vendidos',
                              nome: 'Spot LED<br>Mini Redondo'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-mini-quadrado-19-08-21.png',
                              link: '/mini-spot-led-quadrado?sort=mais_vendidos',
                              nome: 'Spot LED<br>Mini Quadrado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-balizador-19-08-21.png',
                              link: '/balizador-led?sort=mais_vendidos',
                              nome: 'Spot LED<br>Balizador'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/spot-led-sobrepor-19-08-21.png',
                              link: '/spot-led-sobrepor?sort=mais_vendidos',
                              nome: 'Spot LED<br>Sobrepor'
                           },
                        ],
                     ],
                  },

                  {
                     categorias: ['/fita-de-led'],
                     navegacao: [
                           [
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Kits-Fitas-LED-19-08-2021-menu.png',
                                 link: '/kit-fita-led?sort=mais_vendidos',
                                 nome: 'Kits Fitas LED'
                              },
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-RGB-19-08-2021-menu.png',
                                 link: '/fita-led-rgb?sort=mais_vendidos',
                                 nome: 'Fita LED<br>RGB'
                              },
                           ],
                           [
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Vermelha-19-08-2021-menu-sup.png',
                                 link: '/fita-led-vermelha?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Vermelha'
                              },
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Branco-Quente-19-08-2021-menu.png',
                                 link: '/fita-led-branco-quente?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Branco Quente'
                              },
                           ],
                           [
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Verde-19-08-2021-menu.png',
                                 link: '/fita-led-verde?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Verde'
                              },
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Branco-Frio-19-08-2021-menu.png',
                                 link: '/fita-led-branca?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Branco Frio'
                              },
                           ],
                           [
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/fita-ultra-violeta-14-09-21.png',
                                 link: '/fita-led-ultravioleta?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Ultravioleta'
                              },
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Branco-Morno-19-08-2021-menu.png',
                                 link: '/fita-led-branco-morno?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Branco Morno'
                              },
                           ],
                           [
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Rosa-19-08-2021-menu.png',
                                 link: '/fita-led-rosa?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Rosa'
                              },
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-Azul-19-08-2021-menu-sup.png',
                                 link: '/fita-led-azul?sort=mais_vendidos',
                                 nome: 'Fita LED<br>Azul'
                              },
                           ],
                           [
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fita-LED-12V-19-08-2021-menu.png',
                                 link: '/fita-led-12v?sort=mais_vendidos',
                                 nome: 'Fita LED<br>12v'
                              },
                              {
                                 imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Mangueira-LED-08-09-21.png',
                                 link: '/mangueiras-led?sort=mais_vendidos',
                                 nome: 'Mangueiras LED'
                              },
                           ],
                     ],
                  },

                  {
                     categorias: ['/lustre', '/lustre-pendente', '/lustre-cristal', '/lustre-plafon', '/lustre-candelabro', '/lustre-classico', '/lustre-industrial', '/lustre-de-parede'],
                     navegacao: [
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/LUSTRE-DUQUESA-BR-Lustre-Pendente-08-09-21.jpg',
                              link: '/lustre-pendente?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Pendente'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/PF-CR-32W-350MM-Lustre-Cristal-08-09-21.jpg',
                              link: '/lustre-cristal?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Cristal'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/SL-93779-C9-CHP-Lustre-Plafon-08-09-21.jpg',
                              link: '/lustre-plafon?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Plafon'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/SL-5834-H8-CLEAR-Lustre-Candelabro-08-09-21.jpg',
                              link: '/lustre-candelabro?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Candelabro'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/RS-0840-Lustre-Classico-08-09-21.jpg',
                              link: '/lustre-classico?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Clássico'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/SL-5872-H10-COP-Lustre-Industrial-08-09-21.jpg',
                              link: '/lustre-industrial?sort=mais_vendidos',
                              nome: 'Lustre LED<br>Industrial'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/ARA-15X20-Lustre-de-Parede-08-09-21-v2.jpg',
                              link: '/lustre-de-parede?sort=mais_vendidos',
                              nome: 'Lustre LED<br>de Parede'
                           },
                        ],
                     ],
                  },

                  {
                     categorias: ['/pendente'],
                     navegacao: [
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Kits_Pendentes-19-08-21.png',
                              link: '/kit-pendentes?sort=mais_vendidos',
                              nome: 'Kits Pendente'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente industrial-19-08-21.png',
                              link: '/pendente-industrial?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Industrial'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente Aramado-19-08-21.png',
                              link: '/pendente-aramado?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Aramado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente Cone-19-08-21.png',
                              link: '/pendente-cone?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Cone'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente de Madeira-19-08-21.png',
                              link: '/pendente-de-madeira?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Madeira'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente_gota-19-08-21.png',
                              link: '/pendente-gota?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Gota'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente Redondo-19-08-21.png',
                              link: '/pendente-redondo-led?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Redondo'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente Quadrado-19-08-21.png',
                              link: '/pendente-quadrado?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Quadrado'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente Cilindrico-19-08-21.png',
                              link: '/pendente-cilindrico?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Cilíndrico'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Pendente_Tulipa-19-08-21.png',
                              link: '/pendente-tulipa?sort=mais_vendidos',
                              nome: 'Pendente LED<br>Tulipa'
                           },
                        ],
                     ],
                  },

                  {
                     categorias: ['/acessorios-para-leds'],
                     navegacao: [
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Fonte Chaveada LED-19-08-21.png',
                              link: '/fonte-chaveada-led?sort=mais_vendidos',
                              nome: 'Fonte Chaveada LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Interruptor Tomada LED-19-08-21.png',
                              link: '/interruptores-tomadas-led?sort=mais_vendidos',
                              nome: 'Interruptor LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/CB-FL-2-5-BR-100M-28-09-21.png',
                              link: '/cabo-de-energia?sort=mais_vendidos',
                              nome: 'Fios e Cabos LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Soquete-LED-13-10-21.png',
                              link: '/soquete-led?sort=mais_vendidos',
                              nome: 'Soquete LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Emenda-13-10-21.png',
                              link: '/emenda-para-fita-de-led?sort=mais_vendidos',
                              nome: 'Emenda LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Sensor-13-10-21.png',
                              link: '/sensor-de-presenca?sort=mais_vendidos',
                              nome: 'Sensor de Presença LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Rele-13-10-21.png',
                              link: '/rele-fotoeletrico?sort=mais_vendidos',
                              nome: 'Relé Fotoelétrico LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Amplificador-13-10-21.png',
                              link: '/amplificadores-led?sort=mais_vendidos',
                              nome: 'Amplificador LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Chip-13-10-21.png',
                              link: '/chip-led?sort=mais_vendidos',
                              nome: 'Chip LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Driver-13-10-21.png',
                              link: '/drivers?sort=mais_vendidos',
                              nome: 'Driver LED'
                           },
                        ],
                        [
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Conector LED-19-08-21.png',
                              link: '/conectores-led?sort=mais_vendidos',
                              nome: 'Conector LED'
                           },
                           {
                              imagem: 'https://cdn.awsli.com.br/257/257163/arquivos/Controle-13-10-21.png',
                              link: '/controles?sort=mais_vendidos',
                              nome: 'Controle LED'
                           },
                        ],
                     ],
                  },
            
               ]

               let objetoFiltrado = objeto.filter(item=> item.categorias.includes(window.location.pathname));

               return objetoFiltrado[0];

         },

         gerarHTML(){

               let objeto = this.gerarObjeto();

               if(!objeto){
                  return;
               }

               let navegacao = objeto.navegacao.map(item=> {

                  let htmlItems = item.map(categoria=> {

                     return `
                        <div class="navegacao-categoria-item ${window.location.pathname == categoria.link.split('?')[0] ? 'navegacao-active' : ''}">
                           <a href="${categoria.link}" class="navegacao-categoria-item-conteudo">
                              <div class="navegacao-categoria-item-imagem">
                                    <img src="${categoria.imagem}" title="${categoria.nome}" alt="${categoria.nome}">
                              </div>

                              <div class="navegacao-categoria-item-nome">
                                    <span>${categoria.nome}</span>
                              </div>
                           </a>
                        </div>
                     `;

                  });

                  return `
                     <div class="navegacao-categoria-items ${ htmlItems.length > 1 ? 'navegacao-categoria-items-custom' : 'navegacao-categoria-items-padrao' }">
                        ${htmlItems.join('')}
                     </div>
                  `;

               }).join('');

               return `
                  <div class="navegacao-categoria">
                     <div class="navegacao-categoria-conteudo">
                           <div class="navegacao-categoria-lista carousel-target">${navegacao}</div>
                     </div>
                  </div>
               `;

         },

         ativarCarousel(){

               $('.navegacao-categoria .carousel-target').owlCarousel({
                  loop:false,
                  margin:10,
                  autoHeight: true,
                  nav:true,
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

               $('.pagina-categoria #corpo .conteudo > .ordenar-listagem.topo').before(html);

               this.ativarCarousel();

         }

      }

      NavegacaoCategoria.renderizar();

   },

   textosRodapeCategoria(){

      let TextosCategoriaRodape = {

         gerarObjeto(){

            let objeto = {

               ['3217072']: { //id do ambiente
                  html: `
                     <h2>Modelos de luminárias</h2>
                     A Iluminim possui a maior linha de <strong>luminária</strong> do país e conta com modelos de luminárias para as mais diversas ocasiões. Os <b>ambientes externos residenciais</b> necessitam de <a href="/arandela-led?sort=mais_vendidos">Arandelas</a> para efeitos decorativos e iluminação de passagem. Os <b>locais externos comerciais</b> já prezam por uma <a href="/luminarias-publicas-led?sort=mais_vendidos">Luminária Pública</a> de última tecnologia que atenda as expectativas e ilumine com autoridade o local. Os <b>ambientes internos</b> são bem atendidos com as <a href="/plafon-led?sort=mais_vendidos">Luminárias Plafon</a>, <a href="/lustre?sort=mais_vendidos">Lustres</a> e <a href="/pendente?sort=mais_vendidos">Pendentes</a>, por exemplo. Elevando o conceito de <b>iluminação principal e decorativa</b> a níveis pouco explorados no Brasil.<br><br>
                     Conheça também, nossa linha de <strong>luminárias</strong> para necessidades <b>específicas</b>, como: <a href="/luminarias-posto-led?sort=mais_vendidos">Luminária para Posto</a>, <a href="/luminaria-de-mesa?sort=mais_vendidos">Luminária de Mesa</a>, <a href="/luminaria-industrial?sort=mais_vendidos">Luminária High Bay Industrial</a> e <a href="/luminaria-solar-led?sort=mais_vendidos">Luminária Solar</a>. Todas com a tecnologia LED, garantindo o cumprimento das expectativas em economia, performance e preço baixo.<br><br>
                     Não perca tempo e adquira agora os melhores Plafons LED do mercado, obtendo economia, energia e qualidade incomparável. Fique atento: Todos os nossos Plafons de LED de embutir e sobrepor, possuem fator potência real, alto índice de reprodução de cor, nitidez máxima na geração de luz limpa e todos os itens para funcionamento imediato após a instalação. Ainda, todos os nossos produtos são testados antes do envio e possuem acondicionamento adequado, através de embalagens personalizadas e demais itens de segurança, garantindo uma entrega perfeita e uma experiência de compra amplamente satisfatória. Descubra agora mesmo a tecnologia LED na Iluminim e faça parte da maior loja de LEDs do País. Conheça tipos de iluminação LED ideais para cada ambiente, <a href="http://blog.iluminim.com.br/conheca-os-tipos-de-iluminacao-led-ideais-para-cada-tipo-de-ambiente/">Clique aqui!</a>
                  `,
               },

               ['881696']: {
                  html: `
                     Em ambiente mais descontraídos, a <a href="/fita-led-rgb">Fita LED RGB</a> pode ser usada para uma iluminação colorida e controlada por controle remoto a até 10 metros de distância. Encontre os modelos <a href="https://www.iluminim.com.br/kit-fitas-led-5050?sort=mais_vendidos">Fita LED RGB 5050</a> e a <a href="https://www.iluminim.com.br/kit-fitas-led-3528?sort=mais_vendidos">LED SMD 3528</a> na Iluminim e não deixe de garantir o seu! As fitas têm tamanhos de 5 até 30 metros, são autoadesivas, protegidas por silicone e prontas para uso assim que desembaladas. Você ainda conta com 14 meses de garantia e fabricação dentro dos padrões de regulamentação. Compre online e tenha uma experiência incrível com a Iluminim!
                  `
               },

               ['881062']: {
                  html: `
                     A nossa loja online de lâmpadas LED possui <strong>Spot de LED</strong> disponível no formato <b><a href="/spot-led-redondo?sort=mais_vendidos">redondo</a></b>, que confere ao ambiente um design mais <i>clean</i>, e também no modelo <b><a href="/spot-led-quadrado?sort=mais_vendidos">quadrado</a></b>, que aumenta o destaque das peças no(s) ambiente(s), os <b>spots</b> são ideais para utilização em sancas de gesso, móveis, banheiros, cozinhas, quartos, escritórios e etc. A maioria dos modelos conta com o <b>foco direcionável</b> que permite uma maior flexibilidade de utilização, tendo em vista que é possível apontar o feixe de luz para o local desejado. Os modelos de <strong>spots de LED</strong> disponíveis em nossa loja virtual possuem dois tipos de acabamento: o <b>branco</b>, que confere maior discrição às peças, e também o acabamento em <b>alumínio</b>, que proporciona maior destaque às mesmas. Vale lembrar que um dos maiores diferenciais da Iluminim é comercializar produtos prontos para funcionamento. Estes <strong>spots de LED</strong>, em relação aos spots tradicionais, possuem vida útil ampliada, alto índice de economia, índice de reprodução de cor adequado e todas as demais proteções para a saúde que o LED proporciona, como a não emissão de raios ultravioleta e infravermelho. Não perca tempo, desfrute agora mesmo da <b>agilidade, facilidade e custo benefício</b> de ser cliente Iluminim!
                  `
               },

               ['1220897']: {
                  html: `
                     Surpreenda-se e utilize o Balizador LED como luz de destaque em decks, escadas e pisos. Sua instalação é simples, basta embuti-lo em qualquer tipo de solo. Por possuir acabamento blindado pode ser tranquilamente instalado em áreas externas, seu índice de proteção IP67 garante ultra resistência a água, umidade e poeira e demais eventos climáticos. O Balizador LED Embutir é composto por materiais de alumínio e aço, além disso possui dissipador de calor otimizado, dessa forma é protegido contra o superaquecimento, o que prolonga sua vida útil, que chega até 30.000 horas. Os modelos disponíveis são o COB e o tradicional LED SMD. O primeiro possui vários chips encapsulados formando um módulo de led único e o segundo os chips são distribuídos de acordo com a potência, o Spot Balizador LED 3w com 3 leds, Spot Balizador LED 5w com 5 leds e assim por diante. Garanta uma iluminação de qualidade para seu piso e jardim, adquira Balizador LED e não preocupe-se com trocas frequentes e gastos altos com energia elétrica.
                  `
               },


               ['1947686']: {
                  html: `
                     Na Iluminim você encontra <strong>Refletor Micro LED Ultra Thin</strong> de 10w, 20w, 30w e 50w. Modelo com design <b>ultra fino</b>, compacto e com <b>alta potência SMD</b>. Seu material,  de alumínio e vidro temperado, garante um acabamento impecável e resistente. É possível instalar o <strong> Refletor Micro Led Ultra Thin</strong> em locais externos e internos, o fator potência <b>IP65</b> garante resistência a chuva e  poeira, assim sendo muito utilizado em fachadas, avenidas, jardins e locais expostos ao tempo. Ilumine ambientes de até 8m² com <b>Refletor Micro LED Ultra Thin 50W Branco Frio</b>, já para áreas menores escolha entre o <b>Micro LED</b> de 10w, 20w ou 30w. Não preocupe-se com gastos extras de reposição ou trocas, a expectativa de vida útil do <strong>Refletor Micro LED Ultra Thin</strong> chega até <b>50.000 horas</b>, a maior do mercado LED.  Adquira seu <b>Holofote Ultra Thin</b> e ilumine com <b>eficiência, economia e fator potência real.</b>
                  `
               },

               ['1170425']: {
                  html: `
                     Caso busque mais destaque para o seu lustre, abajur, pendente ou candelabro, utilize Lâmpadas de Vela leitosas, que possuem o corpo totalmente branco e aparecem com maior destaque no ambiente. Já se necessitas de maior discrição por parte da lâmpada, para que o objeto principal possua maior destaque, utilize as Lâmpadas de Vela transparentes, que são mais discretas. Em nosso e-commerce você encontra toda a linha LED para decoração de ambientes internos e externos, como: Fitas de LED, Spots LED, Luminárias Plafons LED, Refletores LED, Arandelas LED e muito mais. Entenda por que a Iluminim é líder de mercado no país e a primeira loja a comercializar LEDs com excelência e qualidade inquestionáveis. Aproveite agora nossas promoções com os menores preços de mercado!
                  `
               },

               ['1139629']: {
                  html: `
                     Atualmente, as Tubulares LED são indicadas para a realização do Retrofit de iluminação e possuem um Payback extremamente curto. O Retrofit é um termo utilizado em engenharia para nomear o processo de modernização de algum produto que já esteja ultrapassado ou possua tecnologia superior, ou seja, quando existe troca de lâmpadas fluorescentes por Lâmpadas Tubulares LED, existe um processo de Retrofit. Já o termo Payback refere-se a relação “investimento x retorno” sobre o investimento. Neste caso, as Tubulares de LED, devido a agressiva economia que proporcionam, possuem um tempo de Payback máximo de 1 ano. Ou seja, em 1 ano, é possível, com a economia de energia, realizar o pagamento do investimento nas lâmpadas tubulares de LED. Os demais anos de vida útil de suas lâmpadas serão, em sua totalidade, de economia. Sem necessitar de reator, esse tipo de lâmpada é de fácil instalação e já vem pronto para utilização. Atualize-se e comece agora mesmo a desfrutar da inovação LED.
                  `
               },

               ['1058425']: {
                  html: `
                     O <strong>Spot Dicróica LED Quadrado</strong> é uma alternativa de iluminação para uso <b>embutido</b> em gesso, sanca, PVC e muito mais. Na Iluminim é possível encontrá-lo em dois materiais: base de alumínio e alumínio branco.  Seu ângulo de abertura é ótimo para criar pontos de luz e <b>destacar ambientes</b>. A dica é instalar<strong> Spot Dicróica LED Quadrado</strong> em diversos pontos, assim a iluminação distribui-se sem sobrecarregar o local. Os <b>spots</b> da Iluminim são <b>completos</b> com driver e presilhas para fixação, não sendo necessário custos extras no momento da instalação.  Escolha entre a potência de 3w, 5w, 7w até 18w do <strong> Spot Dicróica LED Quadrado</strong>. Sua <b>versatilidade</b>  permite o uso em quartos, cozinhas, salas, banheiros e locais comerciais. As possibilidade são muitas, identique qual é a ideal para você!
                  `
               },

               ['877731']: {
                  html: `
                     Os <strong>Refletores de Led</strong> comercializados pela Iluminim são produzidos segundo as normas de certificação de qualidade CE, Rohs, com componentes seguros a fim de garantir toda proteção contra eventos climáticos e rendimento elevado. 
                     Adquira agora mesmo seu <strong>Refletor de LED</strong> através de nossa loja virtual, com toda a segurança possível e receba seu produto com agilidade e rapidez. 
                     Nossa empresa entrega em todo território nacional, há mais de 6 anos e possuí as melhores certificações de atuação com excelência em comércio eletrônico no Brasil. 
                     Descubra a <b>tecnologia LED</b> na Iluminim e conheça nossos preços e condições de pagamento imperdíveis. Saiba mais sobre nossa <b>entrega à jato</b> e aproveite nossas promoções!
                  `
               },

               ['1219414']: {
                  html: `
                     <b>Por que a nossa loja online de lâmpadas LED Iluminim é líder em vendas?</b> Uma equipe treinada e especializada nos melhores cursos de iluminação LED, produtos robustos, linhas definidas, garantia diferenciada, marca consolidada, preço extremamente competitivo, custo-benefício e confiabilidade são benefícios que somente nossa empresa oferece para o cliente final que busca tecnologia LED. Atualmente, existem muitas empresas online sem selos de segurança como Site Blindado, eBit e Trustvox, comercializam produtos de baixa qualidade no e-commerce dizendo serem de alta qualidade e&nbsp;fazendo com que a tecnologia LED não possua proveito máximo, fornecendo o que de melhor possui: economia e desempenho.A Iluminim possui os melhores selos de avaliações da internet e certificados que garantem segurança total nos seus dados e transações.
                  `
               },

               ['3327946']: {
                  html: 'Nossa <strong>Iluminação Industrial</strong> é garantia de alto desempenho com o melhor custo benefício da internet. Possuímos produtos com tecnologia de ponta, como nossas Luminárias de Emergência LED, Refletores MicroLED e Lâmpadas de Alta Potência, tudo com larga garantia e as melhores condições de pagamento do mercado. A linha iluminação led industrial preço baixo da Iluminim, além de todos nossos outros produtos passam por um preciso e cuidadoso processo de embalagem e despacho, garantindo assim uma entrega rápida e segura. Aproveite nossas condições e receba sua <strong>Iluminação Industrial</strong> com frete grátis hoje mesmo!'
               },
            
               //Câmera LED Bullet
               ['2120376']: {
                  html: 'O melhor custo beneficio para garantir uma residência ou comércio seguro é com a <strong>Câmera LED Bullet</strong>. Nossa camera bullet full HD é à prova d\'água, tem larga garantia e parcelas de até 12x sem juros. Com um minucioso processo de embalagem e despacho de qualidade, nossos profissionais são garantia de uma entrega segura e rápida. Com condições imperdíveis, receba sua <strong>Câmera LED Bullet</strong> com frete grátis hoje mesmo!'
               },
            
               //Câmera de Segurança Wifi 
               ['2120368']: {
                  html: 'As <strong>Camera de Segurança WiFi</strong> tem garantia total de 14 meses e está disponível à pronta entrega. Nossa camera de segurança wifi interna é ideal para manter seguro as residências e comércios, sua tecnologia top de linha eleva seu patamar e pesa na hora da escolha. O melhor custo beneficio da internet em <strong>Camera de Segurança WiFi</strong> está aqui. Adquira já a sua e receba rapidamente em sua casa, graças a nossa logística de envio expresso. Confie na líder!'
               },
            
               //Lâmpada LED E14
               ['2855954']: {
                  html: 'As melhores condições da internet fazem dessa <strong>Lampada LED E14</strong> uma oportunidade única para você acertar em cheio na sua iluminação. Com parcelas em até 12x sem juros, garantia de 14 meses, entrega ultra rápida e embalagem segura, a Iluminim é garantia de confiança na hora da compra. Então, aproveite as ofertas imperdíveis de <strong>Lampada LED E14</strong> e garanta já a sua. Confira agora!'
               },
            
               //Mini Refletor LED
               ['3549288']: {
                  html: 'Além das vantagens já apresentadas, o <strong>Mini Refletor LED</strong> apresenta alta luminosidade, entregando elevada taxa de lúmens reais do produto. Tanto o Mini Refletor LED 50W e Mini Refletor LED 100W, quanto as demais potências de 30W e 200W, dispõe de garantia total de 14 meses, bivoltagem e 50 mil horas de vida útil. A já conhecida entrega à jato da Iluminim está também presente para essa linha de produtos, bem como todas as demais. Aproveite enquanto durar o estoque de <strong>Mini Refletor LED</strong> e leve o seu!'
               },
            
               //Plafon LED 18W
               ['2615434']: {
                  html: 'Mas afinal, plafon LED equivale a quantos watts? 180W incandescente é a resposta. Adquirir <strong>Plafon LED 18W</strong> é a garantia da melhor escolha, a maior economia e melhor qualidade para seu projeto. O Plafon de LED 18W da Iluminim está disponível também em kits com preços especiais, ajudando a você economizar mais ainda. Nosso envio é o mais rápido do Brasil, além de possuirmos frete grátis em compras acima de R$ 299,00. Corra e garanta já o seu <strong>Plafon LED 18W</strong> agora mesmo!'
               },
            
               //Lampada LED Amarela
               ['2855962']: {
                  html: 'Na procura de <strong>Lampada LED Amarela</strong>? Dispomos em modelos de potência convencional como: lampada led amarela 5w, lampada led amarela 9w e lampada led amarela 15w, além de modelos de potência de super desempenho como: lampada led amarela 100w e muito mais. A Lampada Amarela LED da Iluminim é garantia de produtividade a baixo custo por longo tempo. Comprar <strong>Lampada LED Amarela</strong> aqui, é certeza de um ótimo investimento. Garanta a sua!'
               },
            
               //Câmera Segurança LED
               ['1763983']: {
                  html: 'Em busca de Camera de Segurança preço baixo e alta qualidade? A tecnologia da nossa linha de <strong>Camera de Segurança</strong> é de ponta e temos o menor preço da categoria no mercado. Aproveite e economize ainda mais com o Kit Camera de Segurança da Iluminim, levando mais, você paga menos. Dentre as vantagens de nossa linha, ainda é possível monitorar a camera de segurança ao vivo, em tempo real. Para isso, também não poderia deixar de contar com uma Camera de Segurança HD para nítidas imagens de alta resolução. Qualidade, preço e entrega à jato para <strong>Camera de Segurança</strong> é só aqui. Compre já!'
               },
            
               //Arandela LED
               ['1511500']: {
                  html: 'Um dos modelos de luminárias mais versáteis é, sem dúvidas, a <strong>Arandela</strong>. Super despojado, o produto funciona bem com diferentes tipo de decoração, sendo tanto utilizado como arandela de parede externa, como arandelas internas, em locais como o quarto, banheiro e demais ambientes. Depois de tanto buscar, garantimos a melhor compra. Entrega expressa, preço baixo e uma <strong>Arandela</strong> de alto nível. Confira nossa linha!'
               },
            
               //Lampada de LED
               ['3706942']: {
                  html: 'A <strong>Lampada de LED</strong> da Iluminim também está disponível em um abundante número de potências, como a requisitada Lampada de LED 12W, por exemplo. Muito além do convencional, disponibilizamos também uma iluminação mais específica, como no caso da busca por Lampada de LED Automotiva. Nossa Lampada de LED H4, H7 e derivadas provam da grande variedade na categoria. Além disso, garantimos uma compra 100% segura e o envio mais rápido do Brasil. <strong>Lampada de LED</strong> de qualidade garantida e baixo preço é aqui. Confira nossa linha!'
               },
            
               //Pendente Aramado
               ['2158823']: {
                  html: '<strong>Pendente Aramado</strong> de alta qualidade com o menor preço do mercado é na Iluminim. Recuse pendentes feitos de materiais de baixa qualidade, aqui o pendente aramado diamante tem garantia de excelência. Com entrega rápida, o lustre pendente aramado é embalado cuidadosamente e despachado de imediato, tornando-o a melhor opção online. Confie em quem entende e adquira hoje mesmo os seus pendentes aramados top de linha. Não perca!'
               },
            
               //Lustre Pendente
               ['3722393']: {
                  html: 'Sempre muito procurado, o <strong>Lustre Pendente</strong> chega a você com um preço abaixo do mercado, mas mantendo uma qualidade de ponta no ramo. O Cristal K9, material em que é feito, representa a mais pura qualidade do lustre. Confira agora mesmo a maior linha lustre para sua residência ou comércio que contam com: lustre pendente cozinha, quarto, sala e demais ambientes. Garanta já o seu <strong>Lustre Pendente</strong> imediatamente!'
               },
            
               //Lustre para Sala
               ['3722433']: {
                  html: 'Compre lustre para sala barato e confiável na Iluminim. Nossa entrega é a mais rápida da internet e oferece a você uma experiência única de compra. Aqui você encontra lustre para sala cristal em diversos modelos diferentes, com o menor preço online e as melhores condições de pagamento, podendo parcelar em até 12x sem juros e com frete grátis. <strong>Lustre para Sala</strong> com qualidade e preço imperdíveis! Garanta o seu!'
               },
            
               // Decoração
               ['3721071']: {
                  html: 'Precisando adquirir produtos para decoração de casamento, decoração de festa, decoração de aniversário, decoração de natal ou somente uma decoração simples para sua residência? Você pode contar conosco para investir nos melhores produtos para decoração de eventos e demais locais. Com um processo de compra super rápido, a Iluminim preza por uma experiência única, com as melhores condições de pagamento do mercado, podendo parcelar sua compra em até 12x sem juros, contando com frete grátis e entrega à jato. Todos nossos produtos obtém certificados internacionais e larga garantia. Aproveite as super promoções em quem é referência no mercado e compre já sua decoração e iluminação aqui!'
               },
            
               // Pendente Gota
               ['2698517']: {
                  html: 'Se você procura por Pendente Gota Preto Fosco ou Branco com qualidade garantida e larga garantia, não precisa mais procurar. Aqui você acha Pendente de Gota com baixo preço e as melhores condições de pagamento online. Faça uma boa compra, segura e garantida na Iluminim. Economize mais adquirindo kit pendente gota em 2, 4 e até 6 unidades. Leve mais pendentes gota e pague menos aqui. Não perca mais tempo e compre ainda hoje a melhor opção de <strong>Pendente Gota</strong> de toda a internet!'
               },
            
               // Plafon LED 25W
               ['2615438']: {
                  html: 'Se você também se pergunta: o plafon led 25w equivale a quantos watts? A resposta é 250w de uma lâmpada incandescente. Ou seja, você economiza muito mais na conta de luz no fim do mês, além de ser um ótimo investimento a longo prazo, pois a tecnologia LED do plafon de embutir 25w e plafon de led sobrepor 25w oferece muito mais horas de vida útil que as outras iluminações convencionais. Outro meio que é possível economizar é levando o kit plafon led 25w que preparamos. Quanto mais unidades de você leva, maior é o desconto. Plafon LED 25w sobrepor 30x30 ou embutir 30x30 com entrega expressa e frete grátis é só na Iluminim.'
               },
            
               // Pendente Industrial
               ['3627149']: {
                  html: 'Destaque a decoração de seu ambiente com luminária industrial pendente. Qualidade top de linha e o menor preço do mercado, você pode contar sempre com a gente. O Lustre Pendente Industrial da Iluminim é ideal para diversos estilos de decoração, e se você está procurando por pendente industrial vintage ou pendente industrial retro, saiba que temos autoridade no assunto. Trabalhamos com a melhor linha de <strong>Pendente Industrial</strong> da internet, com facilidade no pagamento, entrega expressa e super economia. Aproveite nossas super promoções diárias e adquira já o seu!'
               },
            
               // Refletor Micro LED Ultra
               ['2316083']: {
                  html: 'Garanta já um refletor holofote micro LED forte e potente, pelo menor preço do Brasil. O Refletor Ultra LED Iluminim é certeza de um desempenho acima de qualquer outro equivalente do mercado, além disso oferecemos uma larga garantia, para certificar a eficiência do refletor micro LED. No momento da compra, evite imitações, o verdadeiro <strong>Refletor Micro LED Ultra</strong> está aqui e oferece máxima economia para sua conta no final do mês. Para uma total iluminação de um ambiente grande, nossa sugestão fica por conta do Refletor LED Ultra 400w, que detém uma alta taxa de lúmens em seu facho de luz, iluminando em larga escala. Escolha já o seu <strong>Refletor Micro LED Ultra</strong> e acerte na iluminação!'
               },
            
               // Torneira - principal
               ['3721180']: {
                  html: 'Buscando <strong>Torneira</strong> com alta sofisticação, mas sem precisar gastar muito? Nós levamos até você o melhor das torneiras gourmet a um preço justo. Confira agora toda a nossa linha e surpreenda-se! Nossas torneiras banheiro e cozinha estão disponível à pronta entrega e tem o envio ultra rápido. Nosso sistema de embalagem e despacho é o mais rápido e cuidadoso do ramo, buscando sempre a perfeição no processo. Por isso, tenha segurança de um bom negócio e adquira já torneira banheiro e torneira cozinha para sua casa ou comércio e destaque o seu ambiente. Aproveite a promoção!'
               },
            
               // Torneira para Cozinha
               ['3721186']: {
                  html: 'Procurando <b>torneira de pia de cozinha</b> com <b>extrema sofisticação</b> e <b>preço acessível</b>? Aqui tem. Confira todos os nossos modelos e descubra o melhor da linha, como por exemplo: Torneira Monocomando Cozinha (na qual, é identica a funcionalidade da torneira eletrica para cozinha, porém com a opção de regular a temperatura mais facilmente). Toda a linha de torneira cozinha está disponível <b>à pronta entrega</b> e com as <b>melhores condições</b> de pagamento.'
               },
            
               // Torneira para Banheiro
               ['3721184']: {
                  html: 'Toda a linha de torneira para pia de banheiro tem <b>garantia total de 2 anos</b> e entrega expressa garantida pela Iluminim. Não perca a chance e escolha entre a torneira para banheiro cascata, torneira para banheiro quadrada ou entre os demais modelos e estilos que disponibilizamos com o melhor preço para você. Torneira para Banheiro, <b>super sofisticada</b> e com <b>preço justo</b>, só poderia ser aqui. Leve agora mesmo!'
               },

               ['3158475']: {
                  html: 'A maior categoria de <strong>luminária led pública 100w</strong> se encontra na Iluminim. Modelos perfeitos para <b>instalações urbanas</b>, como: ruas, praças, avenidas e parques.<br><br>A iluminação urbana nunca foi tão bem representada até a chegada desta categoria de luminárias. Manter vias públicas bem iluminadas é uma necessidade de convivência urbana, ter uma cidade bem iluminada é um fator muito importante para <b>qualidade de vida</b> dos cidadãos.<br><br>Economia de energia elétrica é sempre um ponto muito lembrado, pois traz muitos benefícios, desde sustentabilidade, contribuindo para o meio ambiente, até vantagem financeira, o que acaba gerando um retorno em outras áreas. Por isso, a Iluminim dispõe de uma categoria especial de <strong>luminárias led públicas 100w</strong>, visando suprir todas as necessidades em iluminação do consumidor.<br><br>Este modelo de luminária pode ser instalado facilmente em postes e contam com ótima fixação, feito por parafusos inoxidáveis e um excelente <b>sistema de vedação</b>, em sua construção feita em alumínio e vidro blindado, que conferem o grau de proteção IP66, índice que aponta total resistência a fortes jatos d\'água e objetos sólidos, como pedras e chuvas fortes, ideal para uso em áreas externas.<br><br>Aproveite as promoções da Iluminim e garanta já sua <strong>luminária pública led 100w</strong> pelo menor preço do mercado e ainda conte com <b>frete grátis</b> para compras acima de R$299,00!'
               },
               
               ['1219424']: {
                  html: 'A sua loja online de lâmpadas LED tem uma dica para você: Modelos de Refletores LED Sensor de Presença linha MicroLED são perfeitos para utilização em entradas de garagem ou passagens que necessitem de iluminação ativa. Isso pois podem ser acionados diversas vezes, proporcionando menor consumo de energia e flexibilidade incrível, diferente de Refletores convencionais halógenos que queimam facilmente com esse tipo de utilização.<br><br>Esta praticidade proporcionada por este dispositivo acoplado diretamente neste <strong>refletor holofote com sensor de presença</strong> aumenta muitos fatores que são muito importantes, como: segurança, rapidez e economia. Tais fatores que consistem em: levar mais <b>segurança</b> com a ativação automatizada da luz;<br>ao mesmo tempo torna o ascendimento muito mais rápido, por conta de não precisar de um interruptor ou um plug pra ligá-lo;<br>um <b>grande aumento na economia</b>, visto que o desligamento também é automático, o que gera uma redução muito grande no consumo de energia elétrica.<br><br>Este produto possui 3 tipos de acionamentos automáticos para configuração de acordo com sua necessidade de segurança. Aproveite a extensa linha de Refletores LED Sensor: 10W, 20W, 30W, 50W e 100W disponíveis na cor Branco Frio. <br>Sua construção é feita em alumínio e vidro blindado, que garantem altos índices de proteção, como os selos <b>IP65 e IP66</b>, comprovando sua resistência a àgua, poeira e arranhões. Este modelo de refletor led conta com uma pintura eletrostática, a qual cria uma camada muito resistente para o produto. <br>Comece agora mesmo a economizar com segurança e qualidade e compre com quem é líder em LED.'
               },
               
               ['3158472']: {
                  html: '<b>Luminária LED Pública 150w</b><br/>Muita economia e segurança para as vias públicas das cidades com esta luminária LED pública com 150w de potência. A Iluminim conta com as melhores versões disponíveis no mercado, navegue por esta categoria, descubra o que há de mais <b>moderno</b> em <strong>luminaria led publica 150w</strong> e escolha já o seu produto de acordo com a sua necessidade.<br/><br/><b>Tecnologia de ponta</b><br/>Esta <strong>luminaria publica 150w led</strong> conta com a <b>última geração da tecnologia LED</b>, o que resulta em uma série de benefícios ao cliente. A economia gerada por esse tipo de iluminação é muito superior, quando comparada à outras tecnologias de iluminação. Pesquisas feitas por especialistas em tecnologias de iluminação apontam a <b>incrível redução no consumo de energia elétrica</b> que o led traz, como o fato de consumir 80% menos energia que uma luminária convencional.<br/><br/>A sustentabilidade destas luminárias é outro ponto muito importante, já que os microchips emissores de luz não emitem raios UV, o que é muito agradável para os olhos humanos e também ao meio ambiente, pois não é poluente.<br/><br/><b>Popular entre muitas cidades</b><br/>Muitas cidades já usam um ou mais modelos de <strong>luminaria publica de led 150w</strong> desta categoria da Iluminim. <b>Prefeituras e demais órgãos públicos</b> optam por investir nestas luminárias para iluminação pública. Desde a primeira compra já é possível um grande retorno sobre o investimento, o que leva cada vez mais cidades adotarem esta tecnologia.<br/><br/><b>Fácil Instalação</b><br/>Desenhada para o uso externo, com uma <b>excelente vedação</b>, que a protege contra fortes chuvas, como tempestades, poeira e também contra objetos sólidos, como pedras, granizos.<br/><br/>Em sua embalagem constam todos os itens necessários para a instalação, sua fixação é feita por parafusos inoxidáveis que não corroem com as variações climáticas, ideal para a instalação em postes de iluminação pública.<br/><br/>Navegue pela categoria de luminárias públicas 150w, compre com as mais exclusivas condições de compra da Iluminim, como: <b>frete grátis</b> para compras acima de R$299,00, parcelamento em até <b>12x sem juros</b> ou desconto de 10% para pagamento no boleto à vista.'
               },
               
               ['3158477']: {
                  html: 'Ruas, praças, estacionamentos e muitos outros ambientes públicos muito mais iluminados com o uso desta <strong>luminária led pública 200w</strong>.Nesta categoria você encontra as melhores opções de <strong>luminária publica de led 200w</strong> disponíveis no mercado.<br/><br/><b>Popular em muitas cidades</b><br/>Prefeituras, companhias privadas que contam com espaços externos de grande área e demais orgãos públicos, já investem em iluminação LED, utilizando luminárias públicas de 200w. Dentre esses compradores se encontram grandes cidades, que relatam todos os benefícios que esta <strong>luminaria led para iluminação publica 200w</strong> lhe oferece, desde o baixo custo na hora da compra, até a grande economia gerada a médio e longo prazo.<br/><br/><b>Garantia de qualidade e segurança</b><br/>As luminárias desta categoria são construídas em alumínio, acrílico e vidro, materias que são resistentes e não acumulam sujeira. Estes itens são vedados para impedir a entrada d\'água em seu interior, evitando ser a causa de mau funcionamento, também são à prova de poeira, que também pode danificá-la. A soma desses fatores de proteção resulta em um alto índice de proteção, que garante, com o Selo IP (Índice de Proteção) a sua grande durabilidade.<br/><br/><b>Longa duração com alto desempenho</b><br/>A certeza de um ótimo investimento com retorno desde curto até longo prazo é um dos principais motivos que leva muitos clientes à compra deste produto. Sua vida útil com incríveis 50.00 horas eleva consideravelmente o retorno sobre o investimento.<br/><br/>Faça como as grandes cidades do país e junte-se aos consumidores super satisfeitos desta <strong>luminária LED pública 200w</strong> comprando-a em nosso site com as melhores condições do mercado!'
               },
               
               ['2751055']: {
                  html: 'A maior categoria de <strong>holofote de led para jardim</strong> com tecnologia MicroLED. Muitas variações de cores e potências perfeitas para iluminar os mais diversos tipos de jardins, externos ou internos, como os de inverno.<br/><br/><b>Os refletores mais econômicos do mercado estão aqui</b><br/>Nossos refletores utilizam a tecnologia MicroLED em seu funcionamento, tecnologia essa, que garante uma <b>altíssima taxa de rendimento</b>, comparada inclusive ao LED comum, pois o MicroLED conta com microchips que ocupam menos espaço dentro do refletor e garante uma luz indireta, sendo assim muito eficaz a sua iluminação. Outro fator é a redução no consumo de energia elétrica, redução que é vista em sua conta de luz, com uma grande <b>economia</b> à cada mês.<br/><br/><b>A Resistência e Durabilidade que o jardim pede</b><br/>Perfeitos para serem instalado em áreas externas, iluminando arbustos, grandes árvores, flores, e obras de arte. Cada refletor desta categoria contém um selo que indica seu grau de proteção, o IP (Índice de Proteção). A grande maioria conta com o <b>IP66</b>, índice que confere grande resistência à objetos pontiagudos, infiltração de poeira e também o torna <b>à prova d\'água</b>. Isso se dá ao material com o qual cada <strong>refletor micro led solar para jardim</strong> é construído, são eles: o alumínio e <b>vidro blindado</b>, ambos materiais ultra resistentes.<br/><br/><b>Decoração estonteante</b><br/>Pequenos jardins se tornam imensos, com um bom jogo de luzes, o <strong>holofote led para jardim</b> proporciona isso. Flores com <b>cores mais vivas</b>, mesmo à luz do dia, arbustos criam formas incríveis, com a iluminação brilhante e uniforme destes refletores.<br/><br/>Ilumine seu jardim com nossos modelos de <strong>holofote de led para jardim</strong> e ainda aproveite as condições exclusivas da Iluminim, recebendo seus pedidos em casa com toda a segurança do <b>frete especializado</b> da loja!'
               },
               
               ['3217557']: {
                  html: '"Pensando em investir em iluminação LED para sua casa ou ambiente comercial, a Iluminim tem a melhor solução.<br/>Diversas opções de <strong>plafon de embutir led retangular</strong> presentes nesta categoria dedicada.<br/><br/><h5>Iluminação Perfeita</h5><br/>Luminárias como as desta categoria entregam uma luz uniforme e clara, dado a sua construção e forma como são distribuídos os microchips de LED. Capazes de iluminar ambientes de forma eficaz e agradável, gerando luz indireta, o que traz mais conforto ao usuário, sendo muito buscadas para uso em escritórios, local que exige uma iluminação do tipo. <br/><br/><h5>O mais econômico do mercado</h5><br/>Os modelos de <strong>plafon led de embutir retangular</strong> usam o que há de mais moderno em tecnologia LED, garantindo o máximo de redução no consumo de energia elétrica. Muitos consumidores relatam satisfação em usar luminárias deste tipo, certeza de um ótimo investimento. Garantia disso é a aparição dos resultados à partir do primeiro mês de uso, sendo notável na conta de luz um corte de até 80% em gastos.<br/><br/><h5>Design Versátil e Moderno</h5><br/>Suas bordas pretas, caracterizam um ar moderno e elegante, criando uma grande gama de possibilidades de uso. Salas de estar, escritórios e até mesmo banheiros podem contar com o toque minimalista destas luminárias. Por ser de embutir, aumenta a discrição do produto a mantendo no mesmo nível do forro, criando uma fonte de luz com aspecto natural.'
               },

               ['3162568']: {
                  html: 'A maior variedade de <strong>led para quarto</strong> é só na Iluminim. Aqui você encontra inúmeros modelos de produtos led para colocar no quarto. Temos disponíveis desde de <strong> lâmpada de led para quarto</strong> até fitas de led.<br/><br/> O quarto é uma das partes mais importantes da casa, pois nos abriga em uma das horas mais essenciais, a do descanso. Nada melhor do que uma <b>boa iluminação</b>, com todo o controle e comodidade para proporcionar o máximo do conforto e bem-estar. E uma decoração bem elaborada com <b>iluminação LED</b> é indispensável, pois lhe possibilita combinar economia com tecnologia e tornar o ambiente mais confortável. A flexibilidade de uso do LED é imensa, você pode aplicar plafons, instalar fita de led em seu forro ou nos rodapés, até mesmo em seu armário, criando um estilo muito moderno. Os spot led de trilho estão <b>muito em alta</b> em projetos de decoração e arquitetura do mundo todo, por seu design despojado e sofisticado, que nos levam a lembrar de grandes estúdios de cinema.<br/><br/> Além de toda a praticidade dos produtos desta categoria, todos contam com <b>tecnologia LED de última geração</b>. Obtenha uma redução no consumo de energia de até 80% utilizando esta tecnologia, sem contar na economia na conta de luz. Os produtos LED são muito duradouros, devido á sua construção com materiais de excelente qualidade, como o caso das lâmpadas, que têm a parte externa em plástico, evitando a quebra e caso de quedas e permitindo o manuseio logo após serem desligadas, devido ao chip LED que esquenta muito menos que as lâmpadas convencionais.'
               },
               
               ['3366570']: {
                  html: 'Aqui na Iluminim você encontra muitas opções de <strong>fita de led para quarto</strong> com os melhores preços do mercado LED do país.<br/><br/> <b>Decoração super moderna</b><br/> As fitas de led são ótimas para usar em móveis de qualquer tipo e, no quarto, existem incríveis posibilidades para isso. Ela pode ser instalada em armários, mesas de computador, e até mesmo criar uma iluminação personalizada em uma cabeceira ou em baixo da cama, criando um efeito aconchegante, levando mais conforto ao cômodo. Crie muitas ambientalizações com as nossas versões de fita led, que são: Branco Frio, Branco Quente, Azul, Vermelha, Verde, RGB, sendo a última acompanhando um controle remoto que possibilita a criação de efeitos incríveis de iluminação!<br/><br/> <b>Faça você mesmo</b><br/> Uma sequência de vantagens, desde o momento da compra até a hora de apagar a luz! Compre pelo site, conte com as condições exclusivas que só a Iluminim oferece, receba seu pedido em casa e instale você mesmo sem precisar de ferramentas complexas. Todos os modelos de <strong>fita de led para quarto</strong> têm em seu verso uma fita adesiva dupla-face de alta fixação para ser colocada em superfícies de qualquer ângulo sem o perigo de descolar e cair, basta retirar a película protetora (liner) e aplicar na superfície desejada, ligar à energia elétrica e aproveitar a ótima sensação que a iluminação da sua fita de led vai trazer.<br/><br/> <b>O melhor da tecnologia LED</b><br/> Desfrute do melhor que a tecnologia LED tem a lhe oferecer com todos os modelos de fita de LED da categoria. Garanta uma economia de até 90% em sua conta de energia elétrica, devido ao baixíssimo consumo do LED, que não usa gases ou filamentos para gerar luz.'
               },
               
               ['2751097']: {
                  html: 'Na Iluminim você encontra uma imensa varietade de <strong>arandela para jardim</strong>. Na hora de combinar funcionalidade, estilo e economia pode haver uma certa dificuldade, a Iluminim lhe ajuda a solucionar esse problema com os produtos presentes nesta categoria.<br/><br/> <b>Praticidade e Economia surpreendentes</b><br/> As <strong>arandelas de jardim</b> são muito buscadas por proporcionarem uma experiência incrível ao usuário com sua facilidade de instalação e sua economia excelente. Sua instalação pode ser facilmente realizada com apenas poucas ferramentas, sendo fixada por parafusos inoxidáveis, que garantem muita segurança, por serem de alta durabilidade e anticorrosivos. Todos os modelos de <strong>arandela led para jardim</strong> presentes nessa categoria contam com a tecnologia LED de mais alta qualidade, entregando uma economia muito notável ao longo do tempo, visto que consomem 80% menos energia elétrica do que arandelas que contam com lâmpadas de outras tecnologias para seu funcionamento.<br/><br/> <b>A decoração mais bonita que o seu jardim já viu</b><br/> Ao instalar uma ou mais arandelas de led em seu jardim você já notará uma diferença muito evidente em sua decoração. Temos disponíveis modelos em tons de luz que vão enriquecer os objetos de seu jardim, como as plantas, árvores, arbustos e esculturas de arte. Vale citar a segurança que o uso de arandelas de LED proporcionam, pois iluminam caminhos e passagens, fazendo com que o perigo de resbalos e tropeços reduza consideravelmente.<br/><br/> Navegue por nossa categoria de <strong>arandelas led para jardim</strong> e invista já na sua, para garantir todos os benefícios deste produto incrível com as melhores condições, que só a Iluminim lhe proporciona!'
               },
               
               ['2920287']: {
                  html: 'A Iluminim conta com uma grande variedade de <strong>luminárias tartaruga led</strong><br/><br/> <b>Prático e versátil</b><br/> De fácil instalação e manuseio, a <strong>luminária tartaruga led</strong> ganha uma grande fama entre os consumidores. Seu design inconfundível que lembra o casco de uma tartaruga (razão de seu nome) lhe dá um ar delicado e atemporal, lhe possibilitando ser usada em muitos tipos de decoração. Sua instalação é muito simples, necessitando apenas de uma furadeira e uma chave philips, em sua embalagem contém todos os itens para a sua instalação. <br/><br/> <b>A Luminária Tartaruga na decoração</b><br/> Como já dito anteriormente, a sua versatilidade é imensa, podendo transitar em muitos projetos de decoração dos mais variados estilos. Este modelo de arandela entrega uma iluminação uniforme e de alta qualidade, graças à tecnologia LED presente na luminária e está disponível em muitas versões de potência e cor de luz, possibilitando criar muitas ambientalizações diferentes.<br/><br/> <b>Economia imbatível</b><br/> O LED proporciona uma economia consideravelmente grande na conta de luz, dado à redução de consumo de energia elétrica de 80%, sem contar sua longa vida útil, que dura em média 50.000 horas. E a Iluminim lhe garante a economia na hora da compra, certificando-se de ter os melhores preços do mercado.<br/><br/> Compre na Iluminim e garanta as melhores condições de pagamento presentes no mercado LED, pague em até 12x sem juros ou então com 10% de desconto à vista no boleto.'
               },
               
               ['1807604']: {
                  html: '<b>Como acertar na ambientalização?</b><br>A função do lustre vai muito além da iluminação, já que é um produto extremamente sofisticado e peça-chave de muitas decorações. Você pode personalizar seu ambiente utilizando diferentes estilos de lustres e cor de luz nas lâmpadas usadas. Utilize as <b>lâmpadas branco frio</b> para um tom mais sóbrio, claro e para destacar objetos. Outra opção é usar as <b>lâmpadas branco quente</b> em seu lustre, para levar um ar mais aconchegante, amena, ideal para lobbies, salas, etc. A terceira possibilidade, é utilizar as <a href="/led-retro?sort=mais_vendidos"><b>lâmpadas de filamento de carbono</b></a>, para uma estética vintage e/ou industrial. <br><br><b>Material qualificado</b><br/>Nesta categoria, você encontra o maior catálogo de <strong>lustre de cristal</strong> disponível online no Brasil. Feitos com <b>cristal K9</b> - referência no segmento -, esses produtos transformam totalmente um ambiente. A sua beleza ímpar consegue levar ao local uma iluminação ao mesmo tempo precisa e enviesada graças ao seu material cristalino.<br><br>A Iluminim é a <strong>loja de lustres</strong> que possui as melhores condições de pagamento, parcelamento em até 12x sem juros ou 10% de desconto para pagamento no boleto bancário. Lustre para sala, lustre para sala de jantar, lustre para sala de estar, lustre para quarto, lustre para cozinha e muito mais. Aproveite o frete expresso grátis para compras acima de R$299,00!'
               },
               
               ['1352570']: {
                  html: 'Nesta categoria estão presentes os melhores kits de spot led disponíveis no mercado LED do país.<br/><br/>Na hora de construir ou reformar, muitas ideias vêm a cabeça, como cores de paredes, móveis e a iluminação de cada ambiente. Pensando nisso, a Iluminim disponibiliza a maior variedade de produtos, gerando incríveis possibilidades na hora de iluminar. Os modelos de <strong>kit de spot led</strong> são ótimas opções muito rentáveis para o seu projeto de decoração.<br/><br/>A decoração industrial está muito em alta em projetos do mundo todo e um dos itens mais procurados é sem dúvida o <strong>kit spot led</strong>, por dar um toque que remete à um estúdio cinematográfico.<br/>Em nosso catálogo existem kits disponíveis em diferentes metragens de trilho, potências dos spots e cores, tanto de luz, como do produto, disponíveis em preto e branco. <br/><br/>Instalar um kit de spot led traz dois principais benefícios, como: economia e praticidade. O primeiro se dá ao fato de ter presente a tecnologia LED em cada spot do kit, o que resulta em uma redução de até 80% no consumo de energia elétrica. A simplicidade da instalação dos <strong>kits de spot led</strong> se dá ao fato de necessitar poucas ferramentas para a execução. <br/><br/>Compre os nossos modelos de <strong>kit spot led</strong> e garanta as condições exclusivas de compra do site, pague em até 12x sem juros ou com 10% de desconto no boleto à vista e ainda receba em sua casa de graça no caso de uma compra acima de R$299,00 com nosso frete grátis exclusivo!'
               },
               
               ['3220764']: {
                  html: 'Grande variedade de <strong>Plafon LED 30x30 Sobrepor Redondo</strong> na categoria dedicada da Iluminim.<br/>Decorar o ambiente envolve um bom planejamento de iluminação e pensando nisso a Iluminim disponibiliza os <b>melhores produtos LED</b> disponíveis no mercado.<br/><br/>O plafon é um modelo moderno de luminárias, seu design foi criado para ser usado em <b>diversos projetos de decoração</b>, abrangendo muitos estilos. A versão redonda fica perfeita com linhas mais arredondas de forros e móveis, criando um ambiente todo planejado. Salas, quartos, cozinhas e demais cômodos da casa aceitam perfeitamente o uso de luminárias do tipo <strong>plafon 30x30</strong>. A luz do modelo de sobrepor entrega uma luz indireta, que sai pelos lados da luminária, criando um efeito aconchegante na iluminação. <br/><br/>Consumidores do <b>mundo todo</b> aprovam a tecnologia LED em uso diário, dado a economia que este tipo de luz proporciona. O LED emite luz através de microchips que contam com um diodo emissor de luz, um processo 100% eletrônico, esta economia se dá ao fato de o LED não necessitar de gases ou de calor para gerar luz, as luminárias LED já vêm com os chips inclusos em sua estrutura, ou seja, dispensam o uso de lâmpadas e isto aumenta também sua vida útil, que vai até 50.000 horas.<br/><br/>Confira os modelos de <strong>plafon led sobrepor 30x30</strong> que separamos para você e garanta o seu agora mesmo pelo menor preço e com as melhores condições de pagamento do mercado. Frete grátis para pedidos acima de R$299,00, parcelamento de até 12x sem juros você só encontra na Iluminim!'
               },
               
               ['3220789']: {
                  html: 'Um dos mais usados em iluminação residencial e comercial, o <strong>plafon LED 40x40 Sobrepor Quadrado</strong> aparece em uma série de versões disponíveis na Iluminim. Navegue pela categoria e confira.<br><br>O design é uma referência desta luminária tipo plafon é sem dúvida um dos principais pontos de destaque, seu formato simétrico e minimalista possibilita a aplicação em muitos estilos diferentes de decoração. Seu desenho quadrado, formato que facilita o alinhamento e disposição em áreas mais amplas, como escritórios, salas grandes e demais ambientes com um grande espaço. Uma das versões mais procuradas no site é o <strong>plafon led 40x40 sobrepor 36w</strong>, pois nesta versão a potência é ideal para o tamanho desta luminária, garantindo uma luz brilhante e uniforme. Você pode optar por luz nos tons: branco frio, branco neutro e branco quente, três tons que garantem diferentes qualidades, para diferentes ocasiões.<br><br>Garanta já seu <strong>plafon led 40x40 sobrepor quadrado</strong> e certifique-se das muitas vantagens de ter um ou mais exemplares deste produto que é um sucesso entre os consumidores. Além dos benefícios desta luminária, você dispõe das melhores condições de pagamento, como o nosso frete grátis para compras acima de R$299,00 e o parcelamento em até 12x sem juros. Aproveite!'
               },

               ['3538875']: {
                  html: 'Buscando por <strong>sensor de presença</strong>? Aqui na Iluminim você encontra! Mas antes fique por dentro dos modelos, caracteristicas e funcionalidades dos <strong>sensores de presença</strong>. Estes aparelhos funcionam por sinal infravermelho ou por sinal de microondas, no caso do infravermelho funcionam detectando o calor e transformando em energia, logo em seguida ativando-o. No caso das microondas é diferente, os aparelhos emitem pulsos em um padrão e cada vez que esse padrão é quebrado o sistema reconhece que há a necessidade de ativar a lâmpada. Aqui no site estão disponíveis modelos de <strong>sensor de presença inteligente</strong>, tanto internos, quanto externos, podendo ser usados em salas, escritórios, quartos, banheiros, pavilhões, etc. <br/>Aproveite as ofertas de <strong>sensor de presença para lâmpadas</strong> da Iluminim! Compre pelo site com até 10% de desconto no boleto e conte com entrega expressa e frete grátis à partir de R$299,00!'
               },
               
               ['3538951']: {
                  html: 'Automatize as luzes externas do seu ambiente com o <strong>relé fotoelétrico</strong>. O relé foto elétrico lhe dá muito mais conforto e economia no seu dia a dia, ligando luzes externas apenas na ausência de luz natural, economizando tempo e energia. Saiba mais sobre os <strong>tipos de relé fotoelétrico</strong> que existem, dentre eles estão: <strong>relé fotoelétrico de parede</strong>, <strong>relé fotoelétrico com base</strong> podendo ser fixado em paredes, tetos e diversas superfícies.<br/><br/><strong>Relé fotoelétrico</strong> com entrega expressa e descontos incríveis. Aproveite as condições e garanta o seu com 10% de desconto no boleto bancário.'
               },
               
               ['1608522']: {
                  html: 'A mais completa linha de <strong>lâmpada para banheiro</strong> você só encontra na Iluminim. Na hora de contruir ou reformar, apostar em uma boa iluminação é muito importante para o seu bem-estar, e investir em <b>lâmpadas led</b> lhe trará muito disso.Opte por economia de energia com o uso de <b>LED</b>, que assim como as <strong>lampadas led para banheiro</strong> todos os produtos têm uma taxa baixíssima de consumo de energia. Dentre os tipos de <strong>lâmpadas de led para banheiro</strong> você encontra modelos com soquete E27, E14, E40 e mais. Lâmpadas <b>dicróica</b>, <b>tubular</b>, <b>bulbo</b>, entre outras, nas cores Branco Frio e Amarelo Quente. <br/><br/>Compre na Iluminim e conte com <b>frete grátis</b> em todo o território nacional nas compras à partir de R$299,00 e ainda pague em até <b>12x sem juros</b> ou com <b>10% de desconto</b> no boleto à vista. Aproveite!!!'
               },
               
               ['3516786']: {
                  html: 'Precisando levar mais segurança para a sua empresa? Você acaba de encontrar um rico catálogo de <strong>lâmpada industrial led</strong> aqui no site da Iluminim!Navegue por nossa loja online e descubra novos modelos de <strong>lâmpada industrial</strong> para usar em seu negócio e levar mais segurança e praticidade ao seu trabalho. Nossa loja conta com os principais produtos de <b>iluminação industrial</b> presentes no mercado. <br/><br/>Invista na iluminação do seu ambiente de trabalho economizando muito com a loja da <b>Iluminim</b>. Aproveite nossas condições, podendo pagar em até <b>12x sem juros</b> no cartão de crédito ou ganhe <b>10% de desconto</b> no boleto à vista, tudo isso com nosso <b>frete grátis</b> para compras acima de R$299,00.'
               },
               
               ['2751058']: {
                  html: 'Diferentes ambientes e emoções necessitam de um bom jogo de luzes: nossos modelos de <strong>Refletor led rgb</strong> disponíveis em nossa loja online. Aqui você vai encontrá-los em diferentes potências. Entre elas estão: <strong>refletor led rgb 10w</strong>, 20w, 30w, 50w, 100w, sendo possível ser aplicados em diferentes situações de iluminação. Use <strong>refletor led rgb para festas</strong>, para áreas externas, internas e até em eventos corporativos. <br/><br/>Os produtos da <b>Iluminim</b> contam com certificação de <b>qualidade</b> e garantia de até 24 meses. Aproveite tudo isso com as facilidades de compra da nossa loja, compre online e receba seu pedido em casa com o <b>frete expresso</b> e se o seu pedido for acima de R$299,00, você <b>não paga</b> o frete! Podendo pagar tudo em até <b>12x sem juros</b> ou com <b>10% de desconto</b> no boleto. Vem pra Iluminim!'
               },
               
               ['2150000']: {
                  html: 'Descubra aqui as opções de <strong>luminária plafon led</strong> que a Iluminim oferece e encontre o modelo perfeito para a sua decoração.<br/><br/>Você pode optar pela <strong>luminária plafon led embutir</strong>, que é ideal para ser colocada em forro de gesso, madeira ou PVC. Já a <strong>luminária plafon led sobrepor</strong>, com fácil instalação acrescenta muito na hora de decorar o ambiente. Ambas têm uma grande variedade de potências, o que possibilita ter muita flexibilidade na hora do planejamento da iluminação do seu projeto. <br/><br/>Economize na hora de investir em iluminação, implementando a tecnologia LED no seu dia a dia com as nossas <strong>luminárias led plafon</strong>, que têm uma economia de 70% de energia.<br/><br/>Compre em nosso site e garanta 10% de desconto pagando em boleto à vista ou então parcele em até 12x sem juros no cartão de crédito. As melhores condições você só encontra aqui!<br/><br/>Confie na líder!'
               },
               
               ['3467233']: {
                  html: 'Indispensável na hora de iluminar o seu quintal, o <strong>refletor para jardim</strong> pode destacar muito a sua decoração.<br/><br/>A luminosidade proporcionada pelo <strong>refletor de led para jardim</strong> realça a beleza do local à noite, além de destacar objetos como estátuas; dá volume à arbustos, copas de árvores e plantas.<br/><br/>O <strong>refletor para jardim led</strong> é um dos mais indicados e procurados do mercado, uma vez que não esquenta e garante a saúde de suas plantas. Nossos modelos de <strong>refletor para jardim de led</strong> contam com selos de qualidade e garantia, e normas como: ISO 9001:2000 e ISO 14001 , são ideais para o uso externo, tendo uma fabricação de <b>alto nível</b>, garantindo total segurança no seu investimento.<br/><br/>Aproveite nossas ofertas de <strong>refletor led para jardim</strong> e compre agora mesmo com <b>10% de desconto</b> à vista no boleto ou então em <b>12x sem juros</b> no cartão!!!'
               },
               
               ['3597576']: {
                  html: 'Em seu evento não pode faltar uma iluminação de qualidade, por isso aposte em <strong>lampada de led para decoração de festa</strong>. Muito usadas por DJs, por sua praticidade e facilidade de instalação, as <strong> lampadas de led coloridas para festa</strong> se tornaram populares, despertando muita criatividade nos consumidores. Exemplos como: festas de aniversários, formaturas, casamentos e bodas são apenas alguns dos muitos eventos nos quais elas podem ser usadas. Não perca tempo posicionando e ajustando a iluminação, o modelo <strong>lampada led giratória</strong> traz luzes em várias cores e em formatos geométricos, levando muito mais diversão para a sua festa! Se você está planejando uma festa mais intimista, mas não quer perder em diversão, aposte na <strong>lampada de led com alto falante bluetooth e controle remoto</strong> que permite conectar seu celular para tocar músicas! Navegue em nossa categoria e descubra um novo mundo de <strong>lampada de led para festa</strong>.Economia e <b>diversão</b> garantida só com a Iluminim. Adquira já a sua <strong>lampada de led festa</strong> com <b>super desconto</b> e ainda podendo parcelar em até <b>12x sem juros</b>!!!'
               },
               
               ['2150000']: {
                  html: 'A <strong>luminária plafon led</strong> é uma das mais modernas opções de iluminação e ultimamente tem ganhado um grande espaço nas casas e ambientes de trabalho. Sua funcionalidade consiste em iluminar como uma <b>fonte principal de luz</b>, mas nada impede de ser combinada e colocada em pontos estratégicos para criar uma ambientação planejada. <b>Diferentes tipos de uso</b> Disponível em diferentes tons de luz, os modelos de <strong>luminaria led plafon</strong> lhe possibilitam diferentes sensações em diferentes ambientes, siga alguns exemplos, como: <strong>luminaria plafon led sobrepor</strong> com luz branco quente usada em dormitórios, por conta de sua combinação da luz branco quente, que transmite <b>tranquilidade e aconchego</b> e a luz indireta do modelo de sobrepor, que não prejudica na hora de dormir ou relaxar; <strong>luminaria plafon led embutir branco frio</strong> sendo usada em banheiros, combinado ao tom azulado da luz branco frio e à luz direta do modelo de embutir, ganhando mais destaque aos detalhes do ambiente, o que facilita na hora de procedimentos de higienização, seja pessoais ou do próprio cômodo. <b>Composição dos produtos</b> Feitas de acrílico e alumínio, a construção das <strong>luminarias plafon de led</strong> entregam muita qualidade e segurança, visto que são dois materiais leves e resistentes. Acompanham também parafusos inoxidáveis para fixação, que têm alta resistência à corrosão e longa durabilidade. <b>Tecnologia e economia</b> A tecnologia LED presente nas <strong>luminarias plafon</strong> desta categoria entrega muita economia, podendo reduzir o consumo de energia elétrica em até 80% comparado às de modelo convencional, também sendo mais ecologica, pois dispensa o uso de certas substâncias nocivas ao meio ambiente.'
               },
               
               ['1363696']: {
                  html: 'Alguns produtos LED contam com o uso de <strong>fonte carregador</strong>, como por exemplo: refletores portáteis e luminárias de emergência.<b>Versatilidade de uso</b>Nossos modelos de <strong>fonte de carregador</strong> lhe possibilitam o uso de produtos LED recarregáveis por muito mais tempo, tendo duas opções, na primeira você pode usar tranquilamente seu produto até a sua bateria descarregar e aí então recarregá-lo usando uma <strong>fonte de carregar bateria</strong>, ou usar de forma ininterrupta, mantendo seu produto ligado em uma tomada, aproveitando assim, o máximo de sua potência. <b>Modelos</b> Geralmente o modelo mais comum de <strong>fonte de alimentação</strong> são modelos de <strong>fonte carregador 12v</strong>, variando somente a sua amperagem, o que garante uma maior segurança na hora de escolher a sua <strong>para carregar bateria</strong> de produtos LED. Todos os modelos seguem as normas de segurança, sendo compatíveis com as tomadas padrão ABNT. Aproveite nossas condições de pagamento na loja online e garanta já a sua <strong>fonte carregador</strong> com descontos imbatíveis e ainda pague em até 12x sem juros!!!'
               },
               
               ['3366428']: {
                  html: 'A maior variedade de <strong>led para quarto</strong> é só na Iluminim. Aqui você encontra inúmeros modelos de produtos led para colocar no quarto. Temos disponíveis desde de <strong> lâmpada de led para quarto</strong> até fitas de led.<br/><br/> O quarto é uma das partes mais importantes da casa, pois nos abriga em uma das horas mais essenciais, que é a hora do descanso. Nada melhor do que uma boa iluminação, com todo o controle e comodidade para proporcionar o máximo do conforto e bem-estar. A flexibilidade de uso do LED é imensa, você pode aplicar plafons, instalar fita de led em seu forro ou nos rodapés, até mesmo em seu armário, criando um estilo muito moderno. Os spot led de trilho estão muito em alta em projetos de decoração e arquitetura do mundo todo, por seu design despojado e sofisticado, que nos levam a lembrar de grandes estúdios de cinema.<br/><br/> Além de toda a praticidade dos produtos desta categoria, todos contam com tecnologia LED de última geração. Obtenha uma redução no consumo de energia de até 80% utilizando esta tecnologia, sem contar na economia na conta de luz. Os produtos LED são muito duradouros, devido á sua construção com materiais de excelente qualidade, como o caso das lâmpadas, que têm a parte externa em plástico, evitando a quebra e caso de quedas e permitindo o manuseio logo após serem desligadas, devido ao chip LED que esquenta muito menos que as lâmpadas convencionais.'
               },

               ['1608454']: {
                  html: 'Encontre tudo o que você precisa em <strong>LED para Quarto</strong> em um só lugar. Apresentamos nossa linha de <strong>iluminação para quarto</strong> com produtos qualificados e certificados pelos mais respeitados órgãos (como o INMETRO, ABNT, dentre outros). Decore e ilumine com luminaria para quarto: utilize-as para sua mesa de cabeceira, os plafons para um quarto com LED no teto, ou ainda invista em um lustre para uma maior sofisticação.<br><br>Utilize Lâmpada de LED e Spot LED para iluminar móveis, os Spots de Trilho são perfeitos para uma iluminação voltada a parede, em geral, são usados para iluminar quadros, plantas e demais objetos que a luz dá um belo contraste no ambiente. Luz de LED para quarto com controle remoto? Temos também! Fita de LED, Refletores e Lâmpadas RGB colorida com mais 16 cores.<br><br>Fazer uma iluminação com LED no quarto é muito simples na Iluminim. Você pode parcelar tudo em até 12x sem juros e ainda ganhar frete grátis para compras acima de R$ 299,00. Também é possível economizar ainda mais com os nossos super kits LED, já que, quanto maior o kit, menos você paga pelo valor unitário. É LED para quarto com preço baixo. É Iluminim!'
               },
               
               ['2730507']: {
                  html: 'Você está atrás de <strong>Luz Negra LED</strong> de qualidade, mas sem que precise pagar muito caro por isso? Então, aproveite para conferir nossos modelos de <strong>Fita LED Ultravioleta</strong> disponíveis em diversas metragens. Fita de LED UV com colagem adesiva e super luminosidade, perfeita para festas e eventos, além de servir como Fita LED UV para serigrafia.<br><br>Na Iluminim, você pode comprar LED Ultravioleta com condições especiais, as melhores do mercado de iluminação. São até 12x sem juros no cartão ou 10% de desconto no boleto, além do frete totalmente grátis para compras acima de R$ 299,00. A entrega imediata faz parte do pacote de condições imperdíveis para você adquirir o seu LED Luz Negra 12V hoje!<br><br>Confie em quem entende de LED há mais de 10 anos. Confie na líder!'
               },
               
               ['1608460']: {
                  html: 'Se você se pergunta qual a melhor Luminária LED ou Lâmpada LED para cozinha, ou ainda não decidiu como fazer a iluminação em cima da pia da cozinha, saiba que você pode encontrar a solução de todas essas questões aqui. Encontre tudo para o seu <strong>projeto de iluminação para cozinha</strong> na Iluminim!<br><br>Oferecemos condições de pagamento exclusivas para você poder iluminar sua cozinha com LED, comprando com tranquilidade e recebendo rapidamente os produtos. Você pode parcelar sem juros, em até 12x e nem precisa pagar pelo frete se sua compra for acima de R$ 299,00. É vantagem que não acaba mais, tudo visando o conforto e uma experiência de compra e uso única. <br><br>Para uma iluminação de cozinha, você pode utilizar Fitas de LED para os balcões e entornos da pia. Os Spots de Trilho são recomendados para o teto, focando em diversos pontos do ambiente, já o Spot Dicróica é ideal para um foco menor, onde se queira dar destaque. Compre também Plafon, Lâmpadas e Luminárias Pendentes para levar sofisticação em sua iluminação para cozinha.<br><br>Iluminação para cozinha pequena, grande, americana, industrial, gourmet e demais estilos, você encontra facilmente na Iluminim, com os menores preços. Compre fácil, compre rápido!'
               },
               
               ['2493161']: {
                  html: 'Querendo ter mais poder sobre a intensidade da sua iluminação? Então, você precisa de um <strong>Dimmer para LED</strong>! A Iluminim tem uma qualificada linha com diversos tipos de dimmer, você pode facilmente escolher qual atende melhor a sua necessidade. Se você não souber qual é a melhor opção, é só entrar em contato com a gente que a gente te ajuda.<br><br>Dimmer com controlador de velocidade, com controle, mini dimmer 12v e até dimmer universal, confira nossa linha completa e compre a preço reduzido aqui. Todos nossos produtos recebem 10% de desconto à vista e parcelas sem juros no cartão. São as melhores condições do mercado, pois você recebe rapidamente em sua casa e pagando pouco!<br><br>Compre hoje mesmo o seu interruptor dimmer para luz na Iluminim. Confie em quem entende!'
               },
               
               ['2746086']: {
                  html: 'Tudo o que você precisa em <strong>LED para Jardim</strong>, você encontra aqui. A Iluminim oferece a maior linha de luz de LED para jardim do Brasil com descontos imperdíveis. Encontre <b>Luminaria de jardim, Lâmpada de LED para jardim, Espeto e Refletor LED para jardim<b> com alta qualidade e larga garantia.<br/><br/>Um vasto catálogo de produtos certificados, garantindo a eficácia no desempenho de sua iluminação. Com garantias que vão de 14 meses à 3 anos, entregamos a <b>melhor solução em</b> <strong>LED para Jardim</strong> da internet, é muito mais segurança e conforto para você adquirir tudo o que necessita para reformar ou criar uma nova decoração para o seu jardim.<br/><br/>Confira agora mesmo nossas super ofertas e garanta o seu produto em até 12x sem juros. Dica: ganhe de graça o frete fazendo compras acima de R$ 299,00. Confie em quem entende! Confie na líder!'
               },
               
               ['1608456']: {
                  html: 'Você estava decorando e chegou na fase da iluminação para sala de estar? Confira aqui a melhor seleção da internet em produtos <strong>LED para sala de estar</strong>!<br/><br/>Possuímos o maior portfólio de luz de LED para sala, que contam com as mais modernas luminárias de LED, uma linha sofisticada de lustre de LED feitos com cristal K9, a econômica categoria de lampada LED, a bela linha de fita LED e muitas outras opções.<br/><br/>Temos produtos ideais para todos os cantos e estilos de iluminação de sala. Seja para uma iluminação mais decorativa com Spots, Fitas e Lustre LED, quanto algo mais uniforme como nossa Luminária de teto e Painel para sala. Diversos produtos que provam não ser necessário gastar muito para transformar completamente a iluminação e decoração de sua sala de estar.<br/><br/>Compre tudo em LED para sala de TV aqui na Iluminim, temos preço baixíssimos e condições exclusivas para você. Tudo para facilitar sua vida, iluminando e economizando muito mais. Compre já!'
               },
               
               ['1608473']: {
                  html: 'Precisando renovar a <strong>iluminação de garagem</strong>? Então, você encontrou o lugar certo para fazer isso. Todos os itens necessários para o seu <strong>projeto de iluminação de garagem</strong> você acha na Iluminim. Encontre refletores, luminárias, arandelas, lâmpadas e muito mais produtos de <strong>iluminação para garagem</strong>.<br><br>Lançamentos com promoções exclusivas toda semana, aqui você pode contar com holofotes de alto desempenho e baixo consumo de energia, fazendo você economizar muito mais. Melhore a <strong>iluminação para garagem residencial</strong> ou para <strong>garagem de prédio</strong>, seja ela aberta ou fechada, com opções top de linha, como nossas luminárias públicas e lâmpadas de alta potência.<br><br>Se você tem dúvida sobre pagamento, saiba que a Iluminim oferece as melhores condições do mercado. São parcelas sem juros de até 12x, 10% no boleto à vista e frete grátis para compras com valor acima de R$ 299,00. Compre sua iluminação LED para garagem aqui. Confie na líder!'
               },
               
               ['1608473']: {
                  html: 'As melhores opções em <strong>Spot para Banheiro</strong> estão na Iluminim. Confira agora mesmo a mais ampla linha de spot luminária para banheiro, com super luminosidade, disponível em diversas cores de material e de luz.<br><br>Confira também, a incrível variedade de potências, iluminando banheiros pequenos e grandes, seja para box de banheiro, nicho ou spot para espelho de banheiro. Nossa linha obtém produtos com as tecnologias LED COB e LED SMD - esta última a mais avançada do mercado -, oferecem até 80% de economia e uma ultra luminosidade que não se encontra equivalentes no mercado.<br><br>Escolha já o spot ideal para o seu banheiro e tenha a garantia de estar adquirindo o melhor spot para banheiro da internet. Confira nas exclusivas condições de pagamento e compre já o seu! Confie na líder!'
               },
               
               ['1608608']: {
                  html: 'Encontre <strong>Luminária para corredor</strong> de alta qualidade em diversos modelos e cores aqui. Nossos produtos são feitos com a mais avançada tecnologia do mercado de iluminação LED, oferecendo uma luminosidade de alta qualidade, com diversas certificações e extensa garantia. Além de tudo isso, o preço se mantém o menor do segmento. É quase inacreditável, mas é a Luminária de corredor da Iluminim.<br/><br/>Perfeita para ser instalada em diversos tipos de corredores: você pode estar atrás de uma luminária para corredor interno ou talvez externo, ou ainda um corredor pequeno ou grande, para todas essas opções existe um modelo disponível aqui. Seja buscando amplamente luminária de teto ou luminária de parede, ou sendo mais específico atrás de luminária pendente ou plafon para corredor, você acha materiais de primeira linha, com preço baixo.<br/><br/>Compre ainda hoje a sua luminária para corredor de apartamento, casa, prédio comercial e demais locais com desconto de 10% no boleto e frete 100% gratuito em compras acima de R$ 299,00. A sua luminária de LED está te esperando aqui na Iluminim. Confie em quem entende!'
               },
               
               ['3366572']: {
                  html: 'Está atrás de uma <strong>Lâmpada para quarto</strong> extremamente econômica e que cumpra as expectativas? Então confira a super linha de lâmpada de LED para quarto que temos o prazer de oferecer. São inúmeros modelos de potência e tom de luz para você iluminar muito melhor o ambiente.<br/><br/>De lâmpadas decorativas à lampadas convencionais, possuímos o maior catálogo em lâmpada LED para quarto disponível na internet. Explore nossas categorias e encontre lâmpada para quarto de casal, para quarto de bebê, lâmpada para abajur e muito mais.<br/><br/>Nossos produtos são bivolt e oferecem uma economia de até 80% em comparação as antigas tecnologias de iluminação. É muito mais desempenho pelo menor preço. Compre lâmpada forte para quarto se você desejar uma máxima luminosidade ou ainda adquira lâmpada fraca para quarto de bebê e ilumine sem irritar os olhos.<br/><br/>Os mais variados modelos para as mais adversas situações, com 10% de desconto no boleto e parcelas sem juros. Confie seu investimento em quem entende do assunto há mais de uma década. Confie na líder!'
               },
               
               ['1608535']: {
                  html: 'Você sabia que a Iluminim é o melhor lugar para comprar <strong>Fita de LED para cozinha</strong>? Sabe o porque? Porquê oferecemos a mais extensa e qualificada linha de Fita de LED Cozinha do Brasil, cobrando um preço justo e reduzido.<br><br>Ter uma cozinha com Fita de LED pode ser sua realidade. Garantimos um produto à prova d\'água - com grau de proteção IP65 -, baixo consumo de energia e super luminosidade. Em resumo, a opção com melhor custo-benefício em decoração e iluminação do mercado.<br><br>Aplique em diversos locais: Fita de LED para armário de cozinha, para cozinha americana, integrada e outros diversos estilos. Somos a prova que você não precisa pagar caro para transformar seu ambiente em um local muito mais sofisticado. Fita de LED na cozinha é possível com a Iluminim. Compre a sua!'
               },
               
               ['1608472']: {
                  html: 'Se você está aqui, provavelmente está atrás de uma <strong>iluminação para escritório</strong> de alta qualidade, não é?! Então fique tranquilo, pois você está no lugar certo!<br/><br/>A Iluminim oferece a maior linha em <strong>luz de LED para escritório</strong>, seja para a escrivaninha com uma <a href="/luminaria-de-mesa">luminaria de LED para mesa</a>, quanto para o teto com <a href="/spot-led-trilho-eletrificado?sort=mais_vendidos">spots e trilho eletrificado</a>. Temos tudo em iluminação de alta performance e baixo consumo de energia para o seu ambiente.<br/><br/>De iluminação para escritório pequeno ao grande, garantimos sempre o melhor preço e as melhores condições de pagamento para você. Além disso, temos o prazer de lhe entregar a maior garantia do segmento no Brasil.<br/><br/>Somos a casa da <strong>iluminação de escritório</strong>, compre em até 12x sem juros no cartão, ou receba 10% de desconto para pagamentos no boleto à vista. Entrega rápida e eficaz. Confie em quem entende de LED. Confie na líder!'
               },

               ['2819550']: {
                  html: 'Nossa Lampada LED 5W ilumina bem e representa muito mais economia para você. Disponível em modelos de cor de luz como: Lampada LED 5W Amarela (3000K) ou Lampada LED 5W Branca Fria (6000K), e modelos de soquete como: Lampada LED G9 5W e Lampada LED 5W E27, nossa extensa categoria é referência no segmento. Não tenha mais dúvidas na hora de comprar iluminação LED de alta qualidade, por preço justo. Escolha a Iluminim!'
               },
               
               ['3666915']: {
                  html: 'Não procure mais por <strong>Pendente Quadrado</strong> na internet. Asseguramos a melhor compra e experiência. São diversos modelos de Pendente Quadrado LED para você arrasar na hora de fazer a decoração de seu ambiente. Aposte em Pendente Quadrado para Sala de Jantar, Sala de Estar, Cozinhas e Quartos (nesse último, sugerimos colocar acima de cômodas e mesas de cabeceira para dar uma luz auxiliar sofisticada). Comprando na Iluminim, você tem garantia de uma entrega rápida e de um produto de qualidade. Aproveite nossas promoções e compre já o seu!'
               },
               
               ['6572713']: {
                  html: 'Estar seguro na hora de transitar por ambientes é essencial, um local <b>bem iluminado</b> e bem sinalizado requer o uso de <strong>balizador de parede</strong>. Navegue pela categoria de <strong>balizador de parede</strong> e descubra os mais modernos e funcionais modelos existentes no mercado. Conheça um pouco mais sobre este incrível item de iluminação e suas muitas formas de utilização.<br/><br/> <b>Principais características</b><br/> O <strong>balizador de parede led</strong> consiste em uma luminária, que cria um ponto de luz e é estratégicamente posicionado em locais para que ilumine uma passagem, como um corredor, uma escada, ou até mesmo para dar destaque a quadros e obras de arte em paredes. Você encontra facilmente em nosso site modelos de <strong>balizador de parede de embutir</strong> e também de sobrepor, sendo que o segundo dispensa a necessidade de fazer recortes na parede o que aumenta muito a facilidade de instalação. Este produto segue o mesmo padrão de cores das lâmpadas de LED, tendo iluminação nas cores branco quente, branco neutro e branco frio.<br/><br/> <b>Dicas de uso</b><br/> Ao usar em escadas, considere uma boa altura. É interessante instalar alternando os degraus, pois seu raio de luminosidade cobre perfeitamente esta distância. Para corredores não é muito diferente, instale-os em uma distância considerável, alguns modelos ainda contam com luz indireta, o que não afeta a visão em caso de serem colocados na parede na altura dos olhos.<br/><br/> Aqui na Iluminim, você encontra as melhores opções de <strong>balizador de parede</strong> com super descontos e condições únicas de pagamento. Compre no site e receba o pedido na sua casa, garanta ainda 10% de desconto pagando no boleto à vista.'
               },
               
               ['3177402']: {
                  html: 'Todo o design, sofisticação e qualidade do autêntico <b>Refletor MicroLED Ultra Thin</b> agora com muito mais vantagens. Conheça as opções de <strong>kit refletor led</strong> disponíveis.<br/><br/> <b>Economia</b><br/> O <strong>kit de refletor led</strong> foi feito para diminuir os gastos do consumidor, disponíveis em <b>kits de 5, 10, 20 e 50 unidades</b>, você vai encontrar essas variações em versões de <strong>kit refletor led 100w</strong>, <strong>kit refletor 200w</strong> e também de 50w. Conte ainda com a <b>redução de consumo de energia de 80%</b> que o LED lhe proporciona.<br/><br/> <b>O Ultra Thin</b><br/> Minimalista, discreto e elegante, o <b>Refletor Holofote MicroLED Ultra Thin</b> é o que há de mais moderno e prático em refletores led. Perfeito para instalações internas e externas, por seu grau de proteção IP65 que o protege de de arranhões, amassados e o torna <b>à prova d\'água</b>, lhe garantindo a segurança necessária para ser instalado em áreas externas.<br/><br/> <b>Garantia de qualidade Iluminim</b><br/> Todos os produtos disponíveis em nosso site passa por um rigoroso controle de qualidade e garantem selos como: CE, RoHS e Inmetro e também as normas ISO 9001:2000 e ISO 14001. Além de contar com a segurança dos controles de qualidade, no caso dos kits, cada refletor tem 24 meses de garantia, ou seja, a segurança de investir em produtos do nosso site é imensa, visto que está comprando produtos de qualidade e alta tecnologia.'
               },
               
               ['3177490']: {
                  html: 'A mais nova tendência do mercado de refletores LED agora em kit! Confira as opções de <strong>kit refletor led slim</strong> que a Iluminim oferece, navegando por essa categoria. Saiba mais sobre este produto e porque os kits são tão procurados.<br/><br/> <b>O Refletor MicroLED Slim</b><br/> Lançados em território nacional pela Iluminim no ano de 2019, os Refletores MicroLED Slim chegaram para ficar e vêm sendo atualizados a cada ano, e aqui em nosso site temos disponíveis os mais modernos modelos, que ja se tornaram populares por ser muito usados em instalações internas e externas. Possuem muita qualidade, devido ao seu excelente acabamento interno e externo que conta com o corpo de alumínio, parafusos inoxidáveis e vidro blindado, o que garante o grau de proteção IP66. <br/><br/> <b>Rentabilidade</b><br/> Por terem alta durabilidade e pouquíssimo consumo de energia os Refletores MicroLED Slim tornam-se excelentes investimentos em iluminação LED. Sua tecnologia LED inclusa entrega até 80% de redução no consumo de energia elétrica, levando muito mais vantagem para o usuário.<br/><br/> <b>Qualidade e garantia Iluminim</b><br/> Assim como todos os outros presentes na loja este produto está dentro de um padrão, onde passa por uma série de controles e testes de qualidade, garantindo os selos CE, RoHS e Inmetro e também as normas ISO 9001:2000 e ISO 14001.'
               },
               
               ['1608537']: {
                  html: 'Aqui na <b>Iluminim</b> você encontra a maior linha de <strong>lampada led para cozinha</strong> com os menores preços e melhores condições. Nosso catálogo conta com uma ampla variedade de modelos, perfeitos para todas as necessidades em sua decoração, reforma ou construção. Veja agora alguns de nossos modelos presentes em nosso site e dicas de uso.<br/><br/> <b>Iluminação na cozinha</b><br/> A cozinha é um ambiente que requer uma <b>iluminação clara e uniforme</b>, por ser um espaço onde precisamos enxergar bem os detalhes e nos manter focados para o preparo de comidas e afins. Os tons de luz <b>branco frio</b> e <b>branco neutro</b> são muito usados neste cômodo, por serem tons mais frios e proporcionarem mais disposição e atenção ao usuário, procure por <strong>lampada de led para cozinha</strong> destes tons. Se você tem uma cozinha com um balcão do tipo ilha no meio, use pendentes, ou então aposte em uma iluminação mais linear com lâmpada led tubular, para criar uma iluminação ideal para o manuseio de comidas e utensílios de culinária.<br/><br/> <b>Benefícios do LED</b><br/> A tecnologia incluída em cada <strong>lampada led para cozinha</strong> é sem dúvida a <b>mais econômica</b> e rentável que é possível encontrar hoje. O LED é um diodo que emite luz atravez de micro circuitos, diferente das lâmpadas convencionais, o LED não esquenta e <b>não emite raios UV</b>, o que possibilita o manuseio de uma lâmpada recém apagada e permite ser instalada em cozinhas sem se preocupar com saúde de plantas e flores e com a danificação de seus alimentos.<br/><br/> Compre agora, <b>receba seu pedido em casa</b> e ainda conte com <b>frete grátis</b> para compras acima de R$299,00! E ainda pague em <b>12x sem juros</b> ou com <b>10% de desconto</b> em boleto á vista!'
               },
               
               ['2924405']: {
                  html: 'Encontre <strong>fita de led 20 metros</strong> em nosso site e garanta a iluminação mais moderna em sua decoração com os menores valores do mercado! Navegue por nossa categoria de <strong>fita led 20 metros</strong> e descubra a grande variedade de modelos presente em nosso catálogo.<br/><br/> <b>Vantagens da Fita LED 20 Metros</b><br/> Optar pela <strong>fita led 20 metros</strong> é sem dúvida uma ótima escolha se você procura economia e estilo. Disponível em modelos com: RGB com controle, Branco Quente, Branco Frio e Colorida você pode instalar em sancas, móveis, forros de diversos tipos e mais! Este produto está presente nas versões 3528, 5050, ambos modelos de alta qualidade. <b>Qualidade e Garantia Iluminim</b><br/> Todos os produtos desta categoria contam com Garantia Iluminim de 14 meses e passam por um rigoroso controle de qualidade, adquirindo os selos CE, RoHS e as normas ISO 9001:2000 e ISO 14001.'
               },
               
               ['2756184']: {
                  html: 'Na <b>Iluminim</b> você encontra muitas opções de <strong>kit pendente</strong> disponíveis em nosso site. A luminária pendente é a mais recente tendência em iluminação e está muito <b>em alta nos projetos de decoração do mundo todo</b>. Decore sua casa, escritório, loja com <strong>kit luminaria pendente</strong> e faça uso de todas os benefícios que a tecnologia LED, junto com a Iluminim, lhe proporciona. <br/><br/> <b>Diferentes versões</b><br/> Temos diferentes modelos de pendentes, disponíveis em kits com variações de <b>2,4 e 6 unidades</b>, ideal para a sua necessidade. Você pode optar por <strong>kit 3 pendentes</strong> de médio porte, caso busque uma iluminação de maior destaque, uma das opções mais buscadas é o <strong>kit pendente para cozinha</strong> que contam com balcões americanos, ilhas de centro ou até mesmo como ponto de luz principal, <b>criando um estilo muito sofisticado na decoração</b>.<br/><br/> <b>Compatibilidade<b><br/> Todos os nosso modelos de luminárias pendentes são compatíveis com nossas lâmpadas LED e27 que também estão disponíveis em nosso site, assim você conta com toda a modernidade do design de cada pendente dos kits e com a <b>tecnologia LED</b> presente nas lâmpadas.<br/><br/> Aproveite e compre agora mesmo seu <strong>kit luminaria pendente</strong> com as melhores condições do mercado e garanta ainda <b>frete grátis para compras acima de R$299,00 e parcelamento em até <b>12x sem juros</b> ou <b>10% de desconto à vista no boleto</b>, oportunidades assim você só encontra na Iluminim.'
               },

               ['3721183']: {
                  html: '<b>Torneira cozinha gourmet</b> com o maior desconto da categoria no mercado é só aqui. Compare e descubra o porquê da Iluminim ser referência quando o assunto é <b>custo-benefício</b>. Torneira Gourmet Cozinha com <b>qualidade, preço baixo, e entrega segura e rápida</b> para todo o Brasil. Toda a linha passa pelo nosso rigoroso controle de qualidade e é embalado com todo o cuidado e agilidade, visando levar a melhor experiência de compra para você. Torneira gourmet inox disponível na cor preta e prata, com <b>2 anos de garantia</b> e parcelas sem juros está na Iluminim. Não perca mais seu tempo procurando por Torneira de Cozinha Gourmet, confie em quem entende! Compre agora o seu modelo!'
               },
               
               ['2816837']: {
                  html: 'Você sabe como fazer iluminação para festa sem gastar muito e com muita sofisticação? Comprando ela na Iluminim! Kit de iluminação para festa com as melhores condições do mercado, é <b>preço baixo, frete grátis e rápido</b>. A linha de kit iluminação para festa mais diversificada da internet está aqui. Você encontra <b>Refletor LED, Canhão de luz, Projetor LED, Spots</b>, dentre outros modelos especiais para arrasar na <strong>iluminação para festa</strong>. Compre já a melhor iluminação para festas do Brasil. Confie na líder!'
               },
               
               ['2868592']: {
                  html: 'Aqui tem LED Solar 100w, 50w, 30w e mais, com baixo custo e alto desempenho. Com <strong>LED Solar</strong> você ajuda o meio ambiente e seu bolso fazendo uma super economia. Toda nossa linha de iluminação solar externa é qualificada e apresenta selos e certificados internacionais, tudo com o propósito de manter nosso padrão de qualidade e de tecnologia de ponta. Use LED Solar para Jardim e economize muito mais. Escolha já o melhor pra você!'
               },
               
               ['1936501']: {
                  html: 'Refletores profissionais de alta qualidade e larga garantia fazem toda a diferença em ambientes industriais. Não tenha medo e invista forte em Refletor Modular de altas potências e assegure-se de um ambiente bem iluminado e apto ao trabalho. Refletor Modular LED 50w, 100w e 200w pelo melhor preço e com as melhores condições do mercado. São até 12x sem juros para o pagamento e frete totalmente gratuito para compras acima de R$ 299,00. Garanta já o seu refletor profissional da Iluminim e ilumine muito mais. Confie na líder!'
               },
               
               ['1393487']: {
                  html: 'Encontre aqui Refletor Industrial LED com preço baixo e longa vida útil com a entrega mais rápida do segmento. Dê muito mais luz ao seu local de trabalho ou a grande ambientes com o refletor industrial de LED da Iluminim. Essa linha é totalmente à prova d\'água graças ao seu índice de proteção que pode chegar a IP68, além de ter 3 anos de garantia total. Aproveite para levar hoje o seu e ampliar a iluminação do seu local economizando muito. Compre agora!'
               },
               
               ['3806913']: {
                  html: 'Procurando produtos para fazer um projeto de iluminação para sua decoração de sala pequena ou até mesmo grande? A Iluminim oferece até <b>3 anos de garantia</b> em produtos e tem o menor preço do mercado em iluminação LED. Confira agora mesmo toda a nossa linha de <b>fitas de LED</b> e faça uma decoração de sala simples e sofisticada, ou ainda aposte no <a href="/spot-led-trilho-eletrificado?sort=mais_vendidos">Spot LED com Trilho Eletrificado</a> para sua decoração de sala de tv ter uma iluminação focal e direta. Não perca mais tempo indo atrás de iluminação para <strong>decoração de sala</strong> e invista hoje mesmo na melhor linha LED do Brasil. Confie em quem entende!'
               },
               
               ['3808049']: {
                  html: 'Mas se você está atrás de decoração de quarto solteiro, saiba que aqui também é o local perfeito para você encontrar a melhor iluminação de LED da internet. Nossa dica é utilizar uma iluminação focal para dar destaque a objetos da decoração, como pode ser feito com o Spot, a Fita de LED ou uma Luminária de Mesa. Nossa linha inteira é perfeita tanto para decoração de quarto masculino, quanto para decoração de quarto feminino, já que temos o maior catálogo de produtos LED do Brasil. Confira agora nossa categoria e adquira já o seus produtos!'
               },
               
               ['1217371']: {
                  html: 'Somos especialistas quando o assunto é <strong>iluminação</strong> com excelente custo-benefício e rápida entrega. A Iluminim é referência no mercado de LED, atua há mais de 10 anos e oferece as melhores promoções em iluminação. Monte projetos luminotécnicos inteiros aqui!<br/>Temos o maior portfólio do mercado, tudo para iluminação externa, para sala de estar, quarto, cozinha, banheiro, sala de jantar, ambientes comerciais, iluminação para festa, dentre outros. Tudo com o intuito de disponibilizar a melhor experiência de compra e uso em um só lugar.<br/>Para sua sala de estar, utilize a Luminaria Plafon para uma iluminação geral do cômodo, as Fitas de LED caem bem como efeito decorativo nas sancas e tetos de gesso. Ainda com tom decorativo, aposte no Lustre de Cristal para dar o toque de sofisticação final ao ambiente.<br/>Na hora de pensar na iluminação da sala de jantar, leve em conta o tom mais intimista do local e invista em um belo Pendente ou Lustre sobre a mesa. Passando para cozinha. que tal adquirir um Trilho de iluminação com Spots de LED, levando uma luz versátil e focal ao ambiente? Outra boa ideia, é instalar Spot LED Dicróica em pontos específicos onde requer uma luz direta, e Plafon LED no teto para criar uma iluminação difusa no local.<br/>Para a iluminação do quarto seja ele pequeno ou não, o ideal é utilizar a cor de luz branco quente para repousar e branco frio para estudar, trabalhar ou qualquer outra atividade que exija foco e atenção. Aposte em Luminárias de Mesa. O branco frio é aconselhado também na luz geral de teto do banheiro, já que leva um ar de limpeza ao local, em contrapartida o branco quente ao redor do espelho é sugerido para se maquiar, pois esse tom de luz deixa o tom de pele mais próximo do original.<br/>Para iluminação pública, oferecemos Luminárias Públicas e Refletores de LED 100% à prova d\'água e com largas garantias, para você sempre poder contar com uma iluminação de ponta, por mais tempo. Além disso, temos uma diversificada linha de produtos com tecnologia de energia solar, muito mais sustentabilidade para você e para o planeta.<br/>Nossa linha de <strong>iluminação</strong> tem frete grátis, preço baixos e até 3 anos de garantia total. Eleita pelos consumidores, a melhor empresa de iluminação LED do Brasil. Escolha já a melhor opção para você e compre na Iluminim!'
               },
               
               ['3819999']: {
                  html: 'Aqui tem decoração de casas simples e barato com o melhor preço e em até <b>12x sem juros</b> no cartão. Não perca essa oportunidade de adquirir sua iluminação com certeza de qualidade e com a <b>maior garantia</b> do mercado, podendo chegar a até 3 anos de garantia. Decoração de casa pequena ou grande é na Iluminim, a melhor loja de decoração e iluminação da internet. Tudo o que você precisa para sala de estar e jantar, quarto, banheiro, cozinha e demais ambientes está aqui. Aproveite!'
               },
               
               ['3261618']: {
                  html: 'Em busca de Lampada Dicroica LED 3W para banheiro? Temos diversos modelos especiais para você, lampada dicroica amarela e branca, perfeitas para decorar e iluminar com beleza e eficiência. Utilize também nossa Lampada Dicroica LED 5W para seu sala e dê um toque a mais no estilo. Ou então, aposte na Lampada Dicroica LED 7W para iluminar sua cozinha com a claridade necessária para um ambiente movimentada e que necessita de atenção. Compre já sua Lampada Dicroica GU10, MR11 ou E27 e economize muito mais!'
               },
               
               ['2819565']: {
                  html: 'A Lampada LED 30W equivale a 300W de uma Lampada Incandescente e até 60W de uma Lampada Fluorescente. Além disso, seu preço é baixo, ou seja, é muito mais economia para o seu bolso a curto e longo prazo. Confira nossos modelos de Lampada LED 30W Tubular, Milho e Bulbo Alta Potencia (disponível com bocal E27 e E40) e dê máximo desempenho na iluminação da sua casa ou apartamento. Compre já!'
               },
               
               ['2819554']: {
                  html: 'Nossa Lampada LED 9W equivale até 90W da convencional tecnologia incandescente, e até 18W da tecnologia fluorescente. É certeza de muita economia no final do mês. Seu preço também é baixo e sua entrega é gratuita para compras acima de R$299,00, transformando sua aquisição na melhor opção que você encontra para economizar mais. Aqui você encontra Lampada LED 9W 6500K (Branca) e Lampada LED 9W 3000K (Amarela) disponíveis em bocal E27 (no modelo Bulbo) e bocal G13 (no modelo Tubular), com lumens reais certificando a excelência em sua operação. Adquira já seu modelo preferido!'
               },
               
               ['3840488']: {
                  html: 'Decoração banheiro pequeno moderno ou decoração banheiro simples barata você encontra aqui. O <b>menor preço do mercado</b>, com as melhores condições do Brasil para comprar tudo para sua <strong>decoração de banheiro</strong>. Invista em LED principalmente se você visa uma decoração de banheiro com plantas, já que o LED auxilia a luz natural na fotossíntese, oferecendo mais uma vantagem de adquiri-lo. Outra opção bem comum é a decoração de banheiro com nichos, neste caso o ideal é utilizar <a href="/fita-de-led?sort=mais_vendidos">Fitas de LED</a>, <a href="/spots?sort=mais_vendidos">Spot LED</a> ou alguma opção de iluminação focal e direta, para realçar o objeto. Não procure mais, tenha certeza de uma ótima iluminação comprando na Iluminim. Vem!'
               },
               
               ['3261617']: {
                  html: 'Compre sua Mangueira de LED natal e eleve o nível de suas festas. Este produto é à prova d\'água e tem mais de 20 mil horas de vida útil. Comprando esta Mangueira LED você está adquirindo um produto com certificados internacionais de qualidade, e ainda assim pagando um baixo preço. É o melhor custo-benefício disponível na internet. Invista em Mangueira de LED para sanca ou jardim hoje mesmo na Iluminim. Não perca!'
               },
               
               ['2732501']: {
                  html: 'Aproveite nossas super ofertas e garanta já o seu <strong>Spot Cristal</strong> com parcelas sem juros, ou com desconto de 10% à vista no boleto. O Spot Cristal Embutir tem um acabamento polido e um design pensado no novo. Produto moderno e com a maior garantia da categoria no segmento. Invista em um produto de qualidade, sem precisar gastar demais. Invista no <strong>Spot Cristal LED</strong> da Iluminim. Adquira o seu!'
               },
                              
               ['1847559']: {
                  html: `A temperatura da cor de 2200K e tom alaranjado proporcionam ao ambiente a sensação de aconchego e conforto. Se você procura uma <b>Lâmpada LED</b> que não desempenha apenas a função de iluminação, as <b>Lâmpadas Vintage</b> são a opção certa. Iluminim a maior loja de LEDs do Brasil!`
               },

               ['2615453']: {
                  html: `<b>Plafon de LED Sobrepor 30x30</b> e <b>Plafon de LED Embutir 30x30</b> com as melhores condições de pagamento você encontra aqui, escolha entre a opção de cor de luz branco frio, branco neutro ou branco quente. Ainda, temos a disponibilidade do <b> Plafon LED 30X30 24W</b> em branco, preto, vermelho e rosa, selecione qual combina mais com sua sala de estar, sala de jantar, quarto, cozinha ou escritório. Aproveite o <b>frete grátis</b> para compras acima de R$299,00 e parcelamento em até 12x sem juros, oferta por tempo limitado!`
               },

               ['2615459']: {
                  html: `A <b>Luminária Plafon LED 48w 60x60 Embutir e Sobrepor Classe A+</b> é a melhor opção de iluminação Ultra LED no mercado, além de possuir uma vida útil prolongada de até 50.000 horas, que garante economia e conforto! Não perca tempo e adquira o seu Plafon LED 60x60 Sobrepor e o Plafon LED 60x60 Embutir com parcelamento em até <b>12x sem juros</b> e <b>frete expresso grátis</b> para todo o País para compras acima de R$299,00. Compre de quem é líder no mercado e possuí mais de 400.000 clientes satisfeitos!`
               },

               ['2633325']: {
                  html: `O <strong>Mini Spot LED</strong> <b>Redondo</b> e o <b>Mini Spot LED Quadrado</b> podem ser adquiridos com <b>frete grátis e parcelamento em até 12x sem juros</b>. A melhor oportunidade para você decorar e iluminar seu ambiente residencial e comercial. Aproveite e adquira agora o <strong>Mini Spot LED</strong> COB ou Dicróica com economia garantia de até 80% na conta de luz e desempenho ultra LED. Compre de quem é líder há 8 anos no mercado!`
               },

               ['2819416']: {
                  html: `O <strong>Spot LED 9W</strong> é econômico e seu desempenho é superior a tecnologias tradicionais, como a incandescente e fluorescente. Além disso, seu design de embutir e material de acrílico e alumínio deixam o ambiente elegante e sofisticado. Utilize o <b>LED Spot 9W</b> em sanca, gesso, teto ou armários, versátil para todos os tipos de aplicações. Compre agora e aproveite as ofertas de até 60% de desconto e frete expresso grátis para todo o Brasil em compras acima de R$299,00!`
               },

               ['3184729']: {
                  html: `Adquira agora o <strong>Plafon Preto</strong> na Iluminim, a maior loja de LEDs do País. Produto completo para instalação e com certificação CEE e RohS. Aproveite o frete grátis para compras acima de R$299,00 e parcelamento em até 12x sem juros. Garantia e qualidade de quem atua há 8 anos no ramo e é líder no setor de iluminação LED!`
               },

               ['2484057']: {
                  html: `A melhor oportunidade e custo benefício para você adquirir o </strong>Kit LED</strong>, qualidade LED aliada a preço baixo e economia! Adquira agora seu Kit de led com <b>frete expresso grátis</b> e parcelamento em até <b>12x sem juros</b>. Ofertas com até 80% de desconto por tempo limitado, oportunidade imperdível. Se for a sua primeira compra conosco solicite um código de desconto promocional para um de nossos representantes comerciais, não perca!`
               },

               ['1935531']: {
                  html: `Diversas opões de cor de luz do <strong>Refletor LED SMD 50W</strong>, como branco frio, branco quente e verde, cada um ideal para cada tipo de ambiente. Para orçamento entre em contato conosco via chat ou telefone, temos uma equipe especializada para tirar todas as suas dúvidas. A aproveite o <b>frete expresso grátis</b> e o parcelamento em até <b>12x sem juros</b> por tempo limitado. <b>Refletor Micro LED 50W</b> é na Iluminim, a maior loja de LEDs do Brasil!`
               },

               ['3261625']: {
                  html: '<strong>Fonte Chaveada 12V</strong> como ligar? Acesse aqui e saiba tudo! A fonte 12v chaveada pode ser adquirida na Iluminim com <strong>frete expresso grátis e parcelamento em até 12x sem juros.</strong> Aproveite antes que acabe, melhores ofertas na Iluminim, a maior loja de LEDs do Brasil. Compre de quem é lider no segmento LED e já possuí mais de 500.000 clientes satisfeitos!'
               },

               ['1165520']: {
                  html: 'As Lampadas Dicroicas da Iluminim possuem certificação do inmetro e garantia de 14 meses contra qualquer defeito de fabricação, o que comprova o excelente padrão de qualidade do produto. Adquira a sua <strong>Lampada Dicroica</strong> agora com frete expresso grátis para todo o Brasil e parcelamento em até 12x sem juros. Se for sua primeira compre solicite em nosso chat de atendimento um cupom de desconto exclusivo, aproveite a oportunidade e compre da maior loja de LEDs do Brasil!'
               },

               ['3261608']: {
                  html: 'Lampada LED 40w preço? O <b>menor preço</b> de <strong>Lampada LED tubular 40w</strong> na Iluminim. Além do preço baixo, o parcelamento pode ser feito em até <b>12x sem juros</b> e para pagamento no boleto é fornecido um <b>desconto de 10%</b>! Aproveite a oportunidade de adquirir a sua lampada tubular de led 40w na maior loja de LEDs do Brasil e com benefícios imperdíveis!'
               },

               ['2855968']: {
                  html: 'Compre agora <a href="/led-halopin-g9-5w-branco-quente">Lampada g9 led amarela</a> e <a href="/lampada-led-halopin-g9-3w-branco-frio">lampada g9 led branca fria</a> com o menor preço do Brasil. Aproveite o frete expresso grátis para todo o Brasil e o parcelamento em até 12x sem juros para esse modelo de <strong>Lampada G9</strong>. Oportunidade única na Iluminim, lampada g9 halopin com garantia de 14 meses e 10% de desconto para pagamento no boleto!'
               },

               ['3244448']: {
                  html: 'Compre <strong>Luminária Pública LED Solar</strong> com 14 mese de garantia, tecnologia led solar de última geração e completa para instalação. A melhor opção de luminaria solar led na Iluminim, compre com <b>frete expresso grátis</b>, parcelamento em até <b>12x sem juros</b> ou com <b>10% de desconto</b> no pagamento via boleto bancário. Iluminim, loja líder no segmento de iluminação led e solar!'
               },

               ['3261619']: {
                  html: '<strong>Painel de LED preço</strong>? na Iluminim você adquire o <strong>Painel de LED</strong> com preço abaixo do mercado e completo para a instalação. Confira agora o painel de led 18w e o painel de led 30x30, conhecido também como painel de led 25w. Ambos produtos campeões de venda por possuírem alto desempenho, performance incomparável e até 80% de economia. Não perca tempo e obtenha seu painel led com frete expresso grátis e parcelamento em até 12x sem juros, compre de quem é líder no segmento LED!'
               },

               ['3152629']: {
                  html: '<strong>Luminaria de teto</strong> led preço? Encontre na Iluminim o menor preço LED disponível. Adquira agora uma Luminaria de teto LED na maior LED Store do Brasil, 8 anos de mercado e líder no segmento. Aproveite o <b>frete expresso grátis</b> para todo o País e o parcelamento em até 12x sem juros. Ainda, se o pagamento for no boleto ganhe 10% de desconto. Não perca que é por tempo limitado!'
               },

               ['3021590']: {
                  html: 'Extensa linha de Luminarias de led de mesa na Iluminim, também conhecida como abajur de led ou abajur de mesa led. A <strong>Luminária de mesa LED</strong> é uma boa opção de luz auxiliar em cabeceira, mesa para leitura ou escrivaninha, sendo posssível a utilização em ambientes comerciais e residenciais. Adquira agora mesmo a sua com <b>frete expresso grátis</b> para todo o Brasil e parcelamento em até <b>12x sem juros</b>!'
               },

               ['3152626']: {
                  html: '<strong>Refletor LED Externo</strong> com as melhores condições de pagamento na Iluminim, parcelamento em até <b>12x sem juros ou 10% de desconto</b> para pagamento no boleto bancário. Ainda, ganhe <b>frete expresso grátis</b> em compras acima de R$299,00 para todo o Brasil. Alto desempenho de refletor de led externo aliado a preço baixo. Não perca tempo e adquira o seu, ofertas por tempo limitado!'
               },

               ['1393543']: {
                  html: 'Aproveite e confira a <strong>Luminária Pública LED</strong> top de venda da Iluminim, a luminária pública poste led 100w branco frio pétala. Não faltam modelos de luminária para iluminação pública, conheça a <a href="/luminaria-publica-led-smd?sort=mais_vendidos">linha SMD</a>, <a href="/luminaria-publica-ultra-led-smd?sort=mais_vendidos">Ultra LED SMD</a>, <a href="/luminaria-publica-super-led?sort=mais_vendidos">Super LED</a> e <a href="/luminaria-publica-led-smd-solar?sort=mais_vendidos">Solar</a>. Compre agora a sua luminaria publica com braço e tenha certeza de estar adquirindo um produto de qualidade, com certificações e com desempenho incomparável. Adquira já!'
               },

               ['1823345']: {
                  html: 'Compre agora seu <strong>Pendente LED</strong> para sala, pendente para cozinha, escritório ou pendente para quarto. Diversos modelos disponíveis, como o <a href="/lustre-led?sort=mais_vendidos">pendente cristal</a>, <a href="/pendente-led-aramado?sort=mais_vendidos">pendente aramado</a>, pendente industrial, <a href="/buscar?q=pendente+preto">pendente preto</a> e mais. As melhoras ofertas você encontra na Iluminim, a maior loja de LEDs do Brasil. Adquira agora com parcelamento em até <b>12x sem juros e frete expresso grátis!</b>'
               },

               ['1590063']: {
                  html: 'A <strong>Lampada LED Alta Potencia</strong> é uma ótima escolha para substituição de lâmpadas incandescentes ou fluorescentes, uma vez que possui desempenho superior, mas com <b>economia de até 80% mais</b>. A Lampada de LED Alta Potência possui <b>14 meses de garantia</b> e selos de qualidade, como ISO 9001:2000 e ISO 14001. Confira a Lampada LED Alta Potencia Amarela ou a Branca agora com frete expresso grátis para todo o Brasil! <a href="/lampada-de-led-alta-potencia-40w-branco-frio">Lampada LED Alta Potência 40w</a>, <a href="/lampada-de-led-alta-potencia-50w-branco-frio">Lampada LED Alta Potência 50w</a>, <a href="/lampada-de-led-alta-potencia-80w-branco-frio">Lampada LED Alta Potência 80w</a>, <a href="/lampada-led-alta-potencia-100-w-branco-frio">Lampada LED Alta Potência 100w</a> e muito mais na Iluminim, aproveite!'
               },

               ['1139456']: {
                  html: 'A <strong>Lampada LED Milho</strong> da Iluminim, conhecida também como Lâmpada 3U ou Lâmpada 4U possui <b>certificacação do Inmetro e garantia de 14 meses</b>. A vida útil de até e 50.000 horas da Lampada de LED Milho, superior a modelos tradicionais de lâmpadas, comprova o excelente padrão de qualidade do produto. Confira a <a href="/lampada-led-9w-e27-3u">Lampada LED Milho 9W</a>, <a href="/lampada-led-12w-e27-3u">Lampada LED Milho 12W</a>, <a href="/lampada-led-16w-e27-branco-quente">Lampada LED Milho 16W</a>, <a href="/lampada-led-20w-e27-3u-branco-quente">Lampada LED Milho 20W</a>, <a href="/lampada-led-50w-e27-3u-branco-frio">Lampada LED Milho 50W</a>, <a href="#">Lampada LED Milho 100W</a> e muito mais opções. Compre agora com desconto!'
               },

               ['1170418']: {
                  html: 'A <strong>PAR LED</strong>, encontrada na Iluminim como Lâmpada <a href="/par-led?sort=mais_vendidos">PAR20</a>, <a href="/par-led?sort=mais_vendidos">Lâmpada PAR30</a> e <a href="/par-led?sort=mais_vendidos">Lâmpada PAR38</a>, são modelos de lampada de led para residencia ou empresas. Disponíveis nas opções de <a href="/lampada-par20-led-5w-bivolt-branco-quente-aro-cromado">PAR LED 5W</a>, <a href="/lampada-par38-led-18w-bivolt-branca">PAR LED 18W</a>, <a href="/kit-lampada-super-led-automotiva-headlights-600k-efeito-xenon">PAR LED 40W</a>, etc são lâmpadas led dimerizáveis, com alto desempenho e economia reduzida. Adquira agora a sua com <b>14 meses de garantia</b> para instalação em sancas, tetos, abajures, luminárias ou móveis. Frete expresso grátis para todo Brasil e parcelamento em até <b>12x sem juros</b>, aproveite!'
               },

               ['1170440']: {
                  html: 'A Lampada <strong>Halopin LED</strong>, encontrada nos modelos Lampada G9 ou Lampada G4 estão disponíveis na Iluminim em duas cores, a lampada halopin led amarela ou branca fria. Mesmo pequena, a Lampada G9 ilumina bem e possui desempenho superior a tecnologias, como a incandescente e fluorente. Muita utilizada em abajures, arandelas e luminárias a <strong>Halopin LED</strong> tem seu uso comercial e residencial. Adquria agora a <a href="/lampada-led-halopin-g9-5w-branco-quente-220V">lampada halopin g9 led 5w</a> ou a <a href="/lampada-led-halopin-g9-7w-branco-frio">lampada halopin g9 led 7w</a> em até 12x sem juros e <b>frete expresso grátis</b>'
               },
                              
               ['2309423']: {
                  html: 'Compre agora a sua <strong>Lâmpada LED RGB</strong> na maior loja de LEDs do Brasil, líder no segmento e especialista na comercialização de LED RGB. Lampada de LED RGB com <b>14 meses de garantia</b>, certificações de qualidade e desempenho incomparável aqui. Adquira com <b>frete grátis</b>, parcelamento em até 12x sem juros ou 10% de desconto para pagamento no boleto. Aproveite essa oportunidade veja agora a <a href="/lampada-led-bulbo-5w-rgb-com-controle">lampada led rgb 5w</a>!'
               },

               ['2309599']: {
                  html: 'A <strong>Lampada LED Bolinha</strong> ou lampada led bola tem disponibilidade nas potências de <a href="/lampada-led-bolinha-1w-branco-frio">1w</a> a <a href="/lampada-led-bolinha-3w-branco-quente">5w</a>. Mesmo pequena, a lâmpada de led bolinha possui alto desempenho com economia de energia garantida. Troque agora mesmo sua lampada incandescente por esse modelo de lampada led e tenha certeza de estar adquirindo um produto com <b>selo de qualidade ISO 9001:2000 e ISO 14001</b>. Compre já a sua!'
               },

               ['2615431']: {
                  html: 'Adquira agora mesmo o <strong>Plafon LED 12W</strong> com <b>preço promocional</b> e tenha ótima iluminação e visual sofisticado para sua sala, quarto ou escritório. Plafon LED Redondo 12W e Plafon LED Quadrado 12W de design moderno e alta durabilidade com carcaça branca ou preta exclusiva da Iluminim. Garanta agora o <strong>Plafon LED 12W</strong> em oferta especial. Compre!'
               },

               ['2536276']: {
                  html: 'Confira os modelos de lampadas de led automotivas da Iluminim, categoria campeã de vendas para automóveis. Deixe seu carro com estilo, sofisticação e <b>segurança</b>, a lampada de led automotiva da Iluminim oferece até 200% a mais de visibilidade que lâmpadas tradicionais. Adquira agora seu <strong>LED Automotivo</strong> com duração de até 50.000 horas, ou seja não se preocupe com a troca pelos próximos 20 anos! Compre já as suas lampadas de led para farol de carros!'
               },

               ['2309600']: {
                  html: 'Compre agora <strong>Lampada LED W-fi</strong> na maior loja de LEDs do Brasil. Parcele a compra em até <b>12x sem juros</b> ou escolha por <b>10% de desconto</b> para pagamento no boleto. Ainda, aproveite a novidade, <b>frete expressa grátis</b> em compras acima de R$299,00. Não perca tempo e adquira sua smart bt lâmpada led câmera 360º wi-fi com a melhor qualidade LED do mercado, aproveite as ofertas de até 80% OFF!'
               },

               ['1357183']: {
                  html: 'Já encontrou os <strong>Kits Lampadas de LED</strong>? Vejas algumas da potências disponíveis: <a href="https://www.iluminim.com.br/kit-10-lampada-led-tubular-9w-60cm-t8-branco-frio">kit lampada led 9w</a>, <a href="https://www.iluminim.com.br/kit-10-lampadas-led-12w-bulbo-a60-bivolt-branca-amarela">kit lampada led 12w</a>, <a href="https://www.iluminim.com.br/kit-10-lampada-led-16w-milho-e27">kit lampada led 16w</a>, kit lampada led 20w, etc. Não faltam opções para você escolher para todos os ambientes. Compre agora seu kit com <b>frete grátis</b> para todo o Brasil e parcelamento em até <b>12x sem juros</b>. Se for sua primeira compra solicite um código de desconto via chat para um de nossos representantes comerciais, garanta o preço baixo agora mesmo!'
               },

               ['1170407']: {
                  html: 'A <strong>Lampada LED AR</strong> não esquenta, não emite raios UV e não ofusca a luz. Além disso, pode representar uma <b>economia de até 80%</b> de energia, quando comparada a lâmpadas halogenas, fluorescentes ou incandescentes. Seu uso é muito comum para criar pontos de luz ou destacar objetos. Adquira a sua Lampada de led AR de um fornecedor de qualidade e que é há 8 anos <b>líder no segmento de iluminação de led</b>. Aproveite as ofertas!'
               },

               ['3536665']: {
                  html: "Confira na maior empresa de LED's do Brasil, o melhor custo benefício em <strong>Plafon Quadrado</strong> da internet. A maior linha de <b>Luminaria Plafon Quadrada</b>, com alto desempenho, baixo consumo, preço justo e extensa garantia, só podia ser na Iluminim. O nosso <b>Plafon Quadrado LED</b> é perfeito para diversos tipos de ambiente como cozinha, banheiro, quarto, sala de estar, sala de jantar, varanda e muito mais. Não perca mais tempo e adquira agora. Confie na líder!"
               },

               ['3631884']: {
                  html: "O menor preço, o maior desempenho e qualidade insuperável em <strong>Plafon Redondo</strong> é aqui. Essa extensa linha de <b>Luminaria Plafon Redonda</b>, tem a maior garantia do mercado com até 3 anos, o maior índice de lúmens por potência e a entrega é feita à jato. O <b>Plafon de LED Redondo</b> é ideal para vários estilos e tipos de ambiente como banheiro, cozinha, sala de jantar, sala de estar, quarto, varanda e demais locais. Confira hoje mesmo e aproveite as ofertas. Confie na líder!"
               },

               ['3765115']: {
                  html: "Se você se pergunta o que é torneira monocomando, chegou a hora de entender de uma vez por todas: A <strong>Torneira Monocomando</strong> é um modelo de torneira que contém na sua alavanca de ligar e desligar a opção de regulagem de temperatura d'água. Sendo ela uma Torneira Monocomando quente e fria, dando total autonomia para escolher a melhor temperatura de acordo com sua necessidade. Escolha já entre os modelos de torneira monocomando cozinha, torneira monocomando banheiro ou torneira monocomando lavanderia e garanta um produto de qualidade na sua casa. Não perca!"
               },

               ['3765124']: {
                  html: "Não precisa mais procurar pela melhor torneira de cozinha flexivel online. Ela está aqui. Confira agora mesmo toda a nossa linha de torneira flexivel para cozinha e se impressione com um produto de <b>extrema qualidade</b>, feito com aço inox, liga de cobre e silicone. Com moderno sistema de fechamento fazendo-a ter uma <b>durabilidade 2x maior</b>, a <strong>Torneira Flexivel</strong> da Iluminim eleva o patamar do mercado. Entregamos um produto de qualidade de ponta, com imensa luxuosidade e com um preço abaixo da média. Compre já sua torneira cozinha flexivel e duradoura hoje mesmo!"
               },

               ['3770359']: {
                  html: "Buscando por Torneira Cascata de Vidro, Torneira Cascata Quadrada ou ainda Torneira Cascata Alta? Oferecemos a melhor linha de Torneira Cascata Banheiro da internet, com o <b>melhor preço</b> do mercado e <b>entrega expressa</b>. Toda a categoria de <strong>Torneira Cascata</strong> é simultaneamente Torneira Cascata Monocomando, ou seja, todos os nossos modelos possuem função de alterar a temperatura da água através do registro da torneira. Temos o prazer de garantir o <b>melhor custo-benefício</b> da internet. Compre já a melhor opção para você!"
               },

               ['3789098']: {
                  html: "Geralmente quando chega essa época do ano ficamos na dúvida em que produtos usar, então separamos algumas ideias: Para <strong>decoração de natal</strong> para jardim e quintal, dispomos de uma vasta linha de Espeto LED, Balizador e Arandela. Já para decoração de natal para mesa, sugerimos a nossa Fita de LED para enfeitar o local. Pensando em <strong>decoração de natal</strong> para sala e para loja, sugerimos nossa linha de produtos RGB, como Lâmpadas, Refletores, Espetos e Fitas. Não perca nenhuma das tendencias de decoração de natal de 2019 e garanta já a sua iluminação. Aproveite!"
               },

               ['2855973']: {
                  html: "Querendo investir em iluminação solar para jardim? Temos as melhores opções para você economizar muito mais na hora de montar seu projeto de iluminação de jardim externo. São diversos modelos de Espeto, Spot Balizador, Arandelas, Refletores e muito mais produtos LED para você caprichar no ambiente. Garantimos um experiência de compra excelente, com disponibilidade de parcelamento em até 12x sem juros e entrega à jato. Sem contar com o menor preço do mercado e diversos certificados que garantem a qualidade dos produtos da Iluminim. Iluminação jardim top de linha com super economia é aqui, aproveite nossas promoções e garanta já tudo o que você precisa. Confira!"
               },

               ['3722442']: {
                  html: "A sofisticação que faltava para sua sala você adquire com nossa linha de <strong>lustres para sala de jantar</strong>. Produzidos com <b>cristal K9</b>, nossos lustres são de alta qualidade e beleza. Apesar de luxuosa, a linha de lustre para sala é a mais rentável do mercado, já que temos o compromisso de levar produtos de alto padrão à custos mais acessíveis do que a média. Ou seja, garantimos o melhor preço!<br><br>Talvez você esteja em busca de lustre para sala de jantar conjugada com sala de estar? Temos o prazer de oferecer a você esse e muitos outros modelos como o lustre para sala de jantar cristal e o lustre pendente para sala de jantar. Nossa linha é de alta qualidade e leva a oportunidade de você ter um belo lustre pelo melhor valor do mercado. Seja lustre para sala de jantar pequena ou grande, comprar aqui é certeza de satisfação e antes de tudo de entrega expressa e frete grátis. Confira nossos imperdíveis lustres agora mesmo!"
               },

               ['3328011']: {
                  html: 'Não perca a chance de contar com a melhor linha de <strong>Refletor Industrial</strong> de alta performance no seu projeto. Dar uma cara nova a sua iluminação industrial é extremamente importante para o desenvolvimento e economia da empresa ou comércio. Com isso em mente, a Iluminim fez uma seleção exclusiva com os melhores modelos de Refletor Industrial em alumínio para você ter qualidade, força e economia em um único produto.<br><br>Na Iluminim, você pode contar com Refletor Industrial 200W, 150W, 100W e até 50W, todos com alta taxa de lúmens e desempenho duradouro por anos. Toda nossa linha de Refletor Industrial LED contém tudo o necessário para instalação, que é feita de maneira fácil, e ainda conta com um índice de proteção contra água e intempéries de até IP68.<br><br>Compare e veja que os Refletores para iluminação industrial da Iluminim têm o melhor custo-benefício do mercado, contam com 3 anos de garantia, até 12x sem juros no cartão e entrega ultra rápida. Confira e compre agora!'
               },
               
               ['4036639']: {
                  html: 'Renove ou reponha sua <strong>Lampada para Refletor</strong> sem precisar gastar muito. Todo o poder do LED de alto desempenho da Iluminim, você pode adquirir com preço baixo e entrega rápida. A extensa linha de Lampada de LED para Refletor que disponibilizamos nas potências 20W, 30W, 40W, 50W, 65W, 70W, 80W, 100W, 120W, 150W, 200W e 250W estão disponíveis à pronta entrega.<br><br>Substitua sua Lampada para Refletor 1000w pela nossa Lampada de Alta Potencia LED 100w, por exemplo. Ou ainda, nossa Lampada de LED 50W para Refletor pela sua Lampada para Refletor 500w. Invista no melhor LED do mercado pagando pouco e potencialize a iluminação da sua garagem, do seu estacionamento, comércio, iluminação pública e ambientes externos ou internos que necessitem de ampla iluminação.<br><br>Lampada Grande para Refletor em até 12x sem juros, com frete grátis em compras acima de R$ 299,00 e mais de 1 ano de garantia você só encontra na maior loja de LED do Brasil. Confie em quem entende! Confie na líder!'
               },
               
               ['2493161']: {
                  html: 'Buscando <strong>Dimmer LED</strong> de alta performance, de fácil instalação e com preço baixo? Confira agora um dos diversos modelos de Dimmer para LED e eleve o nível de tecnologia do local. Se você chegou aqui sem saber o que é dimmer, nós te explicamos: o dimmer é um <b>dispositivo usado para variar a intensidade da iluminação</b> de um local. Assim, você consegue ter o controle total da luz do seu ambiente, podendo optar por um ambiente com o máximo de iluminação, meia luz ou luz baixa.<br><br>A Iluminim oferece modelos como Dimmer Controlador de Velocidade, Dimmer 12v, Dimmer 1000W, Dimmer para Fita LED, Dimmer para Lampada LED, além de outros modelos. Uma grande variedade, sempre pensada para garantir a ampla escolha do seu bem estar.<br><br>Você pode comprar seu interruptor Dimmer com preço baixo e com as melhores condições do mercado, possibilidade de parcelamento sem juros e desconto de 10% para pagamento à vista. Escolha já o tipo de <strong>Dimmer LED</strong> ideal para você e compre agora!'
               },
               
               ['3538951']: {
                  html: 'Automatize a sua iluminação residencial ou comercial com o <strong>Relé Fotoelétrico</strong> mais buscado da internet. Também conhecido como Relé Fotocélula, este dispositivo, quando conectado a um refletor, luminária pública ou algum outro tipo de iluminação, liga automaticamente ao anoitecer. Deixando o local muito mais seguro, evitando acidentes e diminuindo a probabilidade de furtos, além de economizar energia ligando o produto apenas quando necessário.<br><br>Disponível em vários modelos como Relé Fotoelétrico com base (corujito), com temporizador, convencional e mais. Rele Fotocelula bivolt, de fácil instalação e com o menor preço da internet é com a gente.<br><br>O local perfeito para comprar rele fotoeletrico é na Iluminim. Parcelas sem juros e desconto de 10% no boleto, além de oferecermos um serviço de entrega ágil e eficiente. Tudo pensado para garantir uma excelente experiência de compra e uso. Compre já!'
               },
               
               ['3366581']: {
                  html: 'Se você também se pergunta ""Qual o melhor plafon para quarto?"", faça igual aos milhares de clientes da Iluminim e adquira seu <strong>Plafon para Quarto</strong> aqui. Oferecemos em diversos modelos, como Plafon para Quarto de Casal, Plafon para Quarto de Bebê ou infantil, nos formatos quadrado e redondo e nos modelos Sobrepor e Embutir.Disponibilizamos as cores de luz Branco Frio, Branco Neutro e Branco Quente, para você ter ainda mais opções de escolha visando atender sua necessidade. Além do tradicional Plafon feito de acrílico e alumínio, ofertamos o modelo Plafon de Cristal para quarto, para quem busca uma sofisticação a mais no local.<br><br>Não perca a chance de ter o Plafon LED para Quarto mais procurado do Brasil sem precisar sair de casa. Compre online e receba rapidamente em sua residência, pagando sem juros parcelado ou à vista com desconto de 10%. O Plafon moderno para quarto que você precisava está aqui. Adquira o seu!'
               },
               
               ['2182837']: {
                  html: 'Pague pouco pelo seu sistema de segurança comprando <strong>Kit Câmera de Segurança</strong> aqui. A maior economia do mercado, sem perder em qualidade, assim pode ser definido o Kit de Cameras de Segurança infravermelho comercializado pela Iluminim. Prezamos por produtos de alta qualidade, que ofereçam alto desempenho e longa vida útil, tudo isso visando a melhor experiência de uso do consumidor.<br><br>Compre aqui seu kit camera de segurança residencial ou comercial em até 12x sem juros, com frete rápido e grátis em compras acima de R$ 299,00 e tenha certeza de um produto extraclasse que monitora, grava e reproduz imagens em alta definição.<br><br>Nosso Kit Camera de Segurança Full HD é perfeito para garantir a segurança de garagens, condomínios, residências, prédios, jardins e demais ambientes internos ou externos. Para mais comodidade e acessibilidade, você pode comprar o Kit Camera de Segurança Externa WiFi, que monitora em ambientes com risco de chuva, já que é um produto à prova d\'água, e ainda trasmite diretamente para o seu smartphone graças a sua conexão wi-fi. Garanta já o seu!'
               },
               
               ['1608525']: {
                  html: 'Compre <strong>Luminaria para Banheiro</strong> com super desconto e alta performance aqui na Iluminim. A maior linha de <strong>Luminaria para Banheiro LED</strong> dispõe de diversas cores de borda como a tradicional branca e nas cores preto, vermelho, verde, rosa, cinza e marrom. Confira também nosso modelo de luminária sem borda.<br/><br/>As opções de luz branco frio, branco neutro e branco quente, estão presentes em todos as nossas luminarias para banheiro. Os modelos <strong>luminaria de parede para banheiro</strong> e <strong>luminaria de teto para banheiro</strong> são perfeitos para qualquer estilo de decoração e tamanho de ambiente, seja <strong>Luminaria para Banheiro Pequeno</strong> ou <b>Luminaria para Banheiro Grande</b> No momento da escolha, é importante também se atentar a potência do produto.<br/><br/>Disponibilizamos as opções de potência <b>3W, 6W, 12W, 18W, 25W, 30W, 32W, 36W, 42W</b>, dentre outros. Visamos sempre o melhor para você, por isso oferecemos esta extensa linha de <strong>Luminaria para Banheiro</strong> para que você encontre tudo em iluminação LED para seu banheiro. Compre em até 12x sem juros e ganhe frete grátis em compras acima de R$ 299,00. Aproveite!'
               },
               
               ['1608539']: {
                  html: 'Deixe sua cozinha mais moderna com nossa extensa linha de <strong>Luminaria para Cozinha</strong>. Aqui você encontra <strong>Luminarias para Cozinha de Apartamento</strong>, Casa ou Restaurante com diversas potências e modelos de cor: de luz ou material.<br/><br/>Se você se pergunta qual a melhor luminária LED para cozinha, seja ela cozinha americana, cozinha integrada, com ilha, escura ou clara, entre em contato conosco em nosso chat que teremos o prazer de lhe ajudar a escolher o modelo que mais se adequa a sua necessidade. Escolha entre as potências <b>3W, 6W, 12W, 18W, 25W, 30W, 32W, 36W, 42W</b> e mais opções de <strong>Luminaria LED para cozinha</strong>.<br/><br/>Encontre tudo para a iluminação da sua cozinha na Iluminim em até 12x sem juros ou desconto de 10% à vista no boleto. <strong>Luminaria de teto para Cozinha</strong> com até 3 anos de garantia e entrega expressa. Compre a sua!'
               },
               
               ['1608544']: {
                  html: 'Encontre na Iluminim a melhor linha de <strong>Luminaria de Teto para Quarto</strong> do país. Produtos de alta qualidade, com preços justos e a entrega mais rápida do segmento. A nossa luminária de teto embutida ou sobreposta acompanha todos os itens necessários para efetuar a instalação - que é facilmente realizável -, tem certificado de 3 anos de garantia contra defeitos de fábrica e está disponível nas cores de luz branco frio, branco neutro e branco quente.<br><br>A luminária de teto LED para quarto da Iluminim segue rigorosamente as normas ISO 9001:2000 e ISO 14001. Feito com acrílico e alumínio, este produto é perfeito para diversos estilos de quarto, servindo como luminaria de teto para quarto de bebe, quarto infantil e quarto de casal.<br><br>Aproveite nossas super promoções e leve ainda hoje a sua <strong>Luminaria de Teto para Quarto</strong> pagando pouco. Confie na líder!'
               },
               
               ['1608601']: {
                  html: 'Garanta uma iluminação de qualidade para toda a sua casa na Iluminim. Oferecemos a mais completa linha de <strong>Luminaria para Varanda</strong> da internet, com até 3 anos totais de garantia contra defeitos de fábrica e acompanhando todos os utensílios necessários para sua instalação. Nossa luminaria de teto para varanda está disponível com as cores de borda: preta, vermelha, branca, verde, marrom, cinza e rosa. Já nossa linha de luminarias de parede para varanda dispõe das opções de cor: preta e branca.<br><br>Escolha entre os tons de luz branco quente, branco neutro ou branco frio para ditar o humor do local. Nossos plafons são ideais para todos os estilos de decoração e podem servir como luminaria para varanda externa, colonial, varanda de madeira, gourmet ou de apartamento.<br><br>Não perca mais tempo e adquira agora a opção de luminária que mais se encaixa com a sua necessidade. Além do menor preço e maior garantia do mercado, oferecemos também frete totalmente gratuito para compras acima de R$ 299,00, desconto de 10% no boleto ou 12x sem juros no cartão. Compre já a sua!'
               },
               
               ['919821']: {
                  html: 'Apresentamos o maior saldão de LED do Brasil! Buscamos constantemente oferecer o melhor preço do mercado, e nessa sessão você encontra as super <strong>Ofertas da Semana</strong> da Iluminim.<br><br>A maior seleção de produtos LED do país, acompanhado do melhor preço. Confira agora nossa <strong>promoção lampada LED</strong>, nosso super <strong>kit refletor LED 50W frete gratis</strong> e nossas <strong>luminarias em promoção</strong> e tenha certeza de uma enorme economia.<br><br>Todos os nossos produtos tem certificado de garantia - o maior do segmento - e nota fiscal, parcelamos em até 12x sem juros, oferecemos 10% de desconto para compras à vista no boleto e frete 100% gratuito para compras acima de R$ 299,00.<br><br>Compre já <strong>lampadas LED em oferta</strong>, <strong>refletor LED barato</strong> e <strong>luminaria pendente em promoção</strong> aqui na Iluminim. Confie em quem entende! Confie na líder!'
               },
               
               ['2615440']: {
                  html: 'Bem-vindo(a) a maior linha de <strong>Plafon LED 36W</strong> disponível na internet. Os já conhecidos produtos gabaritados da Iluminim se estendem a todas as categorias e com a linha de Luminária LED 36W não seria diferente. Garanta o seu e conte com uma iluminação com alta taxa de lúmens reais, já que a última geração em LED está embutida nos produtos desta linha.<br>Escolha entre a Luminária LED Sobrepor 36W ou Luminária LED Embutir 36W e faça a reforma da sua casa o quanto antes. Perfeita para qualquer tipo de ambiente interno, este <strong>Plafon LED 36W</strong> é ideal para cozinhas, corredores, banheiros e escritórios, em seu tom de luz Branco Frio. Já em sua tonalidade Branco Quente, nossa sugestão é instalar em locais que necessitem mais relaxamento e descontração, como é o caso da sala de jantar, do quarto, sala de estar, dentre outros.<br>Seja Plafon LED Sobrepor 36W ou Luminária LED Embutir 36W, pague em até 12x sem juros no cartão e receba seu produto de graça em sua casa, em qualquer lugar do país. Você pode economizar mais escolhendo algum dos kits de luminárias, onde você paga menos na unidade se comprar mais produtos. Invista agora mesmo na sua própria economia comprando sua iluminação para quarto aqui. Confie em quem entende! Confie na líder!'
               },
               
            }

            return objeto[ILUMINIM_UTILS.categoria.id()];

         },

         gerarHTML(){

            let objeto = this.gerarObjeto();
         
            if(!objeto){
               return;
            }

            let { html } = objeto;

            return `
               <div class="componente texto-categoria-rodape">
                  <div class="interno has-view-more">
                     ${html}
                  </div>
               </div>
            `;

         },

         renderizar(){

            let html = this.gerarHTML();

            if(!html){
               return;
            }

            $('.pagina-categoria #corpo > .conteiner .secao-principal .avalicoes-categoria').before(html);

         }

      }

      TextosCategoriaRodape.renderizar();

   },

   iniciar(){ //INICIAR SCRIPTS DA PÁGINA;

      //ILUMINIM_UTILS.renderizarCategoriasFlutuante();
      ILUMINIM_UTILS.renderizarBotaoVoltarAoTopo();
      ILUMINIM_UTILS.adicionarFiltroLancamentos();
      //ILUMINIM_UTILS.newsletterFlutuante();
      ILUMINIM_UTILS.ajustePaginacao();
      ILUMINIM_UTILS.verificarFiltrosAtivo();
      ILUMINIM_UTILS.adicionaTextoModalCompraSegura();
      ILUMINIM_UTILS.adicionarBlocoLateralNaoEncontrouOqueProcurava();

      this.cronometroCategoria();
      this.moverTextoCategoria();
      this.adicionarFiltroPrecoPersonalizado();
      this.verificarCategoriaAtiva();
      this.postsBlog();
      this.reviewsQuemComprou();
      this.palavrasMaisBuscadas();
      this.pesquisasEmAlta();
      this.avalicoesTrustVoxCategoria();
      this.videoCategoria();
      this.navegacaoCategoria();
      this.dropDownTextoCategoria();
      this.textosRodapeCategoria();

      this.paginasPersonalizadas(); //MANTER NO FINAL.

   }

}

$(document).ready(()=> {
   
   PaginaCategoria.iniciar();

});