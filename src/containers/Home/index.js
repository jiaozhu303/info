import React, {Component} from 'react';
import './index.css';
class Home extends Component {
    render() {
        return (<div className="home">
            <div className="avatar-img">
                <img src="https://avatars3.githubusercontent.com/u/14814278?v=3&u=8bebfceae23d6a86b6812fda5da5905273dbacba&s=400" alt="" className="avatar"/>
            </div>
            <div className="info">
                <p className="name">YY</p>
                <p className="profession">Lenovo CTO</p>
                <p className="desc">
                    杨元庆，1964年11月12日出生于安徽合肥，联想集团总裁兼首席执行官。国家高级工程师，享受政府专家特殊津贴，中华全国青年联合会副主任委员，中国企业家协会理事，中国科技大学客座教授。未来论坛创始理事。
                    2001年开始成为联想集团总裁兼CEO，杨元庆领导联想成功进行了“Lenovo”品牌的塑造、收购IBM - PC部门，联想的国际化步伐也走得更快。
                    2008年被《财富》中文版评为“2007年度中国商人”，成为第十一届全国政协委员。2009年2月5日，随着柳传志重回联想集团董事长职位，杨元庆重归CEO职位。福布斯发布“2011年中国上市公司CEO薪酬排行榜”，杨元庆以7872万元的年薪名列H股非国有上市公司第一名。2011年11月2日，联想集团宣布杨元庆接任柳传志成为联想集团董事长。
                </p>
            </div>
        </div>);
    }
}

export default Home;
