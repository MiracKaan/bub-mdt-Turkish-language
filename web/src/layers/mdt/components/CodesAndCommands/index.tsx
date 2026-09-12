import React, { useState } from 'react'
import './index.css'
import { ScrollArea, Table, Text, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: -1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

const codesElements = [
  { code: '10-0', description: 'Şüpheli gözden kaybedildi' },
  { code: '10-3', description: 'Radyo iletişimini durdur' },
  { code: '10-4', description: 'Anlaşıldı' },
  { code: '10-6', description: 'Meşgul' },
  { code: '10-7', description: 'Görev Dışı' },
  { code: '10-8', description: 'Görevde' },
  { code: '10-9', description: 'Tekrar et' },
  { code: '10-10', description: 'Radyo frekansını değiştir' },
  { code: '10-13', description: 'Ateş açıldı' },
  { code: '10-14', description: 'Çalıntı plaka' },
  { code: '10-15', description: 'Devam eden araç hırsızlığı' },
  { code: '10-16', description: 'Kişi taşıması gerekiyor' },
  { code: '10-19', description: 'Karakola dönülüyor' },
  { code: '10-20', description: 'Konum' },
  { code: '10-22', description: 'Son sinyali yok say' },
  { code: '10-23', description: '_____\'a varıldı' },
  { code: '10-25', description: 'Devriye arkadaşı aranıyor' },
  { code: '10-26', description: 'Kişi gözaltında' },
  { code: '10-28', description: 'Bilgi için MDT kontrolü' },
  { code: '10-37', description: 'Beklemede kal' },
  { code: '10-38', description: 'Trafik çevirmesi' },
  { code: '10-39', description: 'Şüpheli davranış' },
  { code: '10-43', description: 'Sağlık ekibi çağır' },
  { code: '10-50', description: 'Trafik kazası' },
  { code: '10-51', description: 'Kullanılamaz araç' },
  { code: '10-56', description: 'Mağaza/kuyumcu soygunu' },
  { code: '10-66', description: 'Ev soygunu' },
  { code: '10-76', description: 'Yolda' },
  { code: '10-77', description: 'Tahmini varış süresi (ETA)' },
  { code: '10-78', description: 'Destek gerekiyor' },
  { code: '10-80', description: 'Araç takibi' },
  { code: '10-81', description: 'Yaya takibi' },
  { code: '10-85', description: 'Helikopter birimi' },
  { code: '10-89', description: 'Memur vuruldu' },
  { code: '10-90', description: 'Banka soygunu' },
  { code: '10-92', description: 'Petrol platformu saldırısı' },
  { code: '10-98', description: 'Hapishane kaçışı' },
  { code: '10-99', description: 'Aranan kişi' },
  { code: '10-101', description: 'Durum bildir' },
];

const codesMeaningElements = [
  { code: 'Code 1', description: 'Normal sürüş' },
  { code: 'Code 2', description: 'Işıklı sürüş' },
  { code: 'Code 3', description: 'Işıklı & sirenli sürüş' },
  { code: 'Code 4', description: 'Her şey kontrol altında' },
  { code: 'Code 5', description: 'Ağır suç çevirmesi' },
];

const codesColorMeaningElements = [
  { code: 'Kod Kırmızı', description: 'Gerekli güç kullanılarak durdurulacak' },
  { code: 'Kod Turuncu', description: 'Mümkünse pit serbest' },
  { code: 'Kod Yeşil', description: 'Kişiyi takip edin' },
  { code: 'Ocean king', description: '10-101 cevaplanır' },
  { code: 'Sinyal 100', description: 'Tüm radyo iletişimi durdurulur' },
]

const CodesAndCommands = () => {
  const { classes, cx } = useStyles();
  const [scrolledCodes, setScrolledCodes] = useState(false);

  const codesRows = codesElements.map((element) => (
    <tr key={element.code}>
      <td>{element.code}</td>
      <td>{element.description}</td>
    </tr>
  ));

  const codesMeaningRows = codesMeaningElements.map((element) => (
    <tr key={element.code}>
      <td>{element.code}</td>
      <td>{element.description}</td>
    </tr>
  ));

  const codesColorMeaningRows = codesColorMeaningElements.map((element) => (
    <tr key={element.code}>
      <td>{element.code}</td>
      <td>{element.description}</td>
    </tr>
  ));

  return (
    <div className='codes-and-command'>
      <div className='codes-and-command-background'>
        <Text color='white' size='md' weight={600}>
          10 Kodları
        </Text>
        <ScrollArea h={800} onScrollPositionChange={({ y }) => setScrolledCodes(y !== 0)}>
          <Table striped withBorder>
            <thead className={cx(classes.header, { [classes.scrolled]: scrolledCodes })}>
              <tr>
                <th>Kod</th>
                <th>Açıklama</th>
              </tr>
            </thead>
            <tbody>{codesRows}</tbody>
          </Table>
        </ScrollArea>
      </div>

      <div className='codes-and-command-extra'>
        <div className='command-background'>
          <Text color='white' size='md' weight={600}>
            Kodların Anlamları
          </Text>
          <ScrollArea h={300}>
            <Table striped withBorder>
              <thead className={cx(classes.header)}>
                <tr>
                  <th>Kodlar</th>
                  <th>Anlamı</th>
                </tr>
              </thead>
              <tbody>{codesMeaningRows}</tbody>
            </Table>
          </ScrollArea>
        </div>

        <div className='command-background'>
          <Text color='white' size='md' weight={600}>
            Renk Kodlarının Anlamları
          </Text>
          <ScrollArea h={300}>
            <Table striped withBorder>
              <thead className={cx(classes.header)}>
                <tr>
                  <th>Renk Kodları</th>
                  <th>Anlamı</th>
                </tr>
              </thead>
              <tbody>{codesColorMeaningRows}</tbody>
            </Table>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export default CodesAndCommands;