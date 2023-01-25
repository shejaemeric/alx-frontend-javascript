export default function loadBalancer(chinaDownload, USDownload) {
  const res = Promise.race([chinaDownload, USDownload]).then(((result) => result));
  return res;
}
