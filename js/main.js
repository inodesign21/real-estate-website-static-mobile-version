// Accordion Toggle Icon
          function toggleChevron(e) {
              $(e.target)
                  .prev('.panel-heading')
                  .find("i.indicator")
                  .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
          }
          $('#accordion').on('hidden.bs.collapse', toggleChevron);
          $('#accordion').on('shown.bs.collapse', toggleChevron);


// Select Pretensão -->
        $(document).ready(function() {
            $('#pretensao').multiselect({
                nonSelectedText: 'Pretensão'
            });
        });


// Select Tipo
        $(document).ready(function() {
            $('#tipo').multiselect({
                nonSelectedText: 'Tipo'
            });
        });


// Valor
        $(document).ready(function() {
            $('#valor').multiselect({
                nonSelectedText: 'Valor'
            });
        });


// cidade
        $(document).ready(function() {
            $('#cidade').multiselect({
                nonSelectedText: 'Cidade'
            });
        });


// quarto
        $(document).ready(function() {
            $('#quarto').multiselect({
                nonSelectedText: 'Quarto'
            });
        });


// suite
        $(document).ready(function() {
            $('#suite').multiselect({
                nonSelectedText: 'Suite'
            });
        });


// garagem
        $(document).ready(function() {
            $('#garagem').multiselect({
                nonSelectedText: 'Garagem'
            });
        });


// banheiro
        $(document).ready(function() {
            $('#banheiro').multiselect({
                nonSelectedText: 'Banheiro'
            });
        });


// m2
$(document).ready(function() {
    $('#m2').multiselect({
        nonSelectedText: 'm²'
    });
});




// Ajustes do Multiseleção do Bairro
        $(document).ready(function() {
            $('#bairro').multiselect({
                numberDisplayed: 2,
                maxHeight: 250,
                nonSelectedText: 'Bairro',
                enableFiltering: true,
                filterBehavior: 'both',
                enableCaseInsensitiveFiltering: false,
                filterPlaceholder: 'Procure',
                includeSelectAllOption: true,
                selectAllText: 'Todos',
                nSelectedText: 'bairros'
            });
        });

// Ajustes do gallery
blueimp.Gallery(
    document.getElementById('imovel1').getElementsByTagName('a'),
    {
        container: '#container-imovel1',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: true,
        slideshowInterval: 2500
    }
);

blueimp.Gallery(
    document.getElementById('imovel2').getElementsByTagName('a'),
    {
        container: '#container-imovel2',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: false
    }
);

blueimp.Gallery(
    document.getElementById('imovel3').getElementsByTagName('a'),
    {
        container: '#container-imovel3',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: false
    }
);

blueimp.Gallery(
    document.getElementById('imovel4').getElementsByTagName('a'),
    {
        container: '#container-imovel4',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: false
    }
);

blueimp.Gallery(
    document.getElementById('imovel5').getElementsByTagName('a'),
    {
        container: '#container-imovel5',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: false
    }
);

blueimp.Gallery(
    document.getElementById('imovel6').getElementsByTagName('a'),
    {
        container: '#container-imovel6',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: false
    }
);

blueimp.Gallery(
    document.getElementById('imovel7').getElementsByTagName('a'),
    {
        container: '#container-imovel7',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: false
    }
);

blueimp.Gallery(
    document.getElementById('imovel8').getElementsByTagName('a'),
    {
        container: '#container-imovel8',
        carousel: true,
        stretchImages: 'cover',
        startSlideshow: false
    }
);

// Ajustes do button
(function() {   
                var docElem = window.document.documentElement, didScroll, scrollPosition;

                // trick to prevent scrolling when opening/closing button
                function noScrollFn() {
                    window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
                }

                function noScroll() {
                    window.removeEventListener( 'scroll', scrollHandler );
                    window.addEventListener( 'scroll', noScrollFn );
                }

                function scrollFn() {
                    window.addEventListener( 'scroll', scrollHandler );
                }

                function canScroll() {
                    window.removeEventListener( 'scroll', noScrollFn );
                    scrollFn();
                }

                function scrollHandler() {
                    if( !didScroll ) {
                        didScroll = true;
                        setTimeout( function() { scrollPage(); }, 60 );
                    }
                };

                function scrollPage() {
                    scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
                    didScroll = false;
                };

                scrollFn();
                
                var el = document.querySelector( '.morph-button' );
                
                new UIMorphingButton( el, {
                    closeEl : '.icon-close',
                    onBeforeOpen : function() {
                        // don't allow to scroll
                        noScroll();
                    },
                    onAfterOpen : function() {
                        // can scroll again
                        canScroll();
                        // add class "noscroll" to body
                        classie.addClass( document.body, 'noscroll' );
                        // add scroll class to main el
                        classie.addClass( el, 'scroll' );
                    },
                    onBeforeClose : function() {
                        // remove class "noscroll" to body
                        classie.removeClass( document.body, 'noscroll' );
                        // remove scroll class from main el
                        classie.removeClass( el, 'scroll' );
                        // don't allow to scroll
                        noScroll();
                    },
                    onAfterClose : function() {
                        // can scroll again
                        canScroll();
                    }
                } );
            })();