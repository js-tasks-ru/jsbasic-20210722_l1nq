function showSalary(users, age) {
  let lst = "";
  users.forEach((item)=>{
    if (item.age <= age) {
      lst += item.name + ", " + item.balance + "\n";
    }
  });
  return lst.slice(0, -1);
}
