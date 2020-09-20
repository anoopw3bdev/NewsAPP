import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles'




const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles()
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines')
          setNewsArticles(articles);
      }
    })
  }, [])

  return (
    <div className={classes.app}>
      <h1 className={classes.heading}>Alan AI news application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  )
}
export default App;