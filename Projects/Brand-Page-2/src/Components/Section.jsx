const Section = () => {
  return (
    <div className="section">
      <div className="sectionText">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div id="sectionBtn">
          <button className="btn1">Show Now</button>
          <button className="btn2">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="brandIcon">
            <img src="./flipkart.png" alt="" />
            <img src="./amazon.png" alt="" />
          </div>
        </div>
      </div>

      <div className="sectionImg">
        <img src="./shoe_image.png" alt="" />
      </div>
    </div>
  );
};
export default Section;
