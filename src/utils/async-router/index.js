import Views from 'views/';

export default function(ars) {
	ars.forEach((one, one_key) => {
		if (one.component_name) {
			var one_path = one.component_path;
			var cp       = one.component_name;
			/*console.log(cp);
			console.log(Views[cp]);*/
			one.component = Views[cp];
			if (one.children && one.children.length) {
				one.children.forEach((two, two_key) => {
					if (two.component_name) {
						var two_path = two.component_path;
						var cp2      = two.component_name;
						// console.log(cp2);
						// console.log(Views[cp2]);
						two.component = Views[cp2];
						if (two.children && two.children.length) {
							two.children.forEach((route, route_key) => {
								var page        = route.component_name;
								route.component = Views.Page[one_path][two_path][page];
							});
						}
					}
				});
			}

		}
	});

	return ars;
}