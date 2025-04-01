export const getBackgroundClass = (rating) => {
    rating = Number(rating);
    if (rating >= 9) return "bg-[url('/images/playerCards/black.png')] text-white";
    if (rating >= 7.5) return "bg-[url('/images/playerCards/gold.png')]";
    if (rating >= 5) return "bg-[url('/images/playerCards/whiteGold.png')]";
    if (rating >= 3) return "bg-[url('/images/playerCards/silver.png')]";
    return "[url('/images/playerCards/bronze.png')]";
}