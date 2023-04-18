export default function useGroupLabels(labels: object[]) {
	// Parse:
	// schreibvarianten Namen
	// sonstiger Hofbezug
	// Kirche und Orden

	const res = {
		court_other: [],
		church_and_o: [],
		alt_names: [],
		married_name: [],
		first_marriage: null,
		religion: null, //TODO: at the moment, a person in viecpro can only have one religion; might need adjustement later (make array and include start and end dates)
		title_academic: [],
		title_honor: [],
		other_jobs: [],
	};

	const check = (lt, check_val) => lt.includes(check_val);

	labels.forEach((l) => {
		const lt = l.label_type;

		if (check(lt, "name")) {
			console.log("NAMECHECK WAS TRUE");
			res.alt_names.push({
				label_type: lt,
				name: l.name,
				name_clean: l.name.replace("Schreibvariante", ""),
				start_date: l.start_date,
				end_date: l.end_date,
			});
		} else if (check(lt, "Konfession")) {
			res.religion = l.name;
		} else if (check(lt, "Adelstitel")) {
			res.title_honor.push({ name: l.name, start_date: l.start_date, end_date: l.end_date });
		} else if (check(lt, "verheiratet")) {
			res.married_name.push({ name: l.name, start_date: l.start_date, end_date: l.end_date });
		} else if (check(lt, "Nachname verheiratet (1. Ehe")) {
			res.first_marriage = l.name;
		} else if (check(lt, "Sonstiger Hofbezug")) {
			res.court_other.push({ name: l.name, start_date: l.start_date, end_date: l.end_date });
		} else if (check(lt, "Akade")) {
			res.title_academic.push({ name: l.name, start_date: l.start_date, end_date: l.end_date });
		} else if (check(lt, "Funktion, Amtsinhabe und Beruf")) {
			res.other_jobs.push({ name: l.name, start_date: l.start_date, end_date: l.end_date });
		}
	});

	//   for (const [key, val] of Object.keys(res)) {
	//     if (!val.length) {
	//       res[key] = null;
	//     }
	//   }

	return res;
}
