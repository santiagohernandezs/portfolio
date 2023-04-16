import Atropos from 'atropos/react'

type TicketProps = {
  height: number
  width: number
  viewBox: string
}

export default function Chevron({
  height,
  width,
  viewBox,
  ...props
}: TicketProps): JSX.Element {
  return (
    <Atropos className='my-atropos hidden laptop:block' shadow={false}>
      <a href='https://calendly.com/santiagooheernandez/30min?month=2023-04&date=2023-04-26'>
        <svg
          width={width}
          height={height}
          viewBox={viewBox}
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1722.21 199.445C1697.9 207.88 1680.47 230.989 1680.47 258.159C1680.47 285.329 1697.9 308.438 1722.21 316.873V335.618C1658.41 345.698 1609.63 400.965 1609.63 467.613C1609.63 534.261 1658.41 589.528 1722.21 599.608V619.618C1697.9 628.053 1680.47 651.162 1680.47 678.332C1680.47 705.502 1697.9 728.611 1722.21 737.046V768.957C1697.9 777.392 1680.47 800.501 1680.47 827.671C1680.47 854.842 1697.9 877.95 1722.21 886.385V913.613L21.208 913.613L21.208 886.385C45.5106 877.95 62.9489 854.842 62.9489 827.671C62.9489 800.501 45.5107 777.392 21.208 768.957V737.046C45.5107 728.611 62.9489 705.502 62.9489 678.332C62.9489 651.162 45.5107 628.054 21.208 619.618L21.208 599.608C85.0098 589.528 133.782 534.261 133.782 467.613C133.782 400.965 85.0098 345.697 21.208 335.618L21.208 316.873C45.5107 308.437 62.9489 285.329 62.9489 258.159C62.9489 230.989 45.5107 207.88 21.208 199.445V167.534C45.5107 159.099 62.9489 135.99 62.9489 108.82C62.9489 81.65 45.5107 58.5415 21.208 50.1063L21.208 21.6128L1722.21 21.6128V50.1061C1697.9 58.5413 1680.47 81.65 1680.47 108.82C1680.47 135.99 1697.9 159.099 1722.21 167.534V199.445Z'
            fill='#5772FF'
            stroke='#232323'
            stroke-width='42'
          />
          <path
            d='M317.592 391.615H328.244V295.751H317.592V260.814H415.374C433.127 260.814 446.974 264.435 456.915 271.678C466.857 278.921 471.827 289.289 471.827 302.781C471.827 311.16 469.839 318.261 465.862 324.084C461.886 329.765 457.199 334.097 451.802 337.079C446.548 339.92 441.435 341.837 436.464 342.831V344.961C446.548 345.955 455.637 349.151 463.732 354.548C471.827 359.945 475.875 369.602 475.875 383.52C475.875 398.432 470.265 409.368 459.045 416.327C447.826 423.144 433.269 426.552 415.374 426.552H317.592V391.615ZM399.396 330.688C403.515 330.688 406.569 329.623 408.557 327.493C410.687 325.22 411.752 321.741 411.752 317.054V309.385C411.752 304.698 410.687 301.29 408.557 299.159C406.569 296.887 403.515 295.751 399.396 295.751H387.893V330.688H399.396ZM400.888 391.615C405.006 391.615 408.06 390.55 410.048 388.42C412.178 386.147 413.244 382.668 413.244 377.981V368.608C413.244 363.921 412.178 360.513 410.048 358.382C408.06 356.11 405.006 354.974 400.888 354.974H387.893V391.615H400.888ZM562.875 429.535C536.885 429.535 516.789 422.718 502.587 409.084C488.527 395.45 481.497 373.65 481.497 343.683C481.497 313.717 488.527 291.916 502.587 278.282C516.789 264.648 536.885 257.831 562.875 257.831C588.865 257.831 608.89 264.648 622.95 278.282C637.152 291.916 644.253 313.717 644.253 343.683C644.253 373.65 637.152 395.45 622.95 409.084C608.89 422.718 588.865 429.535 562.875 429.535ZM562.875 391.615C567.704 391.615 571.325 390.337 573.74 387.781C576.154 385.224 577.361 381.248 577.361 375.851V311.515C577.361 306.118 576.154 302.142 573.74 299.586C571.325 297.029 567.704 295.751 562.875 295.751C558.046 295.751 554.425 297.029 552.01 299.586C549.596 302.142 548.389 306.118 548.389 311.515V375.851C548.389 381.39 549.596 385.437 552.01 387.994C554.425 390.408 558.046 391.615 562.875 391.615ZM731.595 429.535C705.605 429.535 685.509 422.718 671.307 409.084C657.247 395.45 650.216 373.65 650.216 343.683C650.216 313.717 657.247 291.916 671.307 278.282C685.509 264.648 705.605 257.831 731.595 257.831C757.585 257.831 777.609 264.648 791.67 278.282C805.872 291.916 812.973 313.717 812.973 343.683C812.973 373.65 805.872 395.45 791.67 409.084C777.609 422.718 757.585 429.535 731.595 429.535ZM731.595 391.615C736.423 391.615 740.045 390.337 742.459 387.781C744.874 385.224 746.081 381.248 746.081 375.851V311.515C746.081 306.118 744.874 302.142 742.459 299.586C740.045 297.029 736.423 295.751 731.595 295.751C726.766 295.751 723.144 297.029 720.73 299.586C718.316 302.142 717.108 306.118 717.108 311.515V375.851C717.108 381.39 718.316 385.437 720.73 387.994C723.144 390.408 726.766 391.615 731.595 391.615ZM979.775 391.615H990.427V426.552H932.269L900.314 360.513L890.515 368.608V391.615H900.74V426.552H820.214V391.615H830.866V295.751H820.214V260.814H900.74V295.751H890.515V323.871L923.535 295.751H910.114V260.814H989.361V295.751H978.71L943.134 325.149L979.775 391.615ZM1218.32 391.615H1226.84V426.552H1143.33V391.615H1156.12L1152.71 374.573H1123.73L1120.33 391.615H1133.11V426.552H1060.25V391.615H1068.77L1104.77 260.814H1182.32L1218.32 391.615ZM1128.42 351.991H1148.02L1139.29 309.598H1137.16L1128.42 351.991ZM1356.29 260.814H1426.17V295.751H1415.52V426.552H1355.65L1293.24 330.475V391.615H1303.46V426.552H1233.59V391.615H1244.24V295.751H1233.59V260.814H1310.49L1366.52 346.239V295.751H1356.29V260.814Z'
            fill='#FAFAFA'
          />
          <path
            d='M417.977 629.827H423.52V652.552H369.2V629.827H377.514L375.297 618.741H356.451L354.234 629.827H362.548V652.552H315.157V629.827H320.7L344.118 544.743H394.559L417.977 629.827ZM359.5 604.052H372.249L366.567 576.476H365.181L359.5 604.052ZM427.908 629.827H434.837V567.469H427.908V544.743H488.741C500.659 544.743 509.758 547.33 516.04 552.503C522.322 557.584 525.463 565.852 525.463 577.308C525.463 588.763 522.322 597.077 516.04 602.251C509.758 607.332 500.659 609.872 488.741 609.872H473.637V629.827H486.94V652.552H427.908V629.827ZM478.348 590.195C483.707 590.195 486.386 587.239 486.386 581.326V576.338C486.386 573.289 485.693 571.072 484.307 569.686C483.014 568.208 481.028 567.469 478.348 567.469H473.637V590.195H478.348ZM582.317 654.493C565.411 654.493 552.339 650.058 543.101 641.19C533.955 632.321 529.382 618.14 529.382 598.648C529.382 579.155 533.955 564.975 543.101 556.106C552.339 547.237 565.411 542.803 582.317 542.803C599.223 542.803 612.248 547.237 621.394 556.106C630.632 564.975 635.251 579.155 635.251 598.648C635.251 618.14 630.632 632.321 621.394 641.19C612.248 650.058 599.223 654.493 582.317 654.493ZM582.317 629.827C585.458 629.827 587.813 628.995 589.384 627.332C590.954 625.669 591.74 623.083 591.74 619.572V577.723C591.74 574.213 590.954 571.626 589.384 569.963C587.813 568.3 585.458 567.469 582.317 567.469C579.176 567.469 576.82 568.3 575.25 569.963C573.679 571.626 572.894 574.213 572.894 577.723V619.572C572.894 623.175 573.679 625.808 575.25 627.471C576.82 629.041 579.176 629.827 582.317 629.827ZM639.962 652.552V629.827H646.89V567.469H639.962V544.743H692.619V567.469H685.691V629.827H692.619V652.552H639.962ZM777.969 544.743H823.421V567.469H816.492V652.552H777.553L736.952 590.056V629.827H743.603V652.552H698.151V629.827H705.08V567.469H698.151V544.743H748.176L784.621 600.311V567.469H777.969V544.743ZM932.115 578.278H908.28V567.469H899.412V629.827H909.112V652.552H850.911V629.827H860.611V567.469H851.743V578.278H827.908V544.743H932.115V578.278ZM1089.71 567.469H1082.78V629.827H1089.71V652.552H1037.33V629.827H1043.98V581.326L1020.42 652.552H999.915L975.664 582.019V629.827H982.316V652.552H936.864V629.827H943.793V567.469H936.864V544.743H1000.33L1014.74 587.978L1028.6 544.743H1089.71V567.469ZM1095.19 652.552V629.827H1102.12V567.469H1095.19V544.743H1188.73V586.592H1157.69V567.469H1140.92V589.363H1153.12V605.161H1140.92V629.827H1157.69V607.932H1188.73V652.552H1095.19ZM1273.8 544.743H1319.25V567.469H1312.32V652.552H1273.38L1232.78 590.056V629.827H1239.43V652.552H1193.98V629.827H1200.91V567.469H1193.98V544.743H1244.01L1280.45 600.311V567.469H1273.8V544.743ZM1427.94 578.278H1404.11V567.469H1395.24V629.827H1404.94V652.552H1346.74V629.827H1356.44V567.469H1347.57V578.278H1323.74V544.743H1427.94V578.278Z'
            fill='white'
          />
          <line
            x1='285.537'
            y1='140.624'
            x2='1457.44'
            y2='140.624'
            stroke='#FAFAFA'
            stroke-width='9'
          />
          <line
            x1='285.537'
            y1='785.68'
            x2='1457.44'
            y2='785.68'
            stroke='#FAFAFA'
            stroke-width='9'
          />
        </svg>
      </a>
    </Atropos>
  )
}
