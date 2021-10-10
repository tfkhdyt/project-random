for(let i = 0; i < 5; i++) {
  for(let j = 0; j < 4; j++) {
    if(i % 2 == 0)
      process.stdout.write("X");
    else
      process.stdout.write("0");
  }
  process.stdout.write("\n");
}
