/**
 * Typeahead (jquery)
 */

//'use strict';

$(function () {
  
  if (isRtl) {
    $('.typeahead').attr('dir', 'rtl');
  }


  // Render default Suggestions
  function renderDefaults(q, sync) {
    if (q === '') {
      sync(prefetchExample.get('Sao Pedro - SP', 'Campo Limpo Paulista - SP', 'Sao Paulo - SP'));
    } else {
      prefetchExample.search(q, sync);
    }
  }
  
  var prefetchExample = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: assetsPath + 'json/typeahead.json'
  });
 
  // Prefetch Example
  // --------------------------------------------------------------------
  $('.typeahead-prefetch').typeahead(
    {
      hint: !isRtl,
      highlight: true,
      minLength: 0,
      
      /*select: function( event, ui ) { $("#cidadeSearch").on("change", function(){
        alert("Mudou o valor");
        //suafuncaoaqui();
      });}*/
      
    },
    {
     // name: 'states',
      source: renderDefaults,
      
      templates: {
        empty: [
          '<div class="empty-message p-2">',
          'Cidade não localizada. Por favor, digite o nome corretamente...',
          '</div>'
        ].join('\n')
        
      }
    }
  );
 
});
/*function especialCharMask (especialChar){
  especialChar = especialChar.replace('/[áàãâä]/ui', 'a');
  especialChar = especialChar.replace('/[éèêë]/ui', 'e');
  especialChar = especialChar.replace('/[íìîï]/ui', 'i');
  especialChar = especialChar.replace('/[óòõôö]/ui', 'o');
  especialChar = especialChar.replace('/[úùûü]/ui', 'u');
  especialChar = especialChar.replace('/[ç]/ui', 'c');
  especialChar = especialChar.replace('/[^a-z0-9]/i', '_');
  especialChar = especialChar.replace('/_+/', '_'); //
  return especialChar;
}
*/

