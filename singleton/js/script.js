(function(win, $){
	var CircleGeneratorSingleton = (function(){
		var instance;

		function init(){
		//everything that is singleton returns is here:
			var _aCircle = [],
			_stage = $('.advert');

			function _position(circle, left, top){
				circle.css('left', left);
				circle.css('top', top);
			}

			function create(left, top){
				var circle = $('<div class="circle"></div>');
				_position(circle, left, top);
				return circle;
			}

			function add(circle){
				_stage.append(circle);
				_aCircles.push(circle);
			}

			function index(){
				return _aCircle.length;
			}
			return {
				index: index,
				create: create,
				add: add
			};
		}

		return {
			getInstance: function(){
				if(!instance){
					instance = init();
				}
				return instance;
			}
		}
	})();

	$(win.document).ready(function(){
		$('.advert').click(function(e){
			var cg = CircleGeneratorSingleton.getInstance();
			var circle = cg.create(e.pageX-25, e.pageY-25);
			cg.add(circle);

		});

		$(document).keypress(function(e){
			if(e.key == 'a'){
				var cg = CircleGeneratorSingleton.getInstance();
				var circle = cg.create(Math.floor(Math.random()*1800), Math.floor(Math.random()*800));
				cg.add(circle);
			}
			
		});

	});

	/*$(win.document).ready(function(){
		$('.advert').click(function(e){
			var circle = $('<div class="circle"></div>');
				circle.css('left',e.pageX-25);
				circle.css('top',e.pageY-25)
			$('.advert').append(circle);
		});

	});*/

})(window, jQuery);