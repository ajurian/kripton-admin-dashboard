import profilePicture from "@/assets/images/profile-picture.png";

export const user: User = {
    username: "Johndoe",
    role: "Super Admin",
    photoUrl: profilePicture.src,
};

export const wallets: Wallet[] = [
    { cardNumber: "444 221 224 424", name: "Main Wallet", balance: 45500.12 },
    { cardNumber: "444 221 224 424", name: "XYZ Wallet", balance: 250.5 },
    { cardNumber: "444 221 224 424", name: "Main Wallet", balance: 45500.12 },
    { cardNumber: "444 221 224 424", name: "XYZ Wallet", balance: 250.5 },
];
