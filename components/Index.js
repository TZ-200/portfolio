import React, { Component } from 'react';
import styled from 'styled-components';

const IndexStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 60rem);
    grid-gap: 5rem;
    margin: 5rem;
    justify-content: center;

    & > div:not(:first-of-type){
        height: 35rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: min-content 1fr 1fr;
        grid-gap: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        color: #333;
        padding-bottom: 10px;

        & .index__project--title{
            grid-row: 1/2;
            grid-column: 1/3;
            text-align: center;
            font-size: 1.7rem;
            margin-top: 10px;
        }
        & .index__project--image{
            grid-row: 2/4;
            grid-column: 1/2;
            background-size: cover;
            border-radius: 5px;
            margin: 10px;
            margin-top: 0;
            

            &.project1{ background-image: url('./static/natours_mini.jpg'); }
            &.project2{ background-image: url('./static/nexter_mini.jpg'); }
            &.project3{ background-image: url('./static/vtbase_mini.png'); }
            &.project4{ background-image: url('./static/sickfits_mini.png'); }
            &.project5{ background-image: url('./static/vtbase2_mini.png'); }
        }

        & .index__project--description{
            grid-row: 2/3;
            grid-column: 2/3;

            & span:first-of-type{
                display: block;
            }
        }
        & .index__project--techs{
            grid-row: 3/4;
            grid-column: 2/3;
            font-weight: 600;
        }
    }
`

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 style={{textAlign: 'center', color: '#333'}}>ポートフォリオ</h2>
                <IndexStyles>

                    <div style={{color: '#333'}}>
                        <div>
                            これまでに作成したものをまとめたポートフォリオサイトです。
                            TZ-200という名のGitHubアカウントを持ってはいるのですが、あまり整理できていないので目ぼしいものをピックアップしてこのページにまとめております。<br/>
                            全てHerokuにデプロイしてあるのですが、無料枠を使用しているので、サーバがスリープ状態であった場合は起動までにしばらく時間がかかります。
                            特に、GraphQLを使用したアプリはフロントエンドとバックエンドでサーバを2つ使用しているので、2倍時間がかかります。アプリ起動時は気長にお待ちいただけると幸いです。
                        </div>
                        <div>
                            <a style={{marginTop: '1rem', color: '#0073c6'}} href="https://github.com/TZ-200">GitHubページ</a>
                        </div>
                        
                    </div>

                        <div>
                            <div className="index__project--title">Natours</div>
                            <div className="index__project--image project1"></div>
                            <div className="index__project--description">
                                <span>説明）</span>
                                <span>HTML/CSSの練習その1<br/>レスポンシブ対応</span>
                            </div>
                            <div className="index__project--techs">
                                <div><a style={{marginTop: '1rem', color: '#0073c6'}} href="https://naturehp.herokuapp.com/">デモページ</a></div>
                                <div><a style={{marginTop: '1rem', color: '#0073c6'}} href="https://github.com/TZ-200/natours">Gitレポジトリ</a></div>
                            </div>
                        </div>

                        <div>
                            <div className="index__project--title">Nexter</div>
                            <div className="index__project--image project2"></div>
                            <div className="index__project--description">
                                <span>説明）</span>
                                <span>HTML/CSSの練習その2<br/>主にグリッドの練習<br/>レスポンシブ対応</span>
                            </div>
                            <div className="index__project--techs">
                                <div><a style={{marginTop: '1rem', color: '#0073c6'}} href="https://nexter-tz.herokuapp.com/">デモページ</a></div>
                                <div><a style={{marginTop: '1rem', color: '#0073c6'}} href="https://github.com/TZ-200/nexter">Gitレポジトリ</a></div>
                            </div>
                        </div>

                        <div>
                            <div className="index__project--title">VTbase</div>
                            <div className="index__project--image project3"></div>
                            <div className="index__project--description">
                                <span>説明）</span>
                                <span>React/Redux/Firebaseの練習<br/>レスポンシブ対応<br/>Vtuberのデータ可視化がコンセプト<br/>SPA</span>
                            </div>
                            <div className="index__project--techs">
                                <div><a style={{marginTop: '1rem', color: '#0073c6'}} href="https://vtbase2.herokuapp.com/">デモページ</a></div>
                                <div><a style={{marginTop: '1rem', color: '#0073c6'}} href="https://github.com/TZ-200/VTbase">Gitレポジトリ</a></div>
                            </div>
                        </div>

                        <div>
                            <div className="index__project--title">Sickfits</div>
                            <div className="index__project--image project4"></div>
                            <div className="index__project--description">
                                <span>説明）</span>
                                <span>React/Next/GraphQLの練習その1<br/>レスポンシブ対応<br/>ECサイト開発がコンセプト</span>
                            </div>
                            <div className="index__project--techs">
                                <div><a style={{marginTop: '1rem', color: '#0073c6'}} href="https://sickfits-next-prod-hugo.herokuapp.com/">デモページ</a></div>
                                <div><a style={{marginTop: '1rem', color: '#0073c6'}} href="https://github.com/TZ-200/Sick-Fits">Gitレポジトリ</a></div>
                            </div>
                        </div>

                        <div>
                            <div className="index__project--title">VTbase 2</div>
                            <div className="index__project--image project5"></div>
                            <div className="index__project--description">
                                <span>説明）</span>
                                <span>React/Next/GraphQLの練習その2<br/>Vtuberをメインに据えたReddit風の交流サイトの開発。<br/>SSR<br/>コードの整理ができてないです</span>
                            </div>
                            <div className="index__project--techs">
                                <div><a style={{marginTop: '1rem', color: '#0073c6'}} href="https://vt-grid-next-prod.herokuapp.com/">デモページ</a></div>
                            </div>
                        </div>

                </IndexStyles>
            </React.Fragment>
        );
    }
}

export default Index;
