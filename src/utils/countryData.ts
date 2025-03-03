
export interface Country {
  code: string;
  name: string;
  dial_code: string;
  flag: string;
  flagUrl: string;
}

export const countries: Country[] = [
  { code: "US", name: "United States", dial_code: "+1", flag: "🇺🇸", flagUrl: `https://flagcdn.com/w20/us.png` },
  { code: "GB", name: "United Kingdom", dial_code: "+44", flag: "🇬🇧", flagUrl: `https://flagcdn.com/w20/gb.png` },
  { code: "CA", name: "Canada", dial_code: "+1", flag: "🇨🇦", flagUrl: `https://flagcdn.com/w20/ca.png` },
  { code: "AU", name: "Australia", dial_code: "+61", flag: "🇦🇺", flagUrl: `https://flagcdn.com/w20/au.png` },
  { code: "NZ", name: "New Zealand", dial_code: "+64", flag: "🇳🇿", flagUrl: `https://flagcdn.com/w20/nz.png` },
  { code: "IN", name: "India", dial_code: "+91", flag: "🇮🇳", flagUrl: `https://flagcdn.com/w20/in.png` },
  { code: "DE", name: "Germany", dial_code: "+49", flag: "🇩🇪", flagUrl: `https://flagcdn.com/w20/de.png` },
  { code: "FR", name: "France", dial_code: "+33", flag: "🇫🇷", flagUrl: `https://flagcdn.com/w20/fr.png` },
  { code: "IT", name: "Italy", dial_code: "+39", flag: "🇮🇹", flagUrl: `https://flagcdn.com/w20/it.png` },
  { code: "ES", name: "Spain", dial_code: "+34", flag: "🇪🇸", flagUrl: `https://flagcdn.com/w20/es.png` },
  { code: "PT", name: "Portugal", dial_code: "+351", flag: "🇵🇹", flagUrl: `https://flagcdn.com/w20/pt.png` },
  { code: "NL", name: "Netherlands", dial_code: "+31", flag: "🇳🇱", flagUrl: `https://flagcdn.com/w20/nl.png` },
  { code: "BE", name: "Belgium", dial_code: "+32", flag: "🇧🇪", flagUrl: `https://flagcdn.com/w20/be.png` },
  { code: "CH", name: "Switzerland", dial_code: "+41", flag: "🇨🇭", flagUrl: `https://flagcdn.com/w20/ch.png` },
  { code: "AT", name: "Austria", dial_code: "+43", flag: "🇦🇹", flagUrl: `https://flagcdn.com/w20/at.png` },
  { code: "SE", name: "Sweden", dial_code: "+46", flag: "🇸🇪", flagUrl: `https://flagcdn.com/w20/se.png` },
  { code: "DK", name: "Denmark", dial_code: "+45", flag: "🇩🇰", flagUrl: `https://flagcdn.com/w20/dk.png` },
  { code: "FI", name: "Finland", dial_code: "+358", flag: "🇫🇮", flagUrl: `https://flagcdn.com/w20/fi.png` },
  { code: "NO", name: "Norway", dial_code: "+47", flag: "🇳🇴", flagUrl: `https://flagcdn.com/w20/no.png` },
  { code: "JP", name: "Japan", dial_code: "+81", flag: "🇯🇵", flagUrl: `https://flagcdn.com/w20/jp.png` },
  { code: "KR", name: "South Korea", dial_code: "+82", flag: "🇰🇷", flagUrl: `https://flagcdn.com/w20/kr.png` },
  { code: "CN", name: "China", dial_code: "+86", flag: "🇨🇳", flagUrl: `https://flagcdn.com/w20/cn.png` },
  { code: "BR", name: "Brazil", dial_code: "+55", flag: "🇧🇷", flagUrl: `https://flagcdn.com/w20/br.png` },
  { code: "ZA", name: "South Africa", dial_code: "+27", flag: "🇿🇦", flagUrl: `https://flagcdn.com/w20/za.png` },
  { code: "MX", name: "Mexico", dial_code: "+52", flag: "🇲🇽", flagUrl: `https://flagcdn.com/w20/mx.png` },
  { code: "AR", name: "Argentina", dial_code: "+54", flag: "🇦🇷", flagUrl: `https://flagcdn.com/w20/ar.png` },
  { code: "CL", name: "Chile", dial_code: "+56", flag: "🇨🇱", flagUrl: `https://flagcdn.com/w20/cl.png` },
  { code: "CO", name: "Colombia", dial_code: "+57", flag: "🇨🇴", flagUrl: `https://flagcdn.com/w20/co.png` },
  { code: "PE", name: "Peru", dial_code: "+51", flag: "🇵🇪", flagUrl: `https://flagcdn.com/w20/pe.png` },
  { code: "SG", name: "Singapore", dial_code: "+65", flag: "🇸🇬", flagUrl: `https://flagcdn.com/w20/sg.png` },
  { code: "MY", name: "Malaysia", dial_code: "+60", flag: "🇲🇾", flagUrl: `https://flagcdn.com/w20/my.png` },
  { code: "ID", name: "Indonesia", dial_code: "+62", flag: "🇮🇩", flagUrl: `https://flagcdn.com/w20/id.png` },
  { code: "TH", name: "Thailand", dial_code: "+66", flag: "🇹🇭", flagUrl: `https://flagcdn.com/w20/th.png` },
  { code: "PH", name: "Philippines", dial_code: "+63", flag: "🇵🇭", flagUrl: `https://flagcdn.com/w20/ph.png` },
  { code: "VN", name: "Vietnam", dial_code: "+84", flag: "🇻🇳", flagUrl: `https://flagcdn.com/w20/vn.png` },
  { code: "RU", name: "Russia", dial_code: "+7", flag: "🇷🇺", flagUrl: `https://flagcdn.com/w20/ru.png` },
  { code: "TR", name: "Turkey", dial_code: "+90", flag: "🇹🇷", flagUrl: `https://flagcdn.com/w20/tr.png` },
  { code: "AE", name: "United Arab Emirates", dial_code: "+971", flag: "🇦🇪", flagUrl: `https://flagcdn.com/w20/ae.png` },
  { code: "SA", name: "Saudi Arabia", dial_code: "+966", flag: "🇸🇦", flagUrl: `https://flagcdn.com/w20/sa.png` },
  { code: "EG", name: "Egypt", dial_code: "+20", flag: "🇪🇬", flagUrl: `https://flagcdn.com/w20/eg.png` },
  { code: "NG", name: "Nigeria", dial_code: "+234", flag: "🇳🇬", flagUrl: `https://flagcdn.com/w20/ng.png` },
  { code: "KE", name: "Kenya", dial_code: "+254", flag: "🇰🇪", flagUrl: `https://flagcdn.com/w20/ke.png` },
  { code: "GH", name: "Ghana", dial_code: "+233", flag: "🇬🇭", flagUrl: `https://flagcdn.com/w20/gh.png` },
  { code: "ZW", name: "Zimbabwe", dial_code: "+263", flag: "🇿🇼", flagUrl: `https://flagcdn.com/w20/zw.png` },
  { code: "UA", name: "Ukraine", dial_code: "+380", flag: "🇺🇦", flagUrl: `https://flagcdn.com/w20/ua.png` },
  { code: "PL", name: "Poland", dial_code: "+48", flag: "🇵🇱", flagUrl: `https://flagcdn.com/w20/pl.png` },
  { code: "RO", name: "Romania", dial_code: "+40", flag: "🇷🇴", flagUrl: `https://flagcdn.com/w20/ro.png` },
  { code: "GR", name: "Greece", dial_code: "+30", flag: "🇬🇷", flagUrl: `https://flagcdn.com/w20/gr.png` },
  { code: "CZ", name: "Czech Republic", dial_code: "+420", flag: "🇨🇿", flagUrl: `https://flagcdn.com/w20/cz.png` }
];
