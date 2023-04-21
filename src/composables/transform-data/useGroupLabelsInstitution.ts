export default function useGroupLabelsInstitution(labels: object[]) {
  // Parse:
  // schreibvarianten Namen
  // sonstiger Hofbezug
  // Kirche und Orden

  const res = {
    kategorie: null,
    alt_names: [],
    resolution: null,
    first_marriage: null,
    religion: null, //TODO: at the moment, a person in viecpro can only have one religion; might need adjustement later (make array and include start and end dates)
    title_honor: [],
    collected_titles: [],
    stand: [],
    awards: [],
    other_jobs: [],
    title_academic: [],
  };

  const check = (lt, check_val) => lt.includes(check_val);

  labels.forEach((l) => {
    const lt = l.label_type;

    if (check(lt, 'name')) {
      res.alt_names.push({
        label_type: lt,
        name: l.name,
        name_clean: l.name.replace('Schreibvariante', ''),
        start_date: l.start_date,
        end_date: l.end_date,
      });
    }
    if (check(lt, 'Bezeichnung, alternativ')) {
      res.alt_names.push({ name: l.name, start_date: l.start_date, end_date: l.end_date });
    }
    if (check(lt, 'Kategorie')) {
      res.kategorie = l.name;
    }
    if (check(lt, 'Auflösung')) {
      res.resolution = l.name;
    }
  });

  //   for (const [key, val] of Object.keys(res)) {
  //     if (!val.length) {
  //       res[key] = null;
  //     }
  //   }

  return res;
}
