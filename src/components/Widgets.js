import {
  FiberManualRecordOutlined,
  FiberManualRecordSharp,
  InfoOutlined,
} from '@mui/icons-material'
import './Widgets.css'
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordSharp />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoOutlined />
      </div>
      {newsArticle('Masoud was here', 'Top news - too many readers')}
      {newsArticle(
        'COVID-19: UK records another 41,278 coronavirus cases and 166 related deaths',
        'Top news - 981 readers'
      )}
      {newsArticle(
        'London: Teenager arrested after swastikas sprayed on walls of Camden synagogue',
        'Top news - 321 readers'
      )}
      {newsArticle(
        'Stars gather for Pride of Britain Awards, honouring heroic members of the public',
        'Top news - 567 readers'
      )}
      {newsArticle(
        'COP26: Greta Thunberg mobbed as she arrives in Glasgow ahead of climate summit',
        'Top news - 123 readers'
      )}
      {newsArticle(
        'COP26: Boris Johnson says Glasgow climate summit is worlds moment of truth in fight to tackle global warming',
        'Top news - 432 readers'
      )}
      {newsArticle(
        'France fishing row: PM suggests French may have breached treaty as Brexit minister concerned after warning from Paris',
        'Top news - 435 readers'
      )}
      {newsArticle(
        'Penelope Jackson: Woman, 66, happy shes arrested for murder after stabbing husband, David Jackson, 78',
        'Top news - 45 readers'
      )}
    </div>
  )
}

export default Widgets
