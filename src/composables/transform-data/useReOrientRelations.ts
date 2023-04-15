export default function useReOrientedRelation(rel: Object, sourceObjectName: string) {
  const temp = { ...rel };
  console.log('called');
  console.log(rel.target.name, sourceObjectName);
  if (temp.target.name === sourceObjectName) {
    console.log('in orientation function, condition was true');
    temp.target = rel.source;
    temp.source = rel.target;
    temp.relation_type = rel.relation_reverse; //.replace('[REVERSE]', '')
    temp.relation_reverse = rel.relation_type;
  }
  console.log(temp, rel);
  return temp;
}
