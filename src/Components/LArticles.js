import { useContext } from 'react';
import { MainContext } from './MainContext';
import { Link } from 'react-router-dom';

const LatestArticles = () => {

    const [data] = useContext(MainContext)

    return (
        <>
            <div className="latest-article-container">
                <h2 className="latest-articles-heading">Latest Articles</h2>
                <div className="articles-division">
                    <div className="article-bar">
                        {
                            data.filter(
                                (latestArticle) => latestArticle.id === '5' && (latestArticle.category === 'Tourism' || latestArticle.category === 'Food' || latestArticle.category === 'Technology' || latestArticle.category === 'Bollywood' || latestArticle.category === 'Fitness')).map(
                                    (article) => <div>
                                        <hr className="article-horizontal-line" />
                                        <Link to={`/category/article/${article.id}/${article.category}`} style={{ textDecoration: "none" }} className="latest-articles">
                                            <img src={article.url} className="latest-articles-image" alt=""/>
                                            <div className="latest-article-details">
                                                <h4 className="latest-article-heading">{article.title}</h4>
                                                <p className="latest-article-body">{article.body}</p>
                                                <p>
                                                    <span className="latest-article-category">{article.category}</span> / {article.date}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                        }
                    </div>
                    <div className="top-stories">
                        <div className="top-stories-heading">Top Posts</div>
                        {
                            data.filter(
                                (latestArticle) => latestArticle.id === '2' && (latestArticle.category === 'Tourism' || latestArticle.category === 'Food' || latestArticle.category === 'Technology' || latestArticle.category === 'Bollywood' || latestArticle.category === 'Fitness')).map(
                                    (article) => <>
                                        <Link to={`/category/article/${article.id}/${article.category}`} style={{ textDecoration: "none" }} className="top-stories-container">
                                            <img src={article.url} className="top-stories-image" alt=""/>
                                            <div className="top-stories-content">
                                                <h4 className="top-stories-title">{article.title}</h4>
                                                <p>
                                                    <span className="top-stories-category">{article.category}</span> / {article.date}
                                                </p>
                                            </div>
                                        </Link>
                                        <hr className="top-stories-horizontal-line" />
                                    </>
                                )
                        }
                        <div className="advertisement"><img src='data:image/jpeg;base64,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' alt="water image"/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestArticles;