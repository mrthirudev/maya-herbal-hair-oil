import React from 'react'

export default function ProductInfo() {
  return (
    <section className="product-info">
      <h2>பொருள் விவரம்</h2>
      <ul>
        <li>100% இயற்கை மூலிகைகள்</li>
        <li>முடி வளர்ச்சியை ஊக்குவிக்கிறது</li>
        <li>முடி உதிர்வு குறைப்பு மற்றும் முடி வேர்கள் வலுப்படுத்துதல்</li>
        <li>ஆண்கள், பெண்கள் மற்றும் அனைத்து வயதினருக்கும் ஏற்றது</li>
      </ul>

      <h3>விலை விவரம்</h3>
      <div className="prices">
        <div className="price-card">
          <strong>250 ML</strong>
          <div className="amount">₹300</div>
        </div>
        <div className="price-card">
          <strong>500 ML</strong>
          <div className="amount">₹600</div>
        </div>
      </div>
    </section>
  )
}
