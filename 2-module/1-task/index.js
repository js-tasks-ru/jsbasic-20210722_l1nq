function sumSalary(salaries) {
  let summ = 0;
  for (key in salaries) {
    if (isFinite(salaries[key])) {
      if (salaries[key] == true) {
        summ -= 1;
      }
      summ += salaries[key];
    }
  }
  return summ;
}
