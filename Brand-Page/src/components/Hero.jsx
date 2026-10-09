function Hero() {
  return (
    <>
      <main className="hero">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-btn">
            <button className="shop-now-btn">Shop Now</button>
            <button className="category-btn">Category</button>
          </div>

          <div className="shopping">
            <p>Also Available on</p>
          </div>
          <div className="brand-icon">
            <img src="/images/amazon.png" alt="" />
            <img src="/images/flipkart.png" alt="" />
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/shoe_image.png" alt="" />
        </div>
      </main>
    </>
  );
}

export default Hero;
