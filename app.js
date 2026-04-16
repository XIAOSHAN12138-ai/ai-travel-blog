const { createApp } = Vue;
const { createRouter, createWebHistory } = VueRouter;

// 首页组件
const Home = {
    template: `
        <div>
            <section class="section hero">
                <div class="fade-up">
                    <h1>心之所向，素履以往</h1>
                    <p>用脚步丈量世界，用镜头记录温柔。每一次出发，都是与更好的自己相遇。</p>
                </div>
            </section>
            <section class="section gallery">
                <h2 class="fade-up">旅途瞬间</h2>
                <div class="photo-grid fade-up">
                    <div class="photo-card"><img src="https://picsum.photos/id/10/800/600" alt=""></div>
                    <div class="photo-card"><img src="https://picsum.photos/id/15/800/600" alt=""></div>
                    <div class="photo-card"><img src="https://picsum.photos/id/20/800/600" alt=""></div>
                </div>
            </section>
            <section class="section hot">
                <h2 class="fade-up">热门目的地</h2>
                <div class="dest-cards fade-up">
                    <div class="dest-card">
                        <img src="https://picsum.photos/id/28/800/600" alt="">
                        <div class="dest-info"><h3>日本·京都</h3><p>千年古都，唐风古韵，漫步在樱花与寺庙之间。</p></div>
                    </div>
                    <div class="dest-card">
                        <img src="https://picsum.photos/id/25/800/600" alt="">
                        <div class="dest-info"><h3>中国·大理</h3><p>苍山洱海，风花雪月，治愈心灵的慢生活。</p></div>
                    </div>
                </div>
            </section>
        </div>
    `,
    mounted() {
        const els = document.querySelectorAll('.fade-up');
        const io = new IntersectionObserver(e => e.forEach(i => i.isIntersecting && i.target.classList.add('show')), { threshold: .2 });
        els.forEach(e => io.observe(e));
    }
};

// 目的地列表
const Destinations = {
    template: `
        <div class="container">
            <h1>我的旅行足迹</h1>
            <div class="grid">
                <div class="card">
                    <img src="https://picsum.photos/id/28/800/600" alt="">
                    <div class="info"><h3>日本·京都</h3><p>千年古都，保留着最纯粹的日式风情。清水寺、伏见稻荷、岚山竹林，每一处都让人沉醉。</p></div>
                </div>
                <div class="card">
                    <img src="https://picsum.photos/id/25/800/600" alt="">
                    <div class="info"><h3>中国·大理</h3><p>苍山洱海，风花雪月。在洱海边发呆，在古城里漫步，感受慢节奏的美好。</p></div>
                </div>
                <div class="card">
                    <img src="https://picsum.photos/id/30/800/600" alt="">
                    <div class="info"><h3>中国·厦门</h3><p>文艺清新的海滨城市，鼓浪屿的小巷、环岛路的海风，充满浪漫气息。</p></div>
                </div>
            </div>
        </div>
    `
};

// 京都详情
const Destination = {
    template: `
        <div class="detail">
            <h1 class="title">京都 · 千年古都的温柔</h1>
            <p class="sub">2026年春｜5日深度漫游</p>
            <div class="content">
                <h2>初见京都</h2>
                <p>踏入京都的那一刻，仿佛穿越回了千年前的长安。这里没有东京的繁华喧嚣，只有青瓦白墙、朱红鸟居与漫天樱花，安静得能听见风吹过树叶的声音。</p>
                <div class="img-row">
                    <img src="https://picsum.photos/id/28/800/600" alt="">
                    <img src="https://picsum.photos/id/60/800/600" alt="">
                </div>
                <h2>行程攻略</h2>
                <p><strong>Day1：</strong>抵达京都 → 锦市场觅食 → 鸭川散步</p>
                <p><strong>Day2：</strong>清水寺 → 二年坂三年坂 → 八坂神社</p>
                <p><strong>Day3：</strong>伏见稻荷大社 → 千本鸟居 → 岚山竹林</p>
                <p><strong>Day4：</strong>金阁寺 → 龙安寺 → 京都御所</p>
                <p><strong>Day5：</strong>花间小路 → 返程</p>
                <h2>个人感受</h2>
                <p>京都最动人的，是它把传统与现代完美融合。穿着和服漫步在石板路上，看夕阳洒在寺庙的屋檐上，内心会变得无比平静。这里的每一处风景，都值得慢慢品味。</p>
                <p>旅行的意义，或许就是在陌生的城市里，找到内心的归属感。</p>
            </div>
        </div>
    `
};

// 关于我
const About = {
    template: `
        <div class="about">
            <div class="about-card">
                <img src="https://picsum.photos/id/64/200/200" alt="" class="avatar">
                <h1>你好，我是旅行者</h1>
                <p>一个热爱生活、喜欢用脚步探索世界的普通人。</p>
                <p>走过山川湖海，见过人间烟火，始终相信：世界是一本书，不旅行的人只读了一页。</p>
                <p><strong>旅行经历：</strong>走过国内20+城市，日本、泰国、马来西亚等多个国家。</p>
                <p><strong>爱好：</strong>摄影、徒步、探店、写游记、记录生活。</p>
                <div class="social">
                    <a href="#">微信</a>
                    <a href="#">小红书</a>
                    <a href="#">微博</a>
                    <a href="#">Instagram</a>
                </div>
            </div>
        </div>
    `
};

// 联系页面
const Contact = {
    template: `
        <div class="contact">
            <div class="form">
                <h1>和我聊聊旅途</h1>
                <form @submit.prevent="">
                    <div class="item">
                        <label>姓名</label>
                        <input type="text" placeholder="请输入你的名字">
                    </div>
                    <div class="item">
                        <label>邮箱</label>
                        <input type="email" placeholder="请输入你的邮箱">
                    </div>
                    <div class="item">
                        <label>留言内容</label>
                        <textarea placeholder="分享你的旅行故事，或想对我说的话..."></textarea>
                    </div>
                    <button type="submit">发送留言</button>
                </form>
            </div>
        </div>
    `
};

// 路由配置（默认首页）
const routes = [
    { path: '/', component: Home },
    { path: '/destinations', component: Destinations },
    { path: '/destination', component: Destination },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// 创建 Vue 应用
createApp({}).use(router).mount('#app');