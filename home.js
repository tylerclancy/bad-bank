function Home() {
  return (
    <div className="section">
    <Card
      txtcolor="black"
      width="50"
      title="Welcome to The Bank"
      text="For all your banking needs!"
      body={<img src="stocks.png" className="img-fluid" alt="Responsive image" />}
    />
    </div>
  );
}
