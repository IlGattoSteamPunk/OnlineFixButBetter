document.addEventListener('DOMContentLoaded', () => {
    const games = [
        {
            title: "Sons Of The Forest",
            version: "v2",
            downloadUrl: "https://d-jp01-ntt.terabox.com/file/908714ac0b7239a384cd22e9a7a0aab3?bkt=en-038bee77e919b76a0e4b8564a5d6c75792eac25a4494311a87b4ae33dcbe829f52655d32d1bf87ed&xcode=dcd9407ebab4909d5987f141997ab8798d1f4451c05e4f0ad57d0faf2486e12f461b28774ff4b99e5cc643bf116e561248f9fe27c18036c1&fid=4399837751620-250528-689799606462758&time=1743439264&sign=FDTAXUGERLQlBHSKfWon-DCb740ccc5511e5e8fedcff06b081203-5JvEJnHuobkw0gPReBp0DJZfuBA%3D&to=142&size=10527541&sta_dx=10527541&sta_cs=0&sta_ft=rar&sta_ct=0&sta_mt=0&fm2=MH%2Ctky%2CAnywhere%2C%2CTGlndXJpYQ%3D%3D%2Cany&region=tky&ctime=1743439223&mtime=1743439255&resv0=-1&resv1=0&resv2=rlim&resv3=5&resv4=10527541&vuk=4399837751620&iv=0&htype=&randtype=&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=en-b38b03bf0109f759c2d8fcdcef3972f69e44ca2db21895ca7208920d7649003921f8fec97b4f27f0&sl=68091977&expires=1743468064&rt=pr&r=640711224&vbdid=-&fin=SOTF_FIX_V2.rar&fn=SOTF_FIX_V2.rar&rtype=1&dp-logid=9005544343517173506&dp-callid=0.1&hps=1&tsl=2000&csl=2000&fsl=-1&csign=7sjyf87bgxbFrMxM1mTy3NonOc4%3D&so=0&ut=6&uter=4&serv=0&uc=2134704434&ti=14a3010384c1ca3c9e4f0b4fe358e3a29976d7b8f49a0684305a5e1275657320&tuse=&raw_appid=0&ogr=0&rregion=XVVi&adg=&reqlabel=250528_f_3277a0fddeaa984e0d00de1ebc019d4b_-1_4a4d99ff6f44fdf76af091235c3c35f2&ccn=IT&by=themis",
            image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg?t=1708624856"
        },
        {
            title: "Deep Rock Galatic",
            version: "v4",
            downloadUrl: "https://d-jp02-zen.terabox.com/file/d62c0e48490d03bd634090af334008cf?bkt=en-2fb6763f1c8fb10141e471c97de73f681bab2a06d2ad1259c42687f208d608448f9b10b554b6c3f4&xcode=96d81b38ba2cf686cbd211381f3a6d2fa59f9fe1c3d702ab48050718cb1e4dada62fec01b410c8c5d76e79cb13df74c4e801268afdb15995&fid=4399837751620-250528-598733579922789&time=1743439326&sign=FDTAXUGERLQlBHSKfWon-DCb740ccc5511e5e8fedcff06b081203-8A%2FMgDbtlS%2BHKzjTBMxmJM1c1OE%3D&to=149&size=15051896&sta_dx=15051896&sta_cs=0&sta_ft=rar&sta_ct=0&sta_mt=0&fm2=MH%2Ctky%2CAnywhere%2C%2CTGlndXJpYQ%3D%3D%2Cany&region=tky&ctime=1743439223&mtime=1743439255&resv0=-1&resv1=0&resv2=rlim&resv3=5&resv4=15051896&vuk=4399837751620&iv=0&htype=&randtype=&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=en-b8191a3d5b76b426d371e30e544791e0312ebd202897df2d3e9e1559593a22812b702b6468949f83&sl=68091977&expires=1743468126&rt=pr&r=977471540&vbdid=-&fin=DRP_FIX_V4.rar&fn=DRP_FIX_V4.rar&rtype=1&dp-logid=9005561085190901757&dp-callid=0.1&hps=1&tsl=2000&csl=2000&fsl=-1&csign=7sjyf87bgxbFrMxM1mTy3NonOc4%3D&so=0&ut=6&uter=4&serv=0&uc=2134704434&ti=e6e2f9d25109af0e42463184df89a8b489e10627546336fc&tuse=&raw_appid=0&ogr=0&rregion=XVVi&adg=&reqlabel=250528_f_3277a0fddeaa984e0d00de1ebc019d4b_-1_4a4d99ff6f44fdf76af091235c3c35f2&ccn=IT&by=themis",
            image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/548430/header.jpg?t=1740665429"
        },
        {
            title: "Astroneer",
            version: "v1",
            downloadUrl: "https://d-jp02-zen.terabox.com/file/a4223173b6022bde657719de13535bd1?bkt=en-2e2b5030dd6ff0374de54da7062ee5f1cb14e7b94db8c0c59e85e009b330ade8a6d0e9d2d971a48e&xcode=69dbf6cdc531fc8804799ed3e632cb2bddceb6af036b36dae1cb54f1e8689af994bc7005d6bd84ed5cc643bf116e561248f9fe27c18036c1&fid=4399837751620-250528-427018940684782&time=1743439641&sign=FDTAXUGERLQlBHSKfWon-DCb740ccc5511e5e8fedcff06b081203-3hPnKcLg7jZvaIx4waZaf4La4QQ%3D&to=149&size=22483049&sta_dx=22483049&sta_cs=0&sta_ft=rar&sta_ct=0&sta_mt=0&fm2=MH%2Ctky%2CAnywhere%2C%2CTGlndXJpYQ%3D%3D%2Cany&region=tky&ctime=1743439620&mtime=1743439620&resv0=-1&resv1=0&resv2=rlim&resv3=5&resv4=22483049&vuk=4399837751620&iv=0&htype=&randtype=&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=en-a5a8b970db857c5bcf5632ccfc8d5af530266362bb10c11401363265b436f4b3e19be7dfdd7bfc33&sl=68091977&expires=1743468441&rt=pr&r=344428329&vbdid=-&fin=ASTRONEER_FIX_V1.rar&fn=ASTRONEER_FIX_V1.rar&rtype=1&dp-logid=9005645467650173438&dp-callid=0.1&hps=1&tsl=2000&csl=2000&fsl=-1&csign=7sjyf87bgxbFrMxM1mTy3NonOc4%3D&so=0&ut=6&uter=4&serv=0&uc=2134704434&ti=e6e2f9d25109af0e51c1f2bb3131de5649d9ea3b3e8a9d71&tuse=&raw_appid=0&ogr=0&rregion=XVVi&adg=&reqlabel=250528_f_3277a0fddeaa984e0d00de1ebc019d4b_-1_4a4d99ff6f44fdf76af091235c3c35f2&ccn=IT&by=themis",
            image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/361420/header.jpg?t=1731607730"
        },
        {
            title: "JoJo's Bizarre Adventure All-Star Battle R",
            version: "v1",
            downloadUrl: "https://d-jp02-zen.terabox.com/file/a12ad3a8c0ad55fb940803c92e10e28c?bkt=en-29a7ad5d1913bc6fd7912e5912fe47e8a9788ce0b50ff2896129eb06ed255d8d24f1727471c7b800&xcode=5c0a8e29ee04a59ffa0e48597f39f5ca6165f1d34cb8d8d09656e1974df64bead35fe933c0654f405cc643bf116e561248f9fe27c18036c1&fid=4399837751620-250528-254661527970203&time=1743439934&sign=FDTAXUGERLQlBHSKfWon-DCb740ccc5511e5e8fedcff06b081203-iT1mtG4PKzbUVzwFrB64iaBdT54%3D&to=149&size=28964271&sta_dx=28964271&sta_cs=0&sta_ft=rar&sta_ct=0&sta_mt=0&fm2=MH%2Ctky%2CAnywhere%2C%2CTGlndXJpYQ%3D%3D%2Cany&region=tky&ctime=1743439923&mtime=1743439923&resv0=-1&resv1=0&resv2=rlim&resv3=5&resv4=28964271&vuk=4399837751620&iv=0&htype=&randtype=&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=en-fb1bb60f91ee5cfe16ddcfaa651ee0eeba4939b2e5ce1d8d4a77dab3b756c406c6622714181a1437&sl=68091977&expires=1743468734&rt=pr&r=296556146&vbdid=-&fin=JBAASBR_FIX_V1.rar&fn=JBAASBR_FIX_V1.rar&rtype=1&dp-logid=9005724358467376930&dp-callid=0.1&hps=1&tsl=2000&csl=2000&fsl=-1&csign=7sjyf87bgxbFrMxM1mTy3NonOc4%3D&so=0&ut=6&uter=4&serv=0&uc=2134704434&ti=e6e2f9d25109af0ea418fc55730d534969685f988a1714c3&tuse=&raw_appid=0&ogr=0&rregion=XVVi&adg=&reqlabel=250528_f_3277a0fddeaa984e0d00de1ebc019d4b_-1_4a4d99ff6f44fdf76af091235c3c35f2&ccn=IT&by=themis",
            image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1372110/header.jpg?t=1720409046"
        },
    ];
    
    const grid = document.querySelector('.games-grid');
    
    // Genera le card
    games.forEach((game, index) => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="game-thumbnail">
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <div class="game-details">
                    <p>Version: ${game.version}</p>
                </div>
                <a href="${game.downloadUrl}" class="download-link" target="_blank">
                    <i class="fas fa-download"></i>
                    Download Now
                </a>
            </div>
        `;
        grid.appendChild(card);
    });

    // Funzionalità di ricerca
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.game-card');
        
        cards.forEach(card => {
            const title = card.querySelector('.game-title').textContent.toLowerCase();
            card.style.display = title.includes(term) ? 'block' : 'none';
        });
    });
});