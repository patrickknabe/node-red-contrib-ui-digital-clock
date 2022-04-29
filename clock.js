module.exports = RED => {
	let ui;

	RED.nodes.registerType( 'ui_digital_clock', function( config ) {
		RED.nodes.createNode( this, config );

		if( !ui ) {
			try {
				ui = RED.require( 'node-red-dashboard' )( RED );
			} catch {}
		}

		if( ui && RED.nodes.getNode( config.group ) ) {
			this.on( 'close', ui.addWidget( {
				node: this,
				format: `
					<svg version="1.1" viewBox="0 0 3508.2 1000" xmlns="http://www.w3.org/2000/svg">
						<path style="display: {{ segs[ 0 ][ 0 ] ? 'block' : 'none' }}" d="m164.59 8e-5h332.31l33.735 36.176-84.078 78.404h-247.65l-73.113-78.404z" />
						<path style="display: {{ segs[ 0 ][ 1 ] ? 'block' : 'none' }}" d="m87.115 72.249 75.498 80.961-16.917 241.93-74.915 69.86-38.525-41.313 22.462-321.23z" />
						<path style="display: {{ segs[ 0 ][ 2 ] ? 'block' : 'none' }}" d="m454.96 389.16 15.725-224.88 95.964-89.488 19.36 20.761-23.784 340.13-34.168 31.863z" />
						<path style="display: {{ segs[ 0 ][ 3 ] ? 'block' : 'none' }}" d="m171.1 443.65h262.35l55.921 59.968-58.717 54.612h-272.94l-50.926-54.612z" />
						<path style="display: {{ segs[ 0 ][ 4 ] ? 'block' : 'none' }}" d="m68.05 539.75 62.822 67.368-17.266 246.91-76.188 71.046-37.419-40.127 21.076-301.4z" />
						<path style="display: {{ segs[ 0 ][ 5 ] ? 'block' : 'none' }}" d="m525.64 542.51 27.085 29.045-23.14 330.91-27.204 25.368-79.153-84.881 15.331-219.24z" />
						<path style="display: {{ segs[ 0 ][ 6 ] ? 'block' : 'none' }}" d="m73.685 963.97 83.764-78.112h233.35l72.84 78.112-38.641 36.033h-317.71z" />
						<path style="display: {{ segs[ 1 ][ 0 ] ? 'block' : 'none' }}" d="m750.6 7.6241e-5h332.31l33.734 36.176-84.078 78.404h-247.65l-73.113-78.404z" />
						<path style="display: {{ segs[ 1 ][ 1 ] ? 'block' : 'none' }}" d="m673.13 72.249 75.498 80.961-16.917 241.93-74.915 69.86-38.525-41.313 22.462-321.23z" />
						<path style="display: {{ segs[ 1 ][ 2 ] ? 'block' : 'none' }}" d="m1041 389.16 15.725-224.88 95.964-89.488 19.36 20.761-23.784 340.13-34.168 31.863z" />
						<path style="display: {{ segs[ 1 ][ 3 ] ? 'block' : 'none' }}" d="m757.11 443.65h262.35l55.921 59.968-58.717 54.612h-272.94l-50.926-54.612z" />
						<path style="display: {{ segs[ 1 ][ 4 ] ? 'block' : 'none' }}" d="m654.06 539.75 62.822 67.368-17.266 246.91-76.188 71.046-37.419-40.127 21.076-301.4z" />
						<path style="display: {{ segs[ 1 ][ 5 ] ? 'block' : 'none' }}" d="m1111.7 542.51 27.085 29.045-23.14 330.91-27.204 25.368-79.153-84.881 15.331-219.24z" />
						<path style="display: {{ segs[ 1 ][ 6 ] ? 'block' : 'none' }}" d="m659.7 963.97 83.764-78.112h233.35l72.84 78.112-38.641 36.033h-317.71z" />
						<path style="display: {{ segs[ 2 ][ 0 ] ? 'block' : 'none' }}" d="m1219.6 558.11h51.994l26.941 58.193-34.923 55.952h-51.994l-25.991-56.215z" />
						<path style="display: {{ segs[ 2 ][ 0 ] ? 'block' : 'none' }}" d="m1235.6 329.36h51.994l26.941 58.193-34.923 55.952h-51.994l-25.99-56.215z" />
						<path style="display: {{ segs[ 3 ][ 0 ] ? 'block' : 'none' }}" d="m1494.3 0h332.31l33.735 36.176-84.078 78.404h-247.65l-73.113-78.404z" />
						<path style="display: {{ segs[ 3 ][ 1 ] ? 'block' : 'none' }}" d="m1416.8 72.249 75.498 80.961-16.917 241.93-74.916 69.86-38.525-41.313 22.462-321.23z" />
						<path style="display: {{ segs[ 3 ][ 2 ] ? 'block' : 'none' }}" d="m1784.6 389.16 15.725-224.88 95.964-89.488 19.36 20.761-23.784 340.13-34.168 31.863z" />
						<path style="display: {{ segs[ 3 ][ 3 ] ? 'block' : 'none' }}" d="m1500.8 443.65h262.35l55.921 59.968-58.717 54.612h-272.94l-50.926-54.612z" />
						<path style="display: {{ segs[ 3 ][ 4 ] ? 'block' : 'none' }}" d="m1397.7 539.75 62.822 67.368-17.266 246.91-76.188 71.046-37.419-40.127 21.076-301.4z" />
						<path style="display: {{ segs[ 3 ][ 5 ] ? 'block' : 'none' }}" d="m1855.3 542.51 27.085 29.045-23.14 330.91-27.204 25.368-79.153-84.881 15.331-219.24z" />
						<path style="display: {{ segs[ 3 ][ 6 ] ? 'block' : 'none' }}" d="m1403.4 963.97 83.764-78.112h233.35l72.84 78.112-38.641 36.033h-317.71z" />
						<path style="display: {{ segs[ 4 ][ 0 ] ? 'block' : 'none' }}" d="m2080.3 0h332.31l33.735 36.176-84.078 78.404h-247.65l-73.113-78.404z" />
						<path style="display: {{ segs[ 4 ][ 1 ] ? 'block' : 'none' }}" d="m2002.8 72.249 75.498 80.961-16.917 241.93-74.916 69.86-38.525-41.313 22.462-321.23z" />
						<path style="display: {{ segs[ 4 ][ 2 ] ? 'block' : 'none' }}" d="m2370.7 389.16 15.725-224.88 95.964-89.488 19.36 20.761-23.784 340.13-34.168 31.863z" />
						<path style="display: {{ segs[ 4 ][ 3 ] ? 'block' : 'none' }}" d="m2086.8 443.65h262.35l55.921 59.968-58.717 54.612h-272.94l-50.926-54.612z" />
						<path style="display: {{ segs[ 4 ][ 4 ] ? 'block' : 'none' }}" d="m1983.7 539.75 62.822 67.368-17.266 246.91-76.188 71.046-37.419-40.127 21.076-301.4z" />
						<path style="display: {{ segs[ 4 ][ 5 ] ? 'block' : 'none' }}" d="m2441.3 542.51 27.085 29.045-23.14 330.91-27.204 25.368-79.153-84.881 15.331-219.24z" />
						<path style="display: {{ segs[ 4 ][ 6 ] ? 'block' : 'none' }}" d="m1989.4 963.97 83.764-78.112h233.35l72.84 78.112-38.641 36.033h-317.71z" />
						<path style="display: {{ segs[ 5 ][ 0 ] ? 'block' : 'none' }}" d="m2534.1 668.64h38.996l20.206 43.645-26.192 41.964h-38.995l-19.493-42.161z" />
						<path style="display: {{ segs[ 5 ][ 0 ] ? 'block' : 'none' }}" d="m2546.1 497.08h38.996l20.206 43.645-26.192 41.964h-38.996l-19.493-42.161z" />
						<path style="display: {{ segs[ 6 ][ 0 ] ? 'block' : 'none' }}" d="m2752.6 250h249.23l25.301 27.132-63.059 58.803h-185.74l-54.835-58.803z" />
						<path style="display: {{ segs[ 6 ][ 1 ] ? 'block' : 'none' }}" d="m2694.5 304.19 56.623 60.721-12.688 181.45-56.187 52.395-28.894-30.985 16.847-240.92z" />
						<path style="display: {{ segs[ 6 ][ 2 ] ? 'block' : 'none' }}" d="m2970.4 541.87 11.794-168.66 71.973-67.116 14.52 15.571-17.838 255.1-25.626 23.897z" />
						<path style="display: {{ segs[ 6 ][ 3 ] ? 'block' : 'none' }}" d="m2757.5 582.74h196.76l41.941 44.976-44.038 40.959h-204.7l-38.195-40.959z" />
						<path style="display: {{ segs[ 6 ][ 4 ] ? 'block' : 'none' }}" d="m2680.2 654.81 47.117 50.526-12.949 185.18-57.141 53.285-28.064-30.095 15.807-226.05z" />
						<path style="display: {{ segs[ 6 ][ 5 ] ? 'block' : 'none' }}" d="m3023.4 656.88 20.314 21.784-17.355 248.19-20.403 19.026-59.365-63.661 11.498-164.43z" />
						<path style="display: {{ segs[ 6 ][ 6 ] ? 'block' : 'none' }}" d="m2684.5 972.97 62.823-58.584h175.01l54.63 58.584-28.981 27.025h-238.28z" />
						<path style="display: {{ segs[ 7 ][ 0 ] ? 'block' : 'none' }}" d="m3192.1 250h249.23l25.301 27.132-63.059 58.803h-185.74l-54.835-58.803z" />
						<path style="display: {{ segs[ 7 ][ 1 ] ? 'block' : 'none' }}" d="m3134 304.19 56.623 60.721-12.688 181.45-56.187 52.395-28.894-30.985 16.847-240.92z" />
						<path style="display: {{ segs[ 7 ][ 2 ] ? 'block' : 'none' }}" d="m3409.9 541.87 11.794-168.66 71.973-67.116 14.52 15.571-17.838 255.1-25.626 23.897z" />
						<path style="display: {{ segs[ 7 ][ 3 ] ? 'block' : 'none' }}" d="m3197 582.74h196.76l41.941 44.976-44.038 40.959h-204.7l-38.195-40.959z" />
						<path style="display: {{ segs[ 7 ][ 4 ] ? 'block' : 'none' }}" d="m3119.7 654.81 47.117 50.526-12.949 185.18-57.141 53.285-28.064-30.095 15.807-226.05z" />
						<path style="display: {{ segs[ 7 ][ 5 ] ? 'block' : 'none' }}" d="m3462.9 656.88 20.314 21.784-17.355 248.19-20.403 19.026-59.365-63.661 11.498-164.43z" />
						<path style="display: {{ segs[ 7 ][ 6 ] ? 'block' : 'none' }}" d="m3124 972.97 62.823-58.584h175.01l54.63 58.584-28.981 27.025h-238.28z" />
					</svg>
				`,
				width: +config.width || +RED.nodes.getNode( config.group ).config.width,
				height: +config.height || 1,
				group: config.group,
				order: config.order,
				beforeEmit: msg => ( { msg } ),
				initController: $scope => $scope.$watch( 'msg.payload', payload => {
					const date = new Date( +payload || 0 );

					let s = date.getHours().toString().padStart( 2, ' ' );
					s += !( date.getSeconds() % 2 ) ? ':' : ' '
					s += date.getMinutes().toString().padStart( 2, '0' );
					s += !( date.getSeconds() % 2 ) ? ':' : ' '
					s += date.getSeconds().toString().padStart( 2, '0' );

					$scope.segs = [];

					for( const c of s ) {
						$scope.segs.push( {
							'0': [ true, true, true, false, true, true, true ],
							'1': [ false, false, true, false, false, true, false ],
							'2': [ true, false, true, true, true, false, true ],
							'3': [ true, false, true, true, false, true, true ],
							'4': [ false, true, true, true, false, true, false ],
							'5': [ true, true, false, true, false, true, true ],
							'6': [ true, true, false, true, true, true, true ],
							'7': [ true, false, true, false, false, true, false ],
							'8': [ true, true, true, true, true, true, true ],
							'9': [ true, true, true, true, false, true, true ],
							' ': [ false, false, false, false, false, false, false ],
							':': [ true ]
						}[ c ] );
					}
				} )
			} ) );
		}
	} );
};