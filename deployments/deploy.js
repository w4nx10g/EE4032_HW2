async function main() {
    const SimpleAuction = await ethers.getContractFactory("SimpleAuction");
    const simple_auction = await SimpleAuction.deploy(120, "0xc09827893F5bda7feCB9BF1e0594e1453F7a61Cd");
    console.log("Contract Deployed to Address:", simple_auction.address);
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
