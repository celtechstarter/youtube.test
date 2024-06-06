const { Builder, By, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
});

// afterAll(async () => {
//   await driver.quit();
// });

test("ablehnen", async () => {
  await driver.get("https://youtube.de/");

  const akzeptierenButton = await driver.findElement(
    By.xpath(
      '//*[@id="content"]/div[2]/div[6]/div[1]/ytd-button-renderer[2]/yt-button-shape/button/yt-touch-feedback-shape/div/div[2]'
    )
  );
  await akzeptierenButton.click();

  await driver.wait(until.elementLocated(By.name("search-query"), 10000));
  const suchFeld = await driver.findElement(By.name("search-query"));
  await suchFeld.sendKeys("Bob Marley");

  // const suchFeld = await driver.wait(
  //   until.elementLocated(By.id("search")),
  //   10000
  // );
  // await suchFeld.sendKeys("Bob Marley");
  // const suchFeld = await driver.findElement(By.xpath('//*[@id="search"]'));

  // await suchFeld.sendKeys("Bob Marley");

  // // const suche = await driver.wait(
  // const suchFeld = await driver.findElement(By.id("search"));
  // // until.elementLocated(By.name("search_query")),
  // // 10000
  // // );

  // await suchFeld.sendKeys("Bob Marley");
}, 30000);
