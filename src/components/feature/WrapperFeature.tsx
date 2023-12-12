import clsx from 'clsx'
import { Title } from '..'
import Feature, { FeatureProps } from './Feature'

interface WrapperProps {
  featureContent: FeatureProps[]
}

function WrapperFeature({ featureContent }: WrapperProps) {
  const styles = {
    wrapper: clsx('wrapper grid justify-items-center gap-20')
  }

  return (
    <section id='wrapperFeature' className={styles.wrapper}>
      <Title title='How it' highlightTitle='works!' headingLevel='h4' />
      {featureContent.map((data, index) => {
        return <Feature key={index} srcImage={data.srcImage} altImage={data.altImage} preTitle={data.preTitle} title={data.title} description={data.description} button={data.button} position={data.position} description2={data.description2} />
      })}
    </section>
  )
}

export default WrapperFeature
